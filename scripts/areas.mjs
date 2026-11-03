// The sections of 5Stack an entry is filed under, in the order entries, the
// README and the web app's changelog page show them. Renaming one also means
// renaming its headings in entries/, because a heading that isn't on this list
// is dropped.
export const AREAS = [
  { name: "Matchmaking", covers: "queues, lobbies, ready checks, the Play page and Scrim Finder" },
  {
    name: "Matches",
    covers: "creating and running matches, match pages, map vetoes, scoreboards, rounds, maps and map pools",
  },
  { name: "Tournaments", covers: "tournaments, brackets, stages, registration and tournament awards" },
  { name: "Leagues & Events", covers: "leagues and events" },
  { name: "Utility", covers: "grenade lineups, practice servers and sessions, and a match's Utility tab" },
  { name: "Coach", covers: "Rokkan, the AI coach, and its match reviews, scouting and tendencies" },
  { name: "Demos & Replays", covers: "demo uploads and parsing, the 2D replay and radars" },
  { name: "Streams & Highlights", covers: "live streams, the Watch page, the stream HUD and highlight clips" },
  {
    name: "Stats & Leaderboards",
    covers: "player stats, ELO and ratings, competitive seasons and leaderboards",
  },
  { name: "Players & Teams", covers: "player profiles, teams, rosters, friends and player search" },
  { name: "Career", covers: "Career XP and levels, Stacks, the Locker and cosmetics" },
  { name: "Notifications", covers: "the notification bell, invites and Steam messages" },
  { name: "Moderation", covers: "player and chat reports, bans, mutes and blocked words" },
  {
    name: "Game servers",
    covers: "game server nodes and what they host, dedicated and public servers, regions and the CS2 server plugin",
  },
  {
    name: "Self-hosting",
    covers:
      "installing, updating and running your own panel, including setup scripts, adding nodes, updates, backups, GPUs, Kubernetes, system logs and the self-hosting guides",
  },
  {
    name: "General",
    covers:
      "sign-in and accounts, site-wide speed and live updates, the welcome page, this changelog, and anything no other section covers",
  },
];
