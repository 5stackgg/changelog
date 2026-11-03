# 5Stack changelog

What changed in 5Stack each day: new features, improvements and fixes across the web app, game servers and self-hosted panels, grouped by the section of 5Stack they touch. Each entry is written automatically from that day's merged changes (UTC).

## Monday, November 2, 2026

Today brings community leaderboards with detailed stats, profile backgrounds, a reworked Utility tab and several practice and Career fixes.

### Matchmaking
- **Fixed:** Turning a queue off now keeps every lobby out of it, and affected players get a message saying why.

### Matches
- **Improved:** Multi-kill tiles that open a round breakdown now show a dotted underline.
- **Fixed:** Add New Map shows its Name field again, a Workshop map saves without pressing Refresh, and a failed Steam lookup shows an error. Deleted maps no longer appear in the practice, utility and drift pickers.
- **Fixed:** Restoring a round backup no longer counts the stats of the round in progress twice, or removes rounds a restore can still go back to.

### Tournaments
- **Fixed:** Tournament cards, Quick Look and the next-up strip no longer offer Register on invite-only tournaments or to players already in, and show a joined chip. Free-agent-only tournaments say "Join as a free agent".
- **Fixed:** Revoke no longer shows on calculated tournament awards, and removing a category from a tournament works again.

### Utility
- **New:** The Utility tab shows every throw on a map radar against the common lineups three or more players throw. It marks each throw as on the spot, missed or off-book, and Watch opens the 2D replay at the throw.
- **Fixed:** Saves and results are no longer lost on a temporary error, and a retry no longer creates a duplicate lineup or counts a result twice toward streaks and mastery. A save thrown on a different map than the session is refused instead of being filed under the wrong map.
- **Fixed:** A practice server on a different level than its booked session now switches to the booked map so saves work. The practice HUD comes back after a reconnect.
- **Fixed:** On a map split across two demos, Save and Watch on the Utility tab use the demo the throw came from.

### Coach
- **New:** Rokkan now knows when each team could hear an enemy running or shooting. Utility moments it points out are ringed on the spot in the replay.
- **Fixed:** Rokkan no longer reports a player moving between callouts while they stand on the edge of an area. An admin's re-review reparses older demos to pick up these fixes.

### Streams & Highlights
- **Improved:** Clip actions are the same icons everywhere, and a clip's owner and staff get Public and Delete buttons. A deleted clip disappears from every list and playlist without a reload.

### Stats & Leaderboards
- **New:** The Public Servers page has one leaderboard across every public server you can open, with game mode filters for each period. Community boards add points, community seasons, weapon boards and sortable columns for K/D, headshot %, assists, MVPs, accuracy, streaks, utility, kill types and objectives.
- **Improved:** Wide leaderboards show fades and buttons on the edges that have more columns to scroll to.

### Players & Teams
- **New:** The Community tab gets a game mode filter, K/D, headshot %, assists and MVPs, and tables of the modes and maps a player has played. On servers with the updated game server plugin, it also shows points, accuracy, best streak, hitgroups, kill types and a per-weapon table.

### Career
- **New:** Players can wear one of 100 backgrounds behind their whole profile, 48 of them animated, with cards turning to frosted glass on top. The Locker has a Backgrounds tab, previews the background across the whole page, and lets you take off any worn item.
- **Improved:** Hovering a Locker tile or background no longer changes your card or the page; clicking previews it. The one-time welcome banner is gone, and profile match rows and Locker panels sit on frosted glass over a background, with long names fitting the card.
- **Fixed:** Apply Look in the Locker now actually buys, charges and wears your picks. The Match Rewards panel shows after a finished match again.
- **Fixed:** Cosmetics show to everyone, including signed-out visitors, and nameplates line up with the rank below them.
- **Fixed:** Founder, Legend and other items no longer appear twice in Grant Reward, and admins can grant rewards to themselves.

### Notifications
- **New:** Players get a thank-you notification the first time a demo shows them wearing the 5stack.gg tag. The Support 5Stack card goes away once the tag has been seen.
- **Improved:** Read notifications stay in place and dim, and the bulk actions are now one button in the panel heading. One click on an unread notification's dot marks it read, and one click on a read one deletes it.
- **Fixed:** A group of notifications marked read no longer shows its delete button right away, so a quick second click can't delete it.

