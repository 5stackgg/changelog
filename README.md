# 5Stack changelog

What changed in 5Stack each day: new features, improvements and fixes across the web app, game servers and self-hosted panels. Each entry is written automatically from that day's merged changes (UTC).

## Friday, October 30, 2026

Today brings Rokkan, an AI coach that reviews matches and scouts opponents, along with player and chat reports, team roster history, VAC Off matches and more control over game server nodes.

### New

- **Coach:** A new Coach page lists Rokkan's reviews of your matches, scouting on your next scrim or tournament opponent, and your tendencies. Each review moment opens the 2D replay at that round, and a scheduled match shows a Rokkan briefing in its header.
- **Coach:** One verified player in a match unlocks Rokkan reviews for every signed-in player in it, including imported matches. Players who have friended a 5Stack bot also get their review and scouting briefing as a Steam message, and administrators can ask Rokkan to review any finished match.
- **Moderation:** Players can report someone they played with in the last 30 days from their profile or the scoreboard. Moderators handle each reported player as one case in a new Player Reports tab, and the reporter is told the outcome.
- **Moderation:** Players can report chat messages, and moderators handle them from a new moderation queue. Admins can set blocked words that are masked in chat, and when Rokkan is connected it reviews group chat and removed lines show as "Message removed by Rokkan".
- **Teams:** Player profiles have a Teams tab showing the teams a player joined and left. Team pages show a roster history timeline, and joins, leaves and removals appear in the activity feed.
- **Matches:** Organizers can turn VAC off for a match, and admins can do the same for a dedicated server. The match page asks for a reboot when the running server doesn't match the setting, and VAC-off matches only use servers that allow it.
- **Game servers:** Admins can choose which match types each node hosts, whether it takes practice servers, or make it practice-only. Highlight clips get their own GPU switch, separate from lineup renders.
- **Game servers:** Region pickers for matches, tournament stages, quick queue and practice leave out regions that can't host that match type. The region page shows how many nodes take each type.
- **Self-hosting:** Nodes now warn when they need a reboot to finish installing updates, when the NVIDIA driver no longer matches the loaded one, or when automatic security updates are off on Ubuntu. To run these checks, the node connector reads some host system folders read-only, and a GPU node already waiting on a driver reboot needs that reboot before its connector starts again.
- **Self-hosting:** Node to-dos now lead the header's update popover, worst first. A node's inspector shows the steps or command to fix each warning.
- **Self-hosting:** The System Logs page shows how many times each service and pod restarted. One click opens the run that crashed, which you can also download.
- **Self-hosting:** Panels can opt in to deploying Rokkan, the AI service, with its own separate database. Updates now keep it current on installs where it is set up.
- **Changelog:** A new Changelog page shows the daily changes, with search and filters across the whole history. You can open it from the account menu or the command palette.
- **Welcome:** The welcome page shows Scrim Finder, community servers, leagues and events as preview cards. A new page shows guests what running your own 5Stack looks like.

### Improved

- **Performance:** All open tabs now share one live connection, and signed-in pages reload parts like invites, lobbies, teams and notifications only when they change. Both changes make pages respond faster.
- **Leaderboards:** K/D, HS% and rating boards filtered by source or role load much faster. K/D and HS% ranks are back on player panels.
- **Demos:** Parsed demos now record callouts for positions, kills and grenades. Round inventories now reflect the loadout when buy time ends, so late buyers and second flashbangs show up correctly.
- **Self-hosting:** Update Now closes the popover and shows progress immediately. Refreshing the page still shows the update running, so it isn't started twice.
- **Self-hosting:** The API, web app, demo parser, node connector and browser extension are now under the run-only 5Stack License, and earlier versions keep their previous licenses. The docs' license page lists which parts remain open source.

### Fixed

