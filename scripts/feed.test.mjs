import assert from "node:assert/strict";
import { test } from "node:test";
import { buildFeed, parseEntry } from "./feed.mjs";

const entry = [
  "# Thursday, October 29, 2026",
  "",
  "A big day: AMD GPU support and broad speed-ups.",
  "",
  "## New",
  "- **Self-hosting:** AMD GPU nodes can now run live streams.",
  "- **Leaderboards:** The event leaderboard has an ELO Gained tab",
  "  that ranks players by rating gained.",
  "",
  "## Fixed",
  "- **Seasons:** Tournament matches count toward the season.",
  "",
].join("\n");

test("parseEntry splits the summary and the sections", () => {
  assert.deepEqual(parseEntry(entry), {
    summary: "A big day: AMD GPU support and broad speed-ups.",
    sections: {
      new: [
        { area: "Self-hosting", text: "AMD GPU nodes can now run live streams." },
        {
          area: "Leaderboards",
          text: "The event leaderboard has an ELO Gained tab that ranks players by rating gained.",
        },
      ],
      improved: [],
      fixed: [{ area: "Seasons", text: "Tournament matches count toward the season." }],
    },
  });
});

test("parseEntry drops sections it doesn't know and bullets without an area keep an empty one", () => {
  const parsed = parseEntry(
    ["Summary.", "## Notes", "- **Docs:** ignored", "## Improved", "- Faster pages."].join("\n"),
  );

  assert.equal(parsed.summary, "Summary.");
  assert.deepEqual(parsed.sections.improved, [{ area: "", text: "Faster pages." }]);
  assert.deepEqual(parsed.sections.new, []);
});

test("buildFeed groups days by month, newest first, and lists every area once", () => {
  const { index, months } = buildFeed([
    ["2026-10-29", entry],
    ["2026-11-01", "Quiet day.\n\n## Fixed\n- **Matches:** One fix."],
    ["2026-10-30", "Another day.\n\n## Improved\n- **Seasons:** Faster."],
  ]);

  assert.deepEqual(index, {
    months: [
      { month: "2026-11", days: 1 },
      { month: "2026-10", days: 2 },
    ],
    areas: ["Leaderboards", "Matches", "Seasons", "Self-hosting"],
  });
  assert.deepEqual(
    months.map((month) => [month.month, month.days.map((day) => day.date)]),
    [
      ["2026-11", ["2026-11-01"]],
      ["2026-10", ["2026-10-30", "2026-10-29"]],
    ],
  );
});
