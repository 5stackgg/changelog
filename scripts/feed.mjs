import fs from "node:fs";
import path from "node:path";

const ENTRIES = "entries";
const FEED = "feed";

const SECTIONS = { New: "new", Improved: "improved", Fixed: "fixed" };

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

  return {
    index: {
      months: [...months].map(([month, days]) => ({ month, days: days.length })),
      areas: [...areas].sort(),
    },
    months: [...months].map(([month, days]) => ({ month, days })),
  };
}

export function writeFeed() {
  const files = fs
    .readdirSync(ENTRIES, { recursive: true })
    .filter((file) => /^\d{4}-\d{2}-\d{2}\.md$/.test(path.basename(file)))
    .map((file) => [
      path.basename(file, ".md"),
      fs.readFileSync(path.join(ENTRIES, file), "utf8"),
    ]);

  const { index, months } = buildFeed(files);

  fs.mkdirSync(FEED, { recursive: true });
  for (const month of months) {
    fs.writeFileSync(path.join(FEED, `${month.month}.json`), `${JSON.stringify(month, null, 2)}\n`);
  }
  fs.writeFileSync(path.join(FEED, "index.json"), `${JSON.stringify(index, null, 2)}\n`);
}

if (import.meta.main) {
  writeFeed();
}