### Self-hosting
- **New:** The update center and node inspector show when a game node can't reach its panel and why. Removing a node tells you when its device has to be removed from your network admin by hand.
- **New:** The update center points out a graphics card a game node isn't using and links to the GPU node guide.
- **New:** With the update policy on Manual, a new 5Stack service version appears in the update center and installs only when an admin presses Update Now.
- **New:** The node inspector can set the CPU governor to performance, move a node off the legacy low-latency kernel, and turn low latency on or off in one click. Changes that need a reboot ask first and show the reboot steps, and the panel never reboots a node itself.
- **Improved:** Approving a node join asks for the fingerprint the node printed, and Approve stays disabled until it matches.
- **Improved:** A wrong AMD streaming memory setting is now reported when the panel starts, instead of when a demo or highlight job runs.
- **Fixed:** The update center no longer shows a settings change or a run started from the terminal as a panel update or a failed update.
- **Fixed:** Node tuning checks and old kernel cleanup now run correctly.

### General
- **Improved:** Joining matchmaking and the Play button's waiting count stay fast as the queue grows. Profiles and the Locker scroll more smoothly with animated backgrounds and glass cards.
- **Fixed:** Pages load again when refreshed in Safari.

## Sunday, November 1, 2026

Career levels and the Locker arrive, stats count team kills and suicides the same way everywhere, and self-hosted panels get clearer update controls and easier node removal.

### Coach
- **Improved:** Coach reviews, scouting reports and habits now have their own page addresses, and older review and scouting links still open the right page.
- **Fixed:** Opening a review, scouting report or habits on the coach page now adds a browser history step, so Back returns to the list. The list's tab, map and player filters survive a reload.

### Stats & Leaderboards
- **Fixed:** Team kills and suicides no longer count as kills, and assists on a teammate's death no longer count as assists, and stored lifetime and season totals have been corrected. Tournament and event stats tabs now match the tournament leaderboard, and ELO and stage tiebreakers use the same rule from the next match on.

### Players & Teams
- **Improved:** Player search shows Played with recently above Friends, and you can fold the section shut. It stays folded in that browser.
- **Fixed:** Played with recently in player search now lists the players you recently played with instead of staying empty.

### Career
- **New:** Career levels arrive, with frames, level badges and nameplates on player rows and profile cards, a Career page with your track, the Locker and Stacks, match rewards and a one-time welcome banner. Applying a look in the Locker buys and wears it on your account, and banners and frames come with a pattern you can reroll for Stacks.

### Notifications
- **Improved:** Pending team, tournament and draft invites in the bell now show as cards with Deny and Accept under the headline, and a plain team invite names who invited you and to which team.
- **Fixed:** In slim notification rows, wrapped lines now start at the row's edge, and a paused match row is the same height as other rows.
- **Fixed:** The award notification now leads with the award's name and shows its badge on the right, so the badge no longer covers the title.

### Game servers
- **New:** On agent-managed panels, removing a node can also uninstall 5Stack from its server, and this option is on by default. The dialog keeps showing progress after a reload and offers Remove Anyway if the uninstall fails.
- **Improved:** Adding a node with a join code looks the code up as soon as the sixth digit is entered, so there is no Find button to press.
- **Improved:** The slow CPU governor warning gives the command to fix it, with a copy button, and links to the CPU Governance docs. Nodes whose governor can't be read no longer show the warning.
- **Fixed:** A node added with a join code now starts enabled and takes matches right away.
- **Fixed:** A node removed from its own server with the 5Stack command line now also disappears from the panel.
- **Fixed:** On panels installed by the 5Stack service, game server nodes are no longer shown as unsupported when node networking is already set up.

