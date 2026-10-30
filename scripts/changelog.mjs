import fs from "node:fs";
import path from "node:path";
import Anthropic from "@anthropic-ai/sdk";
import { blocklist, gate, sanitize } from "./redact.mjs";

const ORG = "5stackgg";

const AREAS = {
  api: "the 5Stack web app (server side)",
  web: "the 5Stack web app",
  "5stack-panel": "self-hosting: installing, updating and running a panel",
  "game-server": "the CS2 game server plugin",
  "game-server-node-connector": "game server nodes",
  "game-streamer": "match streams and highlight rendering",
  "demo-parser": "demos, replays and match stats",
  "5stack-extension": "the 5Stack browser extension",
  docs: "the documentation site",
  "plugin-registry": "the plugin registry",
};

const SKIP_LABELS = ["no-changelog", "internal"];

const ENTRIES = "entries";
const README_ENTRIES = 14;
const BODY_LIMIT = 2000;
const NOTHING = "NOTHING_TO_REPORT";

const SYSTEM = `You write the public daily changelog for 5Stack, a platform for running Counter-Strike 2 matches, tournaments and leagues. People use it on 5stack.gg and on panels they host themselves.

You get one day's merged pull requests as JSON. Each has an "area" (the part of the product its repository covers), a "title" and a "body". Titles usually start with a type: feature, bug or fix, perf, ux, docs, chore, test, ci, refactor.

Write for players, organizers and people who host their own panel. Tell them what changed for them, not how it was built.

Include:
- Features, fixes and improvements people would notice. Fold related pull requests into one entry, such as a server and a web change for the same feature, or several speed-ups of the same kind.
- Many performance changes on one day become one entry that names the places that got faster.
- Self-hosting changes (installer, node setup, updates, GPU support) under the Self-hosting area.
- Docs changes only when they add or change a guide people follow.

Leave out tests, CI, refactors, dependency bumps, internal tooling, load-testing, and anything with no visible effect.

Never write any of the following. A line containing one is deleted before publishing:
- Pull request, issue or commit numbers, repository names, links, or people's names or handles.
- Code: function, table, column, view, file, script, environment variable, job or setting key names, SQL, or query plans. Name what people see ("the friends list"), not what runs behind it.
- Internal services and infrastructure (Hasura, Postgres, Redis, BullMQ, queues, pods, indexes, vacuuming, polling). Self-hosters manage their nodes, GPUs, Kubernetes updates and Traefik, so those may be named in Self-hosting entries.
- Names of customers, panels or communities, domains other than 5stack.gg, IP addresses, hostnames, emails, or when an incident happened.
- How a security or abuse problem worked. Say what is better now ("Demo uploads are limited per player"), never what could be done before or how.
When unsure whether something is sensitive, leave it out.

Format:
- Markdown. Open with one short sentence summing up the day, without a heading.
- Then up to three sections, in this order and only when they have entries: "## New", "## Improved", "## Fixed".
- One bullet per entry: "- **Area:** what changed." Areas are short product words people know, such as Matches, Tournaments, Seasons, Leaderboards, Demos, Highlights, Streams, Lobbies, Friends, Notifications, Game servers, Self-hosting or Docs.
- Present tense, one or two plain sentences per entry, no hype, no emoji.
- If nothing is worth telling users, reply with exactly ${NOTHING}.`;

function previousDay() {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() - 1);
  return date.toISOString().slice(0, 10);
}

function parseArgs(argv) {
  const dateIndex = argv.indexOf("--date");
  const date = (dateIndex >= 0 ? argv[dateIndex + 1] : process.env.DATE) || previousDay();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(`${date}T00:00:00Z`))) {
    throw new Error(`Invalid date: ${date}`);
  }
  return { date, dryRun: argv.includes("--dry-run") };
}

