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

Today adds career levels with the Locker, node uninstall from the panel and a Panel updates settings page, and fixes how kills and assists are counted.

### Coach
- **Improved:** Reviews, scouting reports and habits now have their own page addresses, and older links still open them. The list's tab, map and player filters are kept when you reload.
- **Fixed:** Browser Back and Forward now step between the coach list and the review, scouting report or habits you opened.

### Stats & Leaderboards
- **Fixed:** Kills, deaths and assists now count the same way everywhere. Team kills and suicides no longer count as kills, and assists on a teammate's death no longer count as assists. Stored career and season totals have been corrected, ELO uses the new rule from the next rated match, and tournament stats tabs now match the tournament leaderboard.

### Players & Teams
- **Improved:** Player search now lists "Played with recently" above Friends. You can fold that section, and it stays folded in your browser.

### Career
- **New:** Players now earn career levels and Stacks, and can spend Stacks in the Locker on frames, banners, nameplates and level badges. Their look shows on player rows, profile cards and the new Career page, and admins can grant looks.

### Notifications
- **Improved:** Pending team, tournament and draft invites in the bell now appear as cards with Deny and Accept buttons, and team invites name who invited you.
- **Fixed:** Wrapped text in slim notification rows now lines up with the row's edge, and paused match rows are the same height as other rows. The award notification's badge no longer covers its title, and the card now leads with the award's name.

### Game servers
- **New:** Removing a node can now also uninstall 5Stack from its server, and the dialog follows the uninstall until it finishes. If the uninstall fails, the dialog shows the error and offers Remove Anyway.
- **Improved:** Adding a node looks up the join code as soon as you enter the sixth digit.
- **Improved:** The slow CPU governor warning now links its guide and gives the command to run with a copy button. Nodes whose governor can't be read no longer show the warning.
- **Fixed:** A node removed from its own server's command line now also disappears from the panel.
- **Fixed:** Nodes added with a join code now come online enabled instead of waiting for an admin to turn them on.
- **Fixed:** Panels installed by the 5Stack service no longer show game server nodes as unsupported when node networking is set up.

### Self-hosting
- **New:** A new Panel updates settings page lets you choose when the 5Stack service installs updates, and it shows your current release and channel. On managed panels the header button now appears only when an update needs your attention.
- **New:** Panels that keep their secrets in an external store now show in the header when those secrets can't sync, with the reason, how long the problem has lasted and a Check Now button. A new settings page shows which step is failing and how to fix it, and an update that is missing secrets lists them before it starts.
- **New:** Panels installed from a git checkout can move onto the 5Stack service with one command, keeping their configuration and secrets.
- **Improved:** During a panel update, new matches are held only when the update needs it, and your own node on/off settings are left alone. Waiting matches start when the update finishes, and an update stuck for an hour releases the hold.
- **Improved:** An update that rolls back now sends its own notification with the reason and shows in amber in the header. Automatic and scheduled updates skip a release that failed on your panel, though you can still install it with Update Now.
- **Improved:** The nightly database backup now checks that the storage bucket belongs to your storage account before uploading. If it doesn't, the backup stops and explains how to fix it.
- **Fixed:** Panels with played matches can update again, and the leaderboard no longer errors after an update.
- **Fixed:** The node picker in the setup scripts now accepts only a number from its list and asks again otherwise.

### General
- **Improved:** Match pages, player profiles, the play and public server lists, and the scrim board load faster and put less strain on the panel. A change someone else makes to a profile while you are viewing it, or a clip's view count or title edit, now shows on your next visit.

## Saturday, October 31, 2026

Today brings a redesigned Rokkan coach with team reviews, a reorganized notification bell, Career levels with cosmetics, new self-hosting controls, and broad speed-ups.

### Matchmaking
- **New:** Turning matchmaking or a mode off now takes every lobby queued for it out of the queue. Ready checks already under way are left alone.

### Matches
- **Improved:** The Connect button on the Play schedule updates when a region switches to or from LAN.

