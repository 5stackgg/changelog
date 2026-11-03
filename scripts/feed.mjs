import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { AREAS } from "./areas.mjs";

const ENTRIES = "entries";
const FEED = "feed";
const README_ENTRIES = 14;

// The kind of change each bullet starts with, as written and as the feed
// names it. The feed's "sections" are these, so panels on an older web app
// keep reading the same shape.
const TYPES = { New: "new", Improved: "improved", Fixed: "fixed" };
const LABELS = new Map(Object.keys(TYPES).map((label) => [label.toLowerCase(), label]));
const NAMES = new Map(AREAS.map(({ name }) => [name.toLowerCase(), name]));
const BULLET = /^- \*\*([^*]+):\*\* ([^*]+)$/;

function areaOf(heading) {
  return NAMES.get(heading.trim().toLowerCase()) ?? null;
}

function labelOf(label) {
  return LABELS.get(label.trim().toLowerCase()) ?? null;
}

// Keeps an entry to the one shape the feed parses: summary lines, then a
// "## Area" heading from AREAS for each section with "- **New:** text",
// "- **Improved:** text" or "- **Fixed:** text" bullets. Sections come out in
// AREAS order with a repeated heading merged into the first, and bullets in
// New, Improved, Fixed order. A heading it doesn't know takes its bullets with
// it, so nothing lands under the wrong section.
export function conform(markdown) {
  const summary = [];
  const sections = new Map();
  let dropped = 0;
  let area;

  for (const line of markdown.split("\n")) {
    const trimmed = line.trim();
    if (trimmed === "") {
      continue;
    }

    if (trimmed.startsWith("## ")) {
      area = areaOf(trimmed.slice(3));
      if (!area) {
        dropped++;
      }
      continue;
    }

    if (trimmed.startsWith("#")) {
      dropped++;
      continue;
    }

    if (area === undefined) {
      summary.push(trimmed.replaceAll("*", ""));
      continue;
    }

    const bullet = trimmed.match(BULLET);
    const label = bullet && labelOf(bullet[1]);
    if (!area || !label) {
      dropped++;
      continue;
    }
    if (!sections.has(area)) {
      sections.set(area, []);
    }
    sections.get(area).push({ label, text: bullet[2] });
  }

  const order = Object.keys(TYPES);
  const body = AREAS.filter(({ name }) => sections.has(name)).map(({ name }) => [
    `## ${name}`,
    ...sections
      .get(name)
      .sort((a, b) => order.indexOf(a.label) - order.indexOf(b.label))
      .map(({ label, text }) => `- **${label}:** ${text}`),
  ].join("\n"));

  return {
    markdown: [summary.join("\n"), ...body].filter(Boolean).join("\n\n"),
    dropped,
  };
}

export function parseEntry(markdown) {
  const summary = [];
  const sections = { new: [], improved: [], fixed: [] };
  let area;
  let item = null;

  for (const raw of markdown.split("\n")) {
    const line = raw.trim();
    if (line === "" || line.startsWith("# ")) {
      continue;
    }

    if (line.startsWith("## ")) {
      area = areaOf(line.slice(3));
      item = null;
      continue;
    }

    if (area === undefined) {
      summary.push(line);
      continue;
    }

    if (line.startsWith("- ")) {
      const bullet = line.match(/^- \*\*(.+?):\*\*\s*(.*)$/);
      const label = bullet && labelOf(bullet[1]);
      item = area && label ? { area, text: bullet[2] } : null;
      if (item) {
        sections[TYPES[label]].push(item);
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

  const output = new Map();
  const index = {
    months: [],
    areas: AREAS.map(({ name }) => name).filter((name) => areas.has(name)),
  };
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
    "What changed in 5Stack each day: new features, improvements and fixes across the web app, game servers and self-hosted panels, grouped by the section of 5Stack they touch. Each entry is written automatically from that day's merged changes (UTC).",
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