### Self-hosting
- **New:** Managed panels have a Settings > Panel updates page for choosing when updates install. The header now shows the panel only when an update is waiting on you.
- **New:** Managed panels that keep secrets in an external secret store now warn in the header when secrets can't sync, with a settings page that lists each failing secret, why it fails and how to fix it. Check Now asks for a resync, and an update that is missing secrets lists them before it starts.
- **New:** When a panel update rolls back, admins get a notification with the reason and the header shows it in amber. Automatic and scheduled updates skip a release that failed on your panel, and you can still install it with Update Now.
- **New:** Existing panels installed from a git checkout can move onto the 5Stack service and keep their configuration and secrets.
- **Improved:** The header's panel row now reads as one line, such as "Panel 2026.11.1.2 is ready".
- **Improved:** New matches are held during a panel update only when the update needs it, and matches already running carry on. Your own node on/off settings are no longer changed, and held matches start once the update finishes.
- **Improved:** The nightly database backup checks that the storage bucket belongs to your S3 account before uploading, and the backup job shows as failed if it doesn't.
- **Fixed:** Panels with played matches can update again, and the leaderboard no longer fails after an update.
- **Fixed:** The setup scripts' node prompt only accepts a number from its list and asks again otherwise.

### General
- **Improved:** Several pages put less load on the site while open and stay faster under heavy traffic: match page highlight clips, player profiles, the Play page and public server lists, and the Scrim Finder board.

## Saturday, October 31, 2026

Today brings Career levels and cosmetics, team reviews and a redesigned review screen for Rokkan, a reorganized notification bell, self-hosting controls for updates and backups, and speed-ups across the site.

### Matchmaking
- **Improved:** Turning matchmaking or a mode off now also removes everyone already queued for it. Ready checks already under way continue.
- **Fixed:** The Connect button in the Play page's schedule updates right away when a region is switched to or from LAN.

### Coach
- **New:** Teammates can see each other's Rokkan reviews from matches they played as a team, but only for current roster members. The team page has a Coach tab with a card for each player (top fix, strength and latest review), team habits and reviewed team matches, and the Coach page has a matching team view where See All opens every team habit.
- **New:** A Rokkan review opens in a full-width replay, paused at your first issue. Clocks in the text jump the replay, and a view-as menu shows the team summary or any teammate's review.
- **New:** On wide screens, a list of every moment sits beside the review's replay. Space or K plays and pauses from anywhere on the page, and P and N step through moments.
- **New:** The match page shows a Rokkan Review band while a review is queued and in progress, then previews its summary once it is ready.
- **New:** The Coach page lists each review as its match, with Rokkan's top fix and summary underneath. Reviews you haven't opened are marked New and have their own filter, and the left menu counts them.
- **Improved:** Scouting has a map picker, a T/CT toggle, and its calls in a column beside the replay. Habits appear only after 3 reviewed matches.
- **Improved:** Administrators can open any team's reviews on the Coach page, where those teams carry an Admin tag, and can read every part of any review.
- **Fixed:** The Coach inbox lists only your own reviews, including for administrators, and no longer counts teammates' findings as yours.

### Players & Teams
- **Fixed:** Team cards on the teams page show a space before "vs" in their Next and Last rows.

### Career
- **New:** Every rated match now earns Career XP, with more for a win and more at higher ratings. Every 1,000 XP is a level worth 100 Stacks, and existing players are levelled from their match history.
- **New:** A catalog of over 450 banners, frames, nameplates and titles for your player card, including animated ones. You unlock items on the Career Track up to Level 1000, buy them with Stacks, earn them through awards, or receive them from administrators.

### Notifications
- **New:** The bell is sorted into Needs You, Live Now, New for You and Earlier. When something ongoing ends, its notification shows the outcome, such as Map Resumed or Server Back Online, and moves to Earlier.
- **New:** The bell has a reel of your unseen clips from the last 30 days.
- **New:** Notifications about reviews, clips, awards, invites, tournaments and similar news show as cards with a cover and a main action, and the rest as one-line rows. Several Rokkan reviews stack into one card.
- **New:** Administrators have a gallery that shows a sample of every notification type and state.
- **Improved:** On a notification row, hover the dot and click to mark it read or double-click to delete it. The time opens a menu that includes Delete.
- **Improved:** Rokkan sends review messages over Steam only for matches played outside 5Stack, and reviews of 5Stack matches arrive in the app.
- **Improved:** An imported match gets one short Steam message with its link, sent after Rokkan's review where there is one. The link no longer shows a large map preview.
- **Fixed:** An invite's notification clears once the invite is accepted, declined, revoked or expires, wherever you answer it.
- **Fixed:** Staff bells update live when a staff notification arrives or is cleared, and they no longer show other organizers' personal copies. Clearing them is also much faster.
- **Fixed:** The app badge counts a team's tournament registration invite for its roster Admins, matching the bell.
- **Fixed:** Steam messages that Steam rate-limits are retried instead of lost, and are never sent twice. Rokkan's notices name maps the same way the site does.