- **Matches:** A late duplicate status from a game server no longer sends a live map back to warmup or loses a map's final result.
- **Matches:** A live match's header no longer says "Auto Canceling" while a map is being played, and during warmup it shows "Deadline in".
- **Matches:** Matches on dedicated servers hosted on a 5Stack node are no longer offered Reboot Server. When such a server drops, the match shows Offline instead of Booting.
- **Streams:** Live streams download every workshop map left in the series, so they no longer stop at a download prompt on map 2 or 3.
- **Highlights:** Rendered highlight clips get their thumbnails again.
- **Radar:** The in-game practice radar places markers accurately and switches to the lower floor on Nuke, Train and Vertigo. Replay radars are recalibrated, and bomb sites are drawn at their real positions.
- **Welcome:** The Community servers and Events previews load instead of showing an empty box. The match page preview no longer captures the mouse wheel.
- **Self-hosting:** The panel keeps running when a log view is closed, a server reboots with its logs open, or a download is interrupted. Log zip downloads covering several pods or containers no longer fail.
- **Self-hosting:** Node warnings that aren't about the CPU are no longer labelled as CPU problems.
- **Game servers:** The node connector starts again after its latest update. It also keeps running when a game server crashes, a demo can't be read or a network interface disappears.

## Thursday, October 29, 2026

A big day: AMD GPU support for self-hosted panels, a move to Traefik, wider demo uploads, an event ELO leaderboard, and broad speed-ups.

### New
- **Self-hosting:** AMD GPU nodes can now run live streams, demo playback and highlight rendering. The setup script labels AMD nodes and asks whether to include integrated GPUs, and the panel reports each AMD node's GPU details.
- **Self-hosting:** The panel now routes traffic through Traefik using the Kubernetes Gateway API. Existing installs switch over during the update, reverse-proxy setups keep working on port 443, and plugins can ship their own Gateway API routes.
- **Leaderboards:** The event leaderboard has an ELO Gained tab that ranks players by how much the event's matches raised or lowered their rating.
- **Demos:** Administrators can choose who may upload demos in demo settings, and every signed-in user can upload by default. Uploads are limited per player, and an upload by a non-administrator only changes the uploader's own rating.
- **Docs:** New and updated self-hosting guides cover adding AMD GPU nodes, the new ports page for Traefik, plugin Gateway API routes, fixed steps for moving off the lowlatency kernel, and the smallest recommended panel size, which now covers up to 1,000 people online.

### Improved
- **Matches:** The match scoreboard keeps players in ADR order in every view, rows glide to their new places when the order changes, and stat numbers roll like an odometer.
- **Performance:** The notification bell, friends list, "my matches" banner, matches list, Play page server list, live match count, lobby and draft status, and profile and team highlights all load faster and put less strain on busy panels. The bell, friends list and your matches also appear right away when a page opens, without waiting about a second.
- **Self-hosting:** A running Kubernetes update shows the version it is updating to with its progress beside the title. It can no longer be stopped part way, which would leave nodes on different versions.
- **Self-hosting:** After you press Update Now, the popover shows that services are updating, then closes, and the header icon spins until the update finishes.
- **Self-hosting:** When adding a game server node fails, the error now explains why, including when the cause is your network plan or billing.

### Fixed
- **Seasons:** Tournament matches now count toward the season they're played in, so a player's season ELO includes their events. Affected seasons are recalculated shortly after updating, and recalculating ratings no longer drops tied matches.
- **Streams:** Streams, demo playback and highlights on workshop maps no longer stop at CS2's workshop download prompt. The startup progress now shows the map download in the right order.
- **Streams:** The HUD shows each team under its own name for the whole map, so map winners and series scores go to the right team.
- **Notifications:** The notification bell, highlights and "my matches" banner no longer show outdated information after a quick change.
- **Self-hosting:** Panels and game nodes on Ubuntu 26.04 start correctly again, and ending a match or dedicated server stops its CS2 server.
- **Self-hosting:** The Kubernetes update no longer counts offline nodes it will skip, and no longer offers an update when only offline nodes are behind.
- **Self-hosting:** A GPU node preparation step that failed now keeps showing its error instead of disappearing, and the node's startup progress shows its percentage in brackets.

Older days are in [entries](entries).
