# 5Stack changelog

What changed in 5Stack each day: new features, improvements and fixes across the web app, game servers and self-hosted panels, grouped by the section of 5Stack they touch. Each entry is written automatically from that day's merged changes (UTC).

## Monday, November 2, 2026

Today brings community leaderboards with far more stats, profile backgrounds in the Locker, a reworked Utility tab and many fixes across practice, tournaments and notifications.

### Matchmaking
- **Improved:** The Play page's waiting count and queue updates stay quick as queues fill, and reconnecting no longer reloads every queued lobby.
- **Fixed:** When a matchmaking queue is turned off, lobbies can no longer end up back in it waiting for a match that never comes. Affected players get a message saying why.

### Matches
- **Improved:** The 2K to 5K tiles in the lineup overview's multi-kills popover are underlined when they open a round breakdown.
- **Fixed:** Add New Map shows its Name field again, Workshop maps save without pressing Refresh, an existing map is not added twice, and a failed Steam lookup shows an error.
- **Fixed:** Stats from the round in progress when a restore starts no longer count twice. That round's late score also no longer removes rounds a restore can still return to.
- **Fixed:** Deleted maps no longer appear in the practice and utility map pickers, and matches played on them still show the map.
- **Fixed:** Setting a match winner, taking back veto picks, changing a match's maps and deleting a match now always go through the panel's own checks.

### Tournaments
- **Fixed:** Tournament cards, Quick Look and the next-up strip no longer offer Register on invite-only tournaments or to people already in, and show a joined chip instead.
- **Fixed:** Free-agent-only tournaments offer "Join as a free agent" instead of "Register a team" on their cards.
- **Fixed:** Revoke no longer shows on calculated tournament awards, and season grants keep it.
- **Fixed:** Removing a category from a tournament works again.

### Utility
- **New:** A match's Utility tab draws every throw on a radar against the meta lineups that three or more players throw. Throws on the spot are solid, and missed throws are dashed with a ring at the meta spot. Each player shows their meta throws on the spot, and Watch opens the 2D replay at the throw.
- **Fixed:** On a map split across two demos, Save and Watch on the Utility tab use the demo the throw came from.
- **Fixed:** A practice save thrown on a different map from the session's is refused instead of being filed under the wrong map. Practice servers on the wrong map are moved to the booked map.
- **Fixed:** A practice save or result that is sent again no longer creates a duplicate lineup or counts twice towards streaks and mastery. A save or score sent at a busy moment is retried instead of lost.
- **Fixed:** The practice HUD comes back after a player reconnects.

### Coach
- **New:** Rokkan knows when each team could hear an enemy running or shooting, so reviews stop treating every enemy position as something players knew.
- **New:** Rokkan's reviews compare utility against meta lineups and count the same throws the Utility tab shows. A utility moment is marked "Round N · utility", and the replay rings where the meta throw lands.
- **Fixed:** Player paths no longer show someone moving between callouts while they stood near a callout boundary. An admin's review of an older match re-reads its demo to pick this up.

### Streams & Highlights
- **New:** Clip actions are the same icons everywhere, with Share opening Copy link and Download. A clip's owner and staff get Public and Delete buttons, and a deleted clip leaves every list and playlist without a reload.

### Stats & Leaderboards
- **New:** The Public Servers page shows one leaderboard across every public server you can open. Game mode chips narrow the weekly board.
- **New:** Community leaderboards rank by many more stats, including K/D, HS %, assists, MVPs, points, accuracy, best streak, trades, utility, kill types and objectives. They also add weapon boards and community seasons. Click a column header to rank by it, and values below a column's minimum are dimmed.
- **New:** A profile's Community tab gets a game mode filter, K/D, HS %, assists and MVP tiles, and Modes and Maps tables. Servers running the updated plugin also show points, accuracy, best streak, utility, hitgroups, kill types, objectives and a per weapon table.
- **Improved:** Community stats remember which map and game mode each session was played on, and keep a daily history after older sessions are cleared.
- **Improved:** Leaderboards show fades and buttons on edges with more columns to scroll to.

### Career
- **New:** Profile backgrounds: 100 scenes to wear behind your whole profile, with cards turning to frosted glass. The Locker has a Backgrounds tab, and Grant Reward can give them.
- **New:** The Locker shows the background you are trying or wearing across the whole Career page, and each worn item can be taken off for free.
- **Improved:** Hovering a Career tile or background no longer changes your card or the page; a click previews it.
- **Improved:** Moving backgrounds stay smooth on profiles and in the Locker, and the heaviest animated scenes draw much faster.
- **Improved:** The one-time "Career levels are here" banner is gone.
- **Fixed:** Apply Look really buys, charges for and equips your changes, and the profile shows the picked colorway and roll.
- **Fixed:** The Match Rewards panel appears on finished matches again.
- **Fixed:** Cosmetics show to everyone, including signed-out visitors, while the Career setting still controls Stacks and the Career page.
- **Fixed:** Founder, Legend and other items no longer show twice, and the Grant Reward picker only lists available items.
- **Fixed:** Admins can give themselves rewards with Grant Reward.
- **Fixed:** Match rows and Locker panels sit on frosted glass over a background, long names fit the profile card, and a nameplate lines up with the rank under it.

### Notifications
- **New:** Read notifications stay in place and dim instead of moving, and the bulk actions become one button in the panel heading: Dismiss All, then Delete Dismissed.
- **New:** One click on an unread notification's dot marks it read, and one click on a read notification's dot deletes it, with an animated dot.
- **New:** Supporters get a thank-you notification the first time a demo shows them wearing the 5stack.gg tag, and the Support 5Stack card steps aside once the tag is seen.
- **Fixed:** A stack marked read keeps its green check for a moment after it moves, so the next click no longer deletes it by accident.

### Game servers
- **New:** The node inspector fixes the CPU governor and legacy lowlatency kernel warnings in one click and can turn low latency on or off. It asks before any change that needs a reboot, and never reboots the node itself.
- **New:** A game node that cannot reach its panel shows why in the update center and the node inspector. Removing a node tells you when its Tailscale device was left behind.
- **Improved:** On community servers, the CS2 server plugin reports assists, headshots, damage, rounds, MVPs, detailed counters and per weapon totals, plus each map's final counts. Nothing played in warmup counts.

### Self-hosting
- **New:** With the update policy on Manual, the 5Stack service no longer updates itself. The update center shows it as ready, and it installs only when an admin presses Update Now.
- **New:** The update center points out a graphics card on a game node that is not being used and links to the GPU node guide.
- **Improved:** Approving a node join checks the fingerprint the node printed on its screen.
- **Fixed:** The update center shows settings changes and script runs as what they are, and a setup run from the terminal never shows as a failed panel update.
- **Fixed:** An invalid AMD GPU memory setting for streams now stops the panel at startup and shows the rejected values, instead of failing when a stream or render starts.

### General
- **Improved:** The welcome page's "Watch live" button now reads "Open app".
- **Fixed:** Pages in Safari load again on refresh.
- **Fixed:** Match logs, system logs and RCON command suggestions show player names and plugin text as plain text.

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