### Moderation
- **Improved:** Your profile updates as soon as your gag or mute ends.

### Game servers
- **Fixed:** Disabled nodes that are online now receive node files, k3s updates and node changes. Their status dot shows a dimmed amber when something is waiting.
- **Fixed:** Dedicated servers keep loading a plugin after their node updates it.
- **Fixed:** Server owners can add themselves to a restricted server's player list.

### Self-hosting
- **New:** Panels installed with the 5Stack service can choose when to update: manually, on a schedule or when idle. Updates show a preflight check and live progress, and they pause new matches until live ones finish.
- **New:** Panels installed with the 5Stack service can add game server nodes with a code and approve them. They also get nightly backups with a recovery key, a Back Up Now button, and a diagnostics page.
- **Improved:** The "Node changes are waiting" and "Kubernetes update available" alerts clear themselves once a maintenance run or Kubernetes update finishes. Alerts that already exist need to be dismissed once.
- **Fixed:** System Logs now includes Rokkan's logs and shows their warnings and errors correctly.

### General
- **New:** A Support 5Stack card in the bell asks you to join the 5stack.gg Steam group and wear its clan tag in CS2, and a step-by-step guide is in the FAQ. Once an imported match shows you wearing the tag, the card thanks you.
- **Improved:** Pages many people watch at once now share one live feed between viewers and stay fast under load. This covers the utility map, the teams page, event pages, the welcome page's live matches, tournament bracket previews and league seasons.
- **Improved:** Match pages, match clips, the friends list, team reputation, your profile and match stats after each round also update with less work.
- **Improved:** Other players' names, avatars, ranks and bans update right away in your lobby, active matches, invites and drafts.
- **Fixed:** When your role changes, the site, including the notification bell, uses the new role right away without a reload.

## Friday, October 30, 2026

Today brings Rokkan, the AI coach, plus player and chat reports, team roster history, VAC Off matches and more control over what each game server node hosts.

### Matches
- **New:** Organizers can turn VAC off for a match from a new Server Launch card in Match Options. When the running server doesn't match the setting, the match page asks for a server reboot, and the VAC Off badge shows what the server is actually running.
- **Fixed:** A map being played no longer drops back to warmup when an older status arrives late. A map's result is no longer lost when the end of the map arrives out of order.
- **Fixed:** A live match's header no longer says "Auto Canceling" while a map is being played. During warmup and between maps it shows a deadline instead.
- **Fixed:** Matches on a dedicated server hosted on a 5Stack node no longer offer Reboot Server, and they show Offline rather than Booting when the server drops. The server picker now shows the server instead of a region.

### Utility
- **Improved:** The practice server radar places markers with Valve's own map calibration. On Nuke, Train and Vertigo it switches to the lower-floor image while you stand on that floor.

### Coach
- **New:** Rokkan, 5Stack's AI coach, reviews your finished matches and scouts your next scrim or tournament opponent. A new Coach page lists your reviews, scouting and tendencies, each review moment opens the 2D replay at that round, and scheduled matches show a Rokkan briefing in their header.
- **New:** Rokkan also reviews imported matches, and one verified player in a match unlocks reviews for every signed-in player in it. Reviews and scouting briefings also arrive as Steam messages for players who added a 5Stack bot as a friend.
- **New:** Administrators can ask Rokkan to review any finished match from the match's actions menu.
- **Fixed:** When you link your match history, the newest match reliably gets its review, and older matches from the backlog are no longer reviewed.

