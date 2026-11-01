# 5Stack changelog

What changed in 5Stack each day: new features, improvements and fixes across the web app, game servers and self-hosted panels. Each entry is written automatically from that day's merged changes (UTC).

## Saturday, October 31, 2026

Today brings a redesigned Rokkan coach with team reviews, a reorganized notification bell, Career levels with cosmetics, new self-hosting controls, and broad speed-ups.

### New
- **Coach:** Rokkan reviews open in a full-width replay that starts paused on your first fix, with a menu to view the review as yourself, your team or a teammate. On wide screens the whole review fits one screen, with a list of every moment to jump between, and Space or K plays and pauses from anywhere on the page.
- **Coach:** The match page shows a Rokkan Review band that moves through Queued, Reviewing and Ready, then previews the review's summary. The coach page lists each review as its match, marks unopened reviews as New with a filter for them, and the side menu counts your unopened reviews.
- **Coach:** Teammates can see each other's Rokkan reviews from team matches on the team page's Coach tab and in a team view on the coach page. This view includes roster cards and team habits, with See All for the full list.
- **Coach:** Administrators can open any team's or match's reviews in full. A team they opened but aren't on is marked with an Admin tag.
- **Notifications:** The bell is sorted into Needs you, Live now, New for you and Earlier. Alerts that resolve, such as a resumed map or a node back online, show their end state and move to Earlier.
- **Notifications:** A new "Clips of you" reel in the bell marks clips you haven't watched. Review notifications stack together, and content notices show a cover image.
- **Notifications:** On slim notification rows, clicking the dot marks the row read and double-clicking deletes it. The time turns into a menu that holds Delete. Administrators also get a gallery page with a sample of every notification type.
- **Career:** Every rated match now earns Career XP, and each level pays Stacks. Players unlock, buy or are granted cosmetics for their player card: banners, frames, nameplates and titles.
- **Career:** The cosmetics catalog has over 450 items, including an animated tier, and the Career Track now has rewards up to Level 1000. Administrators can grant items and Stacks to players, a team or a tournament's roster.
- **Support 5Stack:** A checklist in the bell asks players to join the 5stack.gg Steam group and wear its clan tag in CS2, with a step-by-step guide in the FAQ. Once an imported match shows you wearing the tag, the card turns into a thank-you and stays that way.
- **Matchmaking:** Turning matchmaking or a mode off now takes every lobby queued for it out of the queue. Ready checks already under way are left alone.
- **Self-hosting:** Panels installed with the 5Stack service get an update center where you choose Manual, Scheduled or When idle updates. Update Now runs a preflight check, shows live progress and pauses new matches until live ones finish.
- **Self-hosting:** Panels installed with the 5Stack service can also add game server nodes by code with an approval step. Settings gains Backup & Recovery, with nightly backups and Back Up Now, and a Diagnostics page.
- **Self-hosting:** Busy panels can run more than one replica of the API engine, placed on separate nodes where possible.

### Improved
- **Performance:** Several pages are faster and lighter when many people view them at once:
- **Live updates:** Changes to other players' names, avatars and ranks now show up right away in lobbies, matches, invites and drafts. Your profile updates as soon as a gag or mute ends.
- **Matches:** The Connect button on the Play schedule updates when a region switches to or from LAN.
- **Steam:** An imported match's Steam message waits for its Rokkan review and is a single short line with the match link, without a large map preview. Rokkan review messages over Steam now go only to matches played outside 5Stack, and the duplicate in-app "Match Imported" notice is gone.
- **Self-hosting:** Disabled nodes that are online now get node file updates and Kubernetes maintenance changes, and show a dimmed amber dot while one is waiting. The "Node changes waiting" and "Kubernetes update available" alerts clear themselves once the work is done.
- **Self-hosting:** System Logs now includes the AI service that runs Rokkan, with its warnings and errors shown correctly.

### Fixed
- **Notifications:** Invite notifications clear from the bell once the invite is accepted, declined or withdrawn.
- **Notifications:** Staff bells update live as role-wide alerts arrive, are dismissed or are deleted, and show only the alerts meant for them. Tournament registration invites now count toward the badge for a team's roster admins.
- **Accounts:** After your role changes, the site picks up your new permissions right away without a reload.
- **Coach:** An administrator's coach inbox lists only their own reviews. The inbox no longer counts teammates' findings as yours.
- **Coach:** Rokkan notices name maps the same way the site does.
- **Steam:** Steam messages that Steam delays or rate-limits are retried instead of lost, and are never sent twice.
- **Teams:** Team cards show a space before "vs" in the Next and Last rows.
- **Game servers:** Server owners can add themselves to a restricted server's player list.
- **Game servers:** A dedicated server keeps loading a plugin after its node auto-updates it.
- **Self-hosting:** Panels updated to the latest version finish starting up again.

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