async function github(query, variables) {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      authorization: `bearer ${process.env.GH_READ_TOKEN}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });
  const json = await response.json();
  if (!response.ok || json.errors) {
    const messages = (json.errors ?? []).map((error) => error.message).join("; ");
    throw new Error(`GitHub GraphQL failed with status ${response.status}: ${messages || json.message}`);
  }
  return json.data;
}

async function mergedPullRequests(date) {
  const query = `query($q: String!, $after: String) {
    search(query: $q, type: ISSUE, first: 100, after: $after) {
      pageInfo { hasNextPage endCursor }
      nodes {
        ... on PullRequest {
          title
          body
          author { __typename login }
          labels(first: 20) { nodes { name } }
          repository { name }
        }
      }
    }
  }`;
  const q = `org:${ORG} is:pr is:merged base:main merged:${date}T00:00:00Z..${date}T23:59:59Z`;

  const pulls = [];
  let after = null;
  do {
    const { search } = await github(query, { q, after });
    pulls.push(...search.nodes);
    after = search.pageInfo.hasNextPage ? search.pageInfo.endCursor : null;
  } while (after);
  return pulls;
}

function publishable(pull) {
  if (!AREAS[pull.repository.name]) {
    return false;
  }
  if (pull.author?.__typename === "Bot" || pull.author?.login?.endsWith("[bot]")) {
    return false;
  }
  return !pull.labels.nodes.some((label) => SKIP_LABELS.includes(label.name.toLowerCase()));
}

async function summarize(pulls) {
  const client = new Anthropic();
  const response = await client.beta.messages.create({
    model: "claude-opus-5-5",
    max_tokens: 16000,
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    output_config: { effort: "high" },
    system: SYSTEM,
    messages: [{ role: "user", content: JSON.stringify(pulls, null, 2) }],
  });

  if (response.stop_reason !== "end_turn") {
    throw new Error(`Summary stopped early: ${response.stop_reason}`);
  }

  return response.content
    .filter((block) => block.type === "text")
    .map((block) => block.text)
    .join("")
    .trim();
}

function heading(date) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

function entryPath(date) {
  return path.join(ENTRIES, date.slice(0, 4), `${date}.md`);
}

function writeReadme() {
  const entries = fs
    .readdirSync(ENTRIES, { recursive: true })
    .filter((file) => file.endsWith(".md"))
    .sort()
    .reverse()
    .slice(0, README_ENTRIES)
    .map((file) =>
      fs
        .readFileSync(path.join(ENTRIES, file), "utf8")
        .trim()
        .replace(/^(#+) /gm, "#$1 "),
    );

  const readme = [
    "# 5Stack changelog",
    "",
    "What changed in 5Stack each day: new features, improvements and fixes across the web app, game servers and self-hosted panels. Each entry is written automatically from that day's merged changes (UTC).",
    "",
    ...entries.flatMap((entry) => [entry, ""]),
    `Older days are in [${ENTRIES}](${ENTRIES}).`,
    "",
  ].join("\n");

  fs.writeFileSync("README.md", readme);
}

async function main() {
  const { date, dryRun } = parseArgs(process.argv.slice(2));
  const blocked = blocklist(process.env.CHANGELOG_BLOCKLIST);

  const merged = await mergedPullRequests(date);
  const pulls = merged.filter(publishable).map((pull) => ({
    area: AREAS[pull.repository.name],
    title: sanitize(pull.title, blocked),
    body: sanitize(pull.body, blocked).slice(0, BODY_LIMIT),
  }));
  console.log(`${date}: ${merged.length} merged pull requests, ${pulls.length} after filters`);

  if (pulls.length === 0) {
    return;
  }

  const summary = await summarize(pulls);
  if (summary === NOTHING) {
    console.log("Nothing user-facing to report");
    return;
  }

  const { markdown, dropped } = gate(summary, blocked);
  const droppedCount = Object.values(dropped).reduce((sum, count) => sum + count, 0);
  if (droppedCount > 0) {
    console.log(`Gate dropped lines: ${JSON.stringify(dropped)}`);
  }
  if (!markdown.includes("\n- ")) {
    console.log("No entries left after the gate");
    return;
  }

  const entry = `# ${heading(date)}\n\n${markdown}\n`;
  if (dryRun) {
    console.log(`\n${entry}`);
    return;
  }

  const file = entryPath(date);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, entry);
  writeReadme();
  console.log(`Wrote ${file}`);

  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `date=${date}\n`);
  }
}

await main();