### Demos & Replays
- **Improved:** Demo parsing records callouts for positions, kills and grenades. Round loadouts now show what players held when buy time ended, so late buyers no longer appear empty-handed, and a second flashbang is counted.
- **Improved:** Radars are recalibrated for every map, and bomb-site markings follow each site's actual bounds.

### Streams & Highlights
- **Fixed:** Live streams of a series with workshop maps no longer stall on CS2's download prompt when the match moves to map 2 or 3.
- **Fixed:** Rendered highlight clips get their thumbnail again.

### Stats & Leaderboards
- **Improved:** Leaderboards filtered by source or role load much faster, and the player panel shows K/D and HS% ranks again.

### Players & Teams
- **New:** Player profiles have a Teams tab showing the teams a player joined and left over time. Team pages show a roster history, and join and leave rows now appear in the team's activity feed.

### Moderation
- **New:** Players can report someone they played with in the last 30 days from their profile or the scoreboard. Moderators handle each reported player as one case in a new Player Reports tab, and the reporter hears the outcome in the notification bell.
- **New:** Players can report chat messages, and moderators handle them from a new moderation queue. Admins can set blocked words, which are masked in chat, and can turn on Rokkan chat moderation, which shows removed lines as "Message removed by Rokkan".

### Game servers
- **New:** Each game server node can choose which match types it hosts and whether it takes practice servers, including nodes that host practice servers only. Highlight clips get their own GPU switch, separate from lineup renders.
- **New:** Administrators can mark dedicated servers VAC Off. VAC-off matches only use on-demand servers or VAC-off dedicated servers, and other matches are never placed on VAC-off servers.
- **New:** Nodes warn when they need a reboot to finish installing updates, including an NVIDIA driver that no longer matches the one loaded. Ubuntu nodes also warn when automatic security updates are off and show the command to turn them on.
- **Improved:** Region pickers in match options, tournament stages, quick queue and practice only offer regions that can host that match type. A LAN match can't be saved when no LAN region hosts its type.
- **Fixed:** The node connector keeps running when a game server drops its connection, a demo can't be read or a network interface disappears.
- **Fixed:** Node warnings that aren't about the CPU are no longer labelled as CPU problems.

### Self-hosting
- **New:** The System Logs page shows how many times each service and pod has restarted. One click opens the run that crashed, with its exit reason, and you can download that run.
- **New:** The header's update menu opens with a Needs attention list of node warnings, worst first. A node's inspector shows the fix for each warning, with a copy button for commands.
- **New:** Self-hosted panels can opt in to deploying Rokkan, the AI service.
- **Improved:** Pressing Update Now closes the update menu and starts the spinner straight away. A page refresh still shows the update running, so it isn't started twice.
- **Fixed:** Update checks now include the AI service on installs that have it set up, so it stays up to date.
- **Fixed:** System Logs downloads of a pod with several containers, or of several pods, work again. A download whose log drops partway now fails instead of hanging.

### General
- **New:** A changelog page at /changelog lists these daily summaries, with search and filters by kind and area across the whole history. It's linked from the user menu and the command menu.
- **New:** The welcome page shows Scrim Finder, community servers, leagues and events as preview cards under Play and Compete. A new Run your own page shows what running your own 5Stack looks like.
- **Improved:** Signed-in pages put much less load on the site. All your open tabs share one live connection, and the parts of every page that follow you, such as invites, lobby, teams, notifications and your matches, are fetched again only when they change.
- **Improved:** The web app, API, demo parser, node connector, game streamer and browser extension move to the run-only 5Stack License. 5Stack stays free to self-host, and earlier versions keep their previous licenses.
- **Fixed:** The site stays up when an unexpected error happens, including when someone closes a log view or leaves partway through downloading an avatar, clip or image.
- **Fixed:** Chat rooms now share only the name, avatar and status that chat shows for each member.
- **Fixed:** The match page preview on the welcome page no longer captures the mouse wheel.

## Thursday, October 29, 2026

Today brings AMD GPU support and Traefik routing for self-hosted panels, season ELO that includes tournament matches, demo uploads for every signed-in player, and speed-ups across the site.

