import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const ENTRIES = "entries";
const FEED = "feed";
const README_ENTRIES = 14;

const SECTIONS = { New: "new", Improved: "improved", Fixed: "fixed" };
const BULLET = /^- \*\*([^*]+):\*\* ([^*]+)$/;

// Keeps an entry to the one shape the feed parses: summary lines, the three
// known headings, and "- **Area:** text" bullets. A heading it doesn't know
// takes its bullets with it, so nothing lands under the wrong section.
export function conform(markdown) {
  const kept = [];
  let dropped = 0;
  let section;

  for (const line of markdown.split("\n")) {
    const trimmed = line.trim();
    if (trimmed === "") {
      kept.push("");
      continue;
    }

    if (trimmed.startsWith("## ")) {
      section = SECTIONS[trimmed.slice(3)] ? trimmed : null;
      if (section) {
        kept.push(section);
      } else {
        dropped++;
      }
      continue;
    }

    if (trimmed.startsWith("#")) {
      dropped++;
      continue;
    }

    if (section === undefined) {
      kept.push(trimmed.replaceAll("*", ""));
      continue;
    }

    if (section && BULLET.test(trimmed)) {
      kept.push(trimmed);
    } else {
      dropped++;
    }
  }

  const filled = kept.filter((line, index) => {
    if (!line.startsWith("## ")) {
      return true;
    }
    const next = kept.slice(index + 1).find((after) => after !== "");
    return next !== undefined && !next.startsWith("## ");
  });

  return {
    markdown: filled.join("\n").replace(/\n{3,}/g, "\n\n").trim(),
    dropped,
  };
}

export function parseEntry(markdown) {
  const summary = [];
  const sections = { new: [], improved: [], fixed: [] };
  let section;
  let item = null;

  for (const raw of markdown.split("\n")) {
    const line = raw.trim();
    if (line === "" || line.startsWith("# ")) {
      continue;
    }

    if (line.startsWith("## ")) {
      section = SECTIONS[line.slice(3).trim()] ?? null;
      item = null;
      continue;
    }

    if (section === undefined) {
      summary.push(line);
      continue;
    }

    const bullet = line.match(/^- (?:\*\*(.+?):\*\*\s*)?(.*)$/);
    if (bullet) {
      item = section ? { area: bullet[1] ?? "", text: bullet[2] } : null;
      if (item) {
        sections[section].push(item);
      }
      continue;
    }

    if (item) {
      item.text = `${item.text} ${line}`;
    }
  }

  return { summary: summary.join(" "), sections };
}

function json(value) {
  return `${JSON.stringify(value, null, 2)}\n`;
}

// Each month's hash is of its file's exact bytes, so a reader can key its
// cache on it and tell a stale copy from the current one.
export function buildFeed(files) {
  const months = new Map();
  const areas = new Set();

  for (const [date, markdown] of [...files].sort(([a], [b]) => b.localeCompare(a))) {
    const day = { date, ...parseEntry(markdown) };
    for (const item of Object.values(day.sections).flat()) {
      areas.add(item.area);
    }

    const month = date.slice(0, 7);
    if (!months.has(month)) {
      months.set(month, []);
    }
    months.get(month).push(day);
  }

  areas.delete("");

  const output = new Map();
  const index = { months: [], areas: [...areas].sort() };
  for (const [month, days] of months) {
    const body = json({ month, days });
    output.set(`${month}.json`, body);
    index.months.push({
      month,
      days: days.length,
      hash: createHash("sha256").update(body).digest("hex").slice(0, 16),
    });
  }
  output.set("index.json", json(index));

  return output;
}

function readEntries() {
  return fs
    .readdirSync(ENTRIES, { recursive: true })
    .filter((file) => /^\d{4}-\d{2}-\d{2}\.md$/.test(path.basename(file)))
    .map((file) => [
      path.basename(file, ".md"),
      fs.readFileSync(path.join(ENTRIES, file), "utf8"),
    ]);
}

export function writeFeed() {
  const output = buildFeed(readEntries());

  fs.mkdirSync(FEED, { recursive: true });
  for (const file of fs.readdirSync(FEED)) {
    if (file.endsWith(".json") && !output.has(file)) {
      fs.rmSync(path.join(FEED, file));
    }
  }
  for (const [file, body] of output) {
    fs.writeFileSync(path.join(FEED, file), body);
  }
}

export function writeReadme() {
  const entries = readEntries()
    .sort(([a], [b]) => b.localeCompare(a))
    .slice(0, README_ENTRIES)
    .map(([, markdown]) => markdown.trim().replace(/^(#+) /gm, "#$1 "));

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

if (import.meta.main) {
  writeFeed();
  writeReadme();
}
