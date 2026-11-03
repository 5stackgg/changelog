import assert from "node:assert/strict";
import { test } from "node:test";
import { AREAS } from "./areas.mjs";
import { buildFeed, conform, parseEntry } from "./feed.mjs";

const entry = [
  "# Thursday, October 29, 2026",
  "",
  "A big day: AMD GPU support and broad speed-ups.",
  "",
  "## Stats & Leaderboards",
  "- **New:** The event leaderboard has an ELO Gained tab",
  "  that ranks players by rating gained.",
  "- **Fixed:** Tournament matches count toward the season.",
  "",
  "## Self-hosting",
  "- **New:** AMD GPU nodes can now run live streams.",
  "",
].join("\n");

test("every section has a unique name and says what it covers", () => {
  const names = AREAS.map(({ name }) => name.toLowerCase());
  assert.equal(new Set(names).size, names.length);
  for (const { name, covers } of AREAS) {
    assert.match(name, /^[A-Z][\w &-]+$/, name);
    assert.ok(covers.length > 0, name);
  }
});

test("parseEntry splits the summary and files each bullet under its section and kind", () => {
  assert.deepEqual(parseEntry(entry), {
    summary: "A big day: AMD GPU support and broad speed-ups.",
    sections: {
      new: [
        {
          area: "Stats & Leaderboards",
          text: "The event leaderboard has an ELO Gained tab that ranks players by rating gained.",
        },
        { area: "Self-hosting", text: "AMD GPU nodes can now run live streams." },
      ],
      improved: [],
      fixed: [{ area: "Stats & Leaderboards", text: "Tournament matches count toward the season." }],
    },
  });
});

test("parseEntry drops sections it doesn't know and bullets without a kind, and matches names in any case", () => {
  const parsed = parseEntry(
    [
      "Summary.",
      "## Docs",
      "- **New:** under an unknown section",
      "## game SERVERS",
      "- **improved:** Nodes reconnect sooner.",
      "- Faster pages.",
      "  continued",
      "- **Matches:** an area where the kind goes",
    ].join("\n"),
  );

  assert.equal(parsed.summary, "Summary.");
  assert.deepEqual(parsed.sections, {
    new: [],
    improved: [{ area: "Game servers", text: "Nodes reconnect sooner." }],
    fixed: [],
  });
});

test("buildFeed groups days by month, newest first, and lists the sections used in section order", () => {
  const output = buildFeed([
    ["2026-10-29", entry],
    ["2026-11-01", "Quiet day.\n\n## Matches\n- **Fixed:** One fix."],
    ["2026-10-30", "Another day.\n\n## Matchmaking\n- **Improved:** Faster queues."],
  ]);
  const index = JSON.parse(output.get("index.json"));

  assert.deepEqual([...output.keys()], ["2026-11.json", "2026-10.json", "index.json"]);
  assert.deepEqual(
    index.months.map(({ month, days }) => ({ month, days })),
    [
      { month: "2026-11", days: 1 },
      { month: "2026-10", days: 2 },
    ],
  );
  assert.deepEqual(index.areas, ["Matchmaking", "Matches", "Stats & Leaderboards", "Self-hosting"]);
  assert.deepEqual(
    JSON.parse(output.get("2026-10.json")).days.map((day) => day.date),
    ["2026-10-30", "2026-10-29"],
  );
});

test("buildFeed hashes each month's exact bytes, so only a changed month gets a new hash", () => {
  const hashOf = (files, month) =>
    JSON.parse(buildFeed(files).get("index.json")).months.find((m) => m.month === month).hash;
  const before = [
    ["2026-10-29", entry],
    ["2026-11-01", "Quiet day.\n\n## Matches\n- **Fixed:** One fix."],
  ];
  const redone = [before[0], ["2026-11-01", "Quiet day.\n\n## Matches\n- **Fixed:** A fix."]];

  assert.match(hashOf(before, "2026-10"), /^[0-9a-f]{16}$/);
  assert.equal(hashOf(before, "2026-10"), hashOf(redone, "2026-10"));
  assert.notEqual(hashOf(before, "2026-11"), hashOf(redone, "2026-11"));
});

test("conform keeps the entry format and drops what the feed couldn't read", () => {
  const { markdown, dropped } = conform(
    [
      "A **big** day.",
      "",
      "## Demos & Replays",
      "- **New:** Anyone can upload demos.",
      "- **New**: colon outside the bold.",
      "- **Fixed:** text with **bold** inside",
      "- **Demos:** an area where the kind goes",
      "### Extra heading",
      "",
      "## Performance",
      "- **Improved:** under an unknown section.",
      "",
      "## New",
      "- **Matches:** the old format.",
      "",
      "## Stats & Leaderboards",
      "  - an indented bullet with no kind",
      "- **Fixed:** Tournament matches count.",
    ].join("\n"),
  );

  assert.equal(
    markdown,
    [
      "A big day.",
      "",
      "## Demos & Replays",
      "- **New:** Anyone can upload demos.",
      "",
      "## Stats & Leaderboards",
      "- **Fixed:** Tournament matches count.",
    ].join("\n"),
  );
  assert.equal(dropped, 9);
});

test("conform puts sections in section order, merges a repeated one and orders bullets by kind", () => {
  const { markdown, dropped } = conform(
    [
      "Summary.",
      "",
      "## self-hosting",
      "- **fixed:** Updates finish again.",
      "- **New:** AMD GPU nodes run streams.",
      "",
      "## Matchmaking",
      "- **Improved:** Queues are faster.",
      "",
      "## Self-hosting",
      "- **Improved:** Logs show restarts.",
      "- **New:** Backups run nightly.",
    ].join("\n"),
  );

  assert.equal(
    markdown,
    [
      "Summary.",
      "",
      "## Matchmaking",
      "- **Improved:** Queues are faster.",
      "",
      "## Self-hosting",
      "- **New:** AMD GPU nodes run streams.",
      "- **New:** Backups run nightly.",
      "- **Improved:** Logs show restarts.",
      "- **Fixed:** Updates finish again.",
    ].join("\n"),
  );
  assert.equal(dropped, 0);
});

test("conform leaves an entry with no sections as just its summary", () => {
  assert.deepEqual(conform("Nothing much.\n\n## Docs\n- **New:** A guide."), {
    markdown: "Nothing much.",
    dropped: 2,
  });
});