### Matches
- **New:** The match scoreboard lists players by ADR in every view, rows glide to their new places when the order changes, and stat numbers roll like an odometer.

### Leagues & Events
- **New:** The event leaderboard has an ELO Gained tab that ranks players by how much the event's matches raised or lowered their rating. Voided matches don't count, and the tab follows the game mode the board is filtered to.

### Demos & Replays
- **New:** Who can upload demos is now a setting in demo settings, next to who can watch them. By default every signed-in player can upload a .dem file from their own profile.
- **Improved:** Demo uploads are limited per player, and an upload you start can always be cancelled. Uploads from players who aren't administrators change only the uploader's own Premier rating and are processed after other imports.
- **Fixed:** If the demo upload setting holds an invalid value, uploads stay available to administrators, and their profile shows the upload option instead of hiding it from everyone.

### Streams & Highlights
- **Fixed:** The stream HUD shows each team's name on the side that team actually plays. The map-end banner and series score now go to the right team.
- **Fixed:** Live streams, demo playback and highlight clips on workshop maps no longer get stuck on CS2's workshop download prompt. The map now downloads before the game starts, and the startup steps show that download in the right order.

### Stats & Leaderboards
- **Improved:** Tournament matches now count toward the season they're played in, so a player's season ELO includes their events. Exclude Tournaments on the season leaderboard leaves out tournament results, and affected seasons are re-rated automatically a few minutes after updating.
- **Fixed:** Rebuilding ratings no longer drops tied matches.

### Game servers
- **Fixed:** On Ubuntu 26.04 game nodes, ending a match or a dedicated server stops its CS2 server again.

### Self-hosting
- **New:** The panel now routes traffic through Traefik, replacing the previous ingress controller, which is no longer maintained. Updating hands the web ports over automatically, installs behind a reverse proxy keep answering on 443 as before, and the ports guide has moved under the install guides.
- **New:** AMD GPU nodes are supported for live streams, demo playback, highlights and utility lineups. Support is full on Strix Halo and experimental on other Radeon GPUs, with one GPU vendor per cluster. The setup script labels AMD nodes and asks whether to include integrated GPUs, and the GPU guides walk through it.
- **New:** Plugins can ship Traefik routes alongside their existing install. On Traefik panels these routes are used, and a plugin's old routes are removed only once the new ones are working.
- **Improved:** A running Kubernetes update shows a progress bar, the version it is updating to and how many nodes are done. It can no longer be stopped part way, which would leave nodes on different versions.
- **Improved:** Pressing Update Now in the header's update popover shows Updating and closes the popover, and the header icon spins until the services finish.
- **Improved:** Adding a game server node now explains why it failed when the node's network setup is refused, and says when the cause is your network plan or billing.
- **Improved:** The requirements guide now says the smallest recommended panel size of 4 cores and 8 GB handles up to 1,000 people online.
- **Fixed:** Panels on Ubuntu 26.04 start correctly again, including the database and core services.
- **Fixed:** The Kubernetes update no longer counts offline nodes it will skip, and doesn't offer an update when only offline nodes are behind.
- **Fixed:** A GPU node's failed shader preparation stays marked as failed instead of disappearing a few seconds later.
- **Fixed:** The GPU node state shows the boot step's progress with a space before it, as in "Processing Vulkan shaders (1%)".
- **Fixed:** The guide for moving off the lowlatency kernel now removes the other lowlatency kernels first, so the node reboots into the generic kernel. It also warns about GPU nodes whose NVIDIA driver would be affected.

### General
- **Improved:** The notification bell, friends list, "my matches" banner, live match lists, tournaments and the rest of what every signed-in page shows now appear right away instead of after about a second.
- **Improved:** Many parts of the site are faster, especially on busy panels: the notification bell, the friends list, the "my matches" banner, the nav's live match count, profile and team highlights, the matches list, the Play page's server list, practice sessions and tournament rosters.
- **Fixed:** The notification bell, highlights and the "my matches" banner no longer keep showing outdated information when something changes while they are loading.

Older days are in [entries](entries).