### Coach
- **New:** Rokkan reviews open in a full-width replay that starts paused on your first fix, with a menu to view the review as yourself, your team or a teammate. On wide screens the whole review fits one screen, with a list of every moment to jump between, and Space or K plays and pauses from anywhere on the page.
- **New:** The match page shows a Rokkan Review band that moves through Queued, Reviewing and Ready, then previews the review's summary. The coach page lists each review as its match, marks unopened reviews as New with a filter for them, and the side menu counts your unopened reviews.
- **New:** Teammates can see each other's Rokkan reviews from team matches on the team page's Coach tab and in a team view on the coach page. This view includes roster cards and team habits, with See All for the full list.
- **New:** Administrators can open any team's or match's reviews in full. A team they opened but aren't on is marked with an Admin tag.
- **Fixed:** An administrator's coach inbox lists only their own reviews. The inbox no longer counts teammates' findings as yours.
- **Fixed:** Rokkan notices name maps the same way the site does.

### Players & Teams
- **Fixed:** Team cards show a space before "vs" in the Next and Last rows.

### Career
- **New:** Every rated match now earns Career XP, and each level pays Stacks. Players unlock, buy or are granted cosmetics for their player card: banners, frames, nameplates and titles.
- **New:** The cosmetics catalog has over 450 items, including an animated tier, and the Career Track now has rewards up to Level 1000. Administrators can grant items and Stacks to players, a team or a tournament's roster.

### Notifications
- **New:** The bell is sorted into Needs you, Live now, New for you and Earlier. Alerts that resolve, such as a resumed map or a node back online, show their end state and move to Earlier.
- **New:** A new "Clips of you" reel in the bell marks clips you haven't watched. Review notifications stack together, and content notices show a cover image.
- **New:** On slim notification rows, clicking the dot marks the row read and double-clicking deletes it. The time turns into a menu that holds Delete. Administrators also get a gallery page with a sample of every notification type.
- **Improved:** An imported match's Steam message waits for its Rokkan review and is a single short line with the match link, without a large map preview. Rokkan review messages over Steam now go only to matches played outside 5Stack, and the duplicate in-app "Match Imported" notice is gone.
- **Fixed:** Invite notifications clear from the bell once the invite is accepted, declined or withdrawn.
- **Fixed:** Staff bells update live as role-wide alerts arrive, are dismissed or are deleted, and show only the alerts meant for them. Tournament registration invites now count toward the badge for a team's roster admins.
- **Fixed:** Steam messages that Steam delays or rate-limits are retried instead of lost, and are never sent twice.

### Game servers
- **Fixed:** Server owners can add themselves to a restricted server's player list.
- **Fixed:** A dedicated server keeps loading a plugin after its node auto-updates it.

### Self-hosting
- **New:** Panels installed with the 5Stack service get an update center where you choose Manual, Scheduled or When idle updates. Update Now runs a preflight check, shows live progress and pauses new matches until live ones finish.
- **New:** Panels installed with the 5Stack service can also add game server nodes by code with an approval step. Settings gains Backup & Recovery, with nightly backups and Back Up Now, and a Diagnostics page.
- **New:** Busy panels can run more than one replica of the API engine, placed on separate nodes where possible.
- **Improved:** Disabled nodes that are online now get node file updates and Kubernetes maintenance changes, and show a dimmed amber dot while one is waiting. The "Node changes waiting" and "Kubernetes update available" alerts clear themselves once the work is done.
- **Improved:** System Logs now includes the AI service that runs Rokkan, with its warnings and errors shown correctly.
- **Fixed:** Panels updated to the latest version finish starting up again.

### General
- **New:** A checklist in the bell asks players to join the 5stack.gg Steam group and wear its clan tag in CS2, with a step-by-step guide in the FAQ. Once an imported match shows you wearing the tag, the card turns into a thank-you and stays that way.
- **Improved:** Several pages are faster and lighter when many people view them at once.
- **Improved:** Changes to other players' names, avatars and ranks now show up right away in lobbies, matches, invites and drafts. Your profile updates as soon as a gag or mute ends.
- **Fixed:** After your role changes, the site picks up your new permissions right away without a reload.

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
