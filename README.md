# 5Stack changelog

What changed in 5Stack each day: new features, improvements and fixes across the web app, game servers and self-hosted panels, grouped by the section of 5Stack they touch. Each entry is written automatically from that day's merged changes (UTC).

## Saturday, November 7, 2026

Today brings a tidier site menu, a tournament organizer fix and more reliable self-hosted panels.

### Tournaments
- **Fixed:** Linking a team as a tournament organizer no longer lists the tournament's admin twice in the organizer row, and existing duplicates are removed.

### Self-hosting
- **Improved:** You can now set extra allowed sign-in origins, such as a dev tunnel or a sibling domain, through the panel's config command without forcing it. The value also stays in place after updates.
- **Fixed:** The demo parser and nightly backups now always run on the panel node and never on game nodes, so a broken game node can no longer stall demo reparsing or backups. Updating an existing install sets this up automatically.

### General
- **Improved:** Signed-in players now find Help & FAQ, the stats guide, the changelog, Terms, Privacy and Licenses in the corner menu under My Settings. Teams moves into Compete, Highlights leaves the left menu since Watch already leads there, and staff get a folding Admin › Moderation section.

## Friday, November 6, 2026

Today brings panel update and Cloudflare worker improvements for self-hosters, a gentler match-found alert, and keep-your-files node removal.

### Matchmaking
- **Fixed:** The match-found sound for a ready check, check-in or veto turn now plays once across all your open tabs, instead of again in each new tab.

### Tournaments
- **Fixed:** The tournament page no longer jitters while loading. The header doesn't slide in twice, and the check-in panel no longer pushes the content down.

### Demos & Replays
- **New:** Demo upload alerts appear as "Demo uploads" under Operator alerts in Settings › Notifications, with a sample in the alert gallery. Failing uploads show in red under Live now.
- **Improved:** While demo uploads are failing, they are checked again every hour until they work. The alert then resolves on its own.

### Game servers
- **New:** Removing a game node lists the 5Stack folders it holds on the server, with their sizes. All are kept unless you untick them, so a reinstall keeps the CS2 install, and the node uninstall guide describes the choice. Nodes running an older version show no list and have all their 5Stack files deleted as before.

### Self-hosting
- **New:** Settings › System › Panel updates has a Check Now button and shows when the 5Stack service last checked for updates. A waiting release shows with its Update Now.
- **New:** The header's Updates list shows an out-of-date Cloudflare worker until it is redeployed. Panels run by the 5Stack service get an Open Console button that opens the console on Integrations, and other panels are told what to run.
- **Improved:** Panels run by the 5Stack service restart the site, the API, the demo parser, the AI coach and the game node connectors automatically after a release installs. New releases show in the header within seconds.
- **Improved:** The Cloudflare worker's version is checked right after each Re-deploy and after the panel restarts. Its row in the header shows "Re-deployed. Checking the worker…" in the meantime.
- **Improved:** On panels run by the 5Stack service, the Cloudflare worker warning on the Demos settings page and the "Cloudflare Worker Needs Update" alert now point to Re-deploy in the 5Stack Console.
- **Improved:** When a panel script, settings change, database restore or panel move fails, the header's Updates list says why and offers Show Details for the log.
- **Fixed:** Re-deploying the Cloudflare worker no longer stops on a panel server without Node. The worker scripts download a verified copy of Node 22 when needed.

### General
- **Improved:** The site and the panel's API send stronger browser security headers. Brackets can still be embedded in OBS and on other sites.
- **Improved:** The welcome and run-your-own pages read more plainly.

## Thursday, November 5, 2026

Today brings a reorganized left navigation, unrated tournaments, a redesigned offline match tool, opening a panel's console from 5stack.gg, and many fixes.

### Matches
- **New:** The FAQ's Playing Here section lists every in-game chat command players can use, from ready and pause to surrender and votes, with who can use each one. Searches like "unpause" or "ready up" find it.

### Tournaments
- **New:** Organizers can make a tournament unrated with an Enable ELO switch on Create and in Manage › Match Settings, until its first match starts. Unrated tournaments show an Unrated chip in the header, and their matches still count for brackets, Career XP, leaderboards, season stats and the tournament MVP.
- **Improved:** The tournament header has an "Organized by" line, with linked organizer teams first, then the organizers.
- **Fixed:** A Rush tournament's brackets, stage tabs and stage settings show Bo1 even when a stage was set up as Bo3 before the switch to Rush.

### Streams & Highlights
- **Fixed:** The render queue shows when a highlight finished and how long the rendered clip is.
- **Fixed:** Only a clip's owner can change its title.

### Players & Teams
- **New:** The player page's tab row ends in a one-click 5Stack/External toggle and a Filters menu with the other match filters on every tab. A smaller version sits beside the Matches list.
- **Improved:** The player page's Community tab opens on one summary card with points and server ranks, time played and last seen. Stats a server hasn't reported are no longer shown as zero.
- **Fixed:** The player header no longer leaves a gap above Career after the ELO chart grows.

### Career
- **New:** Players and admins can see a player's Stacks balance and history in a side panel, and admins can give or take Stacks. Career settings now chart XP and Stacks over time, and the 5stack.gg tag payout can be configured.
- **Improved:** Career XP is now the same for everyone in a match: 160 XP per match plus 80 for a win, with 1,000 XP and 2,500 Stacks per level. XP by rating is gone, and existing progress is recounted.
- **Fixed:** Draft lobbies, lineups, party seats and the friends list show the colorway a player picked for their frame and nameplate.

### Notifications
- **Improved:** Operator alerts now push to administrators by default, while job results stay off unless turned on. Administrators who had turned infrastructure pushes off keep them off.
- **Fixed:** Changing an award's rewards no longer tells players who received the award right afterward that it now unlocks rewards they already have.

### Moderation
- **New:** Report Player asks which map a report is about when more than one map was played, and only offers rounds that were played on that map. Moderators see the map and round on the case.

### Game servers
- **New:** The offline match tool is redesigned to match 5stack.gg. Matches sit in a sidebar with a docked RCON console, and the create form is laid out like the Create Match page, with map tiles and a starting side per map. Options are readable, the tool uses its own confirm dialogs, and it no longer loads anything from the internet.
- **New:** Offline match pages have a status bar with Force Ready, Skip Knife, Pause or Resume. A Fix a Problem menu can rewind a round, restart the map, kick a player or restart an unresponsive game server.
- **New:** Offline matches keep their progress through a game server restart, restore rounds locally, and end the map and series on a surrender. Editing a match keeps the series unless its maps or teams change.
- **New:** The offline match tool has its own sign-in page with a random password per node. Admins copy it from the node inspector's Offline section or read it on the node, and the guides explain both.
- **New:** The node inspector shows whether a node is ready for offline matches. Nodes keep the panel's game server image downloaded and refresh it hourly while online, and the offline tool can pull an image when one is missing.
- **New:** Administrators can set a logo for a public server, shown beside its name on the Public Servers cards.
- **New:** A node with a graphics card 5Stack isn't using shows an "Unused graphics card" hardware warning that admins can acknowledge for everyone. The node warnings guide lists it.
- **Improved:** Adding a game server node asks for the whole code the node prints, one box per character, and a paste fills them all. The approve step can also set the CPU governor to performance and turn on full kernel preemption before the node joins, using switch rows like the settings page.
- **Improved:** An offline match's server password is now called the Admin password, since only admins and casters need it to join as spectators. It is random for each new match and shown on the match page with a Copy button, and editing a match no longer changes it.
- **Improved:** The offline match tool, its RCON console and each node's file and plugin access are better protected, and each offline match has its own RCON password.
- **Fixed:** A player who isn't allowed on a server is turned away once instead of retrying forever and taking up a slot.
- **Fixed:** An offline public server no longer makes a region with healthy nodes show as Partial.
- **Fixed:** Nodes pinned to a game server image from a registry with a port pull the right image again.
- **Fixed:** Offline matches are more reliable:
- **Fixed:** In the node inspector, the LAN IP link opens the offline match tool, and an acknowledged warning shows who acknowledged it on one line. A node's clock going backward no longer extends an offline tool sign-in lockout.

### Self-hosting
- **New:** Setup can manage your panel's Cloudflare zone with one scoped API token, setting up DNS records, the proxy and HTTPS for you. Records you made yourself are only replaced after you agree, and this works for new installs and existing panels.
- **New:** You can open your panel's console from My Settings → Panels on 5stack.gg, where pressing Open Console approves it and opens it in its own window. The Browser Console guide and a new Console People guide cover this, along with the Admin and Read only roles and downloading recovery backups.
- **New:** Administrators get a notification when their Cloudflare storage worker is out of date, and another once it's updated. It is checked shortly after the panel starts and every 15 minutes. The demo settings also flag an outdated worker and say to update the panel, then run the Cloudflare setup again.
- **New:** Shortly after the panel starts, it sends a small test demo through storage and notifies administrators if demo uploads are failing, and again once they work.
- **Improved:** The Cloudflare storage worker and media uploads are hardened, and unfinished uploads are cleared from storage after a day. To get the new worker, update the panel, then run the Cloudflare setup again.
- **Improved:** The System Update list names services in plain words, such as API, Web app, Demo parser, Rokkan and Game node connector.
- **Improved:** The install guides follow today's setup page, including managed Cloudflare and the reverse proxy step. They are shorter and focus on what to run, click and decide, and the architecture diagram has its own How It Fits Together page.
- **Improved:** The Run your own page plays the install video, with speed controls, theater mode and full screen, and the install guide uses the same player. A new diagram shows how game server nodes join.
- **Fixed:** Demo uploads work again on panels whose storage address points at their own built-in storage.
- **Fixed:** A demo, clip or video requested before its upload finished no longer stays missing in the browser for a month.
- **Fixed:** Open Console no longer asks players already signed in to 5stack.gg to sign in with Steam again.

### General
- **New:** The left navigation is reorganized:
- **New:** A Steam group button sits next to every Discord button and opens the FAQ's clan-tag guide.
- **Improved:** News, comments, moderation lists, awards, the cosmetic picker, the utility book and other lists load more as you scroll instead of needing a Show more button.
- **Improved:** On phones, menus open as bottom sheets, tabs lay out in even rows, the hub opens without a stutter, and tap targets are bigger. Highlights also show one clip per screen.
- **Improved:** Apps such as Inventory show their own page names in the breadcrumbs instead of their web address.
- **Improved:** Signing in with Steam is better protected, and a sign-in must be finished within five minutes.
- **Improved:** The FAQ and the browser tab title use the "Find your five" tagline.
- **Fixed:** An unpinned hub closes again once the pointer leaves it.
- **Fixed:** The 5Stack wordmark, the new tab icon and other recently added images load again for browsers that had kept a broken copy.

## Wednesday, November 4, 2026

5Stack gets a new look, seasons gain their own awards, tournaments can seed teams by ELO, and the Steam presence bot is easier to add and keep online.

### Matches
- **New:** Typing .stop in game starts a vote to replay the round being played, including the first round, with no round number needed.

### Tournaments
- **New:** Organizers choose By ELO or Random seeding, and By ELO is the default for new tournaments. Before registration closes, the Teams tab shows each team's seeding ELO, its projected seed and its round-one opponent.
- **New:** A team's seed stays visible for the whole tournament, in the bracket, the Swiss and round-robin standings, and on the match page. Hovering a seed in the bracket traces that team's route.
- **New:** Awards can give Locker items and Stacks. Organizers set these on the tournament Prize Board. Players see what they can win before play, on the finished podium, in the award popup, in a Locker Awards tab and in Stacks History.
- **New:** The Prize Board can pay Stacks and items to 1st through 3rd even with a tournament's awards turned off, and placing players get a notice when they win.

### Utility
- **Improved:** Lineups you save on your practice server land in a This Server group at the top of Mine, numbered on the map in the order you saved them. The Public tab shows only public lineups again.

### Coach
- **Fixed:** The Coach page no longer scrolls sideways on phones. Match rows there and on player pages show a shorter date.

### Demos & Replays
- **Improved:** The 3D replay keeps crates, cars and lamps that were missing and colours props as props. It also removes stray backdrop buildings and rooftop antennas and smooths the shadows under props.
- **Fixed:** A demo playback no longer stops when the viewer's connection drops or reconnects.
- **Fixed:** The reparse-all-demos warning now says demos are reparsed two at a time.

### Streams & Highlights
- **Improved:** The outro at the end of every highlight clip is rebuilt around the new 5Stack mark and ends on "Find your five".
- **Fixed:** Streams from AMD nodes no longer drop large keyframes, so they stop skipping frames.
- **Fixed:** 1440p streams are no longer cropped to part of the picture, and demo streams lag less. Demo streams now go out at 1440p when rendered at 1440p.

### Stats & Leaderboards
- **New:** Seasons have their own awards. Admins set awards and Stacks for 1st, 2nd, 3rd and MVP on a podium, add stat awards, and choose what carries over to the next season. The leaderboard shows the current leaders and prizes.
- **New:** Every panel gets nine built-in stat awards and default Stacks prizes for its first season, so seasons hand out awards without any setup.
- **Fixed:** A season whose end date simply passes now hands out its awards.
- **Fixed:** Admins can move a season's end date past the start of the next scheduled season, and that season now moves with it. Make ongoing, End now and editing the next scheduled season also work as expected.

### Players & Teams
- **New:** A Player Backgrounds switch in My Account hides the backgrounds other players wear on their profiles.
- **Improved:** My Account accepts an avatar URL again, next to the upload option.

### Career
- **New:** Players' looks appear on one shared player card on Play seats, the leaderboard top 3 and events. Frames and nameplates also show in the friends list, party seats, voice tiles and notifications.
- **Improved:** Career is on by default and open to every player, and admins can still turn it off or raise the minimum role. On panels that had it off, players receive everything they unlocked with their next match.

### Notifications
- **New:** Admins get a bell alert when the Steam presence bot goes offline or needs a Steam Guard code, and can enter the code right from the notification. Players see a notice on their card while the bot is offline.
- **Improved:** Adding the Steam presence bot now uses a one-use Steam invite link, so players become friends at once without friend-request errors or waiting.
- **Improved:** Reading and deleting notifications takes effect immediately, and deletes can be undone for 5 seconds. Tap targets are larger on touch devices.
- **Improved:** Notification cards open from anywhere you click, and new-article notifications show the cover beside the title.
- **Fixed:** The Steam presence bot recovers on its own from failed logins and accepts friend requests sent while it was offline. It also frees a player's connection when they unfriend it.

### Game servers
- **New:** Administrators can keep a dedicated Ranked server to ranked or tournament matches, so it loads the right plugins for them. The match server picker greys out servers kept to another kind of match.
- **Improved:** The CS2 build card shows Gamedata and Map assets as separate tiles, each opening its own panel, and fits better on phones.
- **Fixed:** Matches with a custom game mode now play only on on-demand servers, so the mode's plugins load. The server picker explains why dedicated servers are unavailable for these matches.

### Self-hosting
- **New:** Two new check scripts verify a GPU node or a Proxmox LXC container. They come with a guide for setting up a dedicated machine, a VM or a Proxmox LXC container for NVIDIA or AMD.
- **New:** The docs add a Managing Nodes guide and cover the admin settings for GPU workloads and video encoding.
- **Fixed:** Fresh installs on k3s 1.37 no longer fail while k3s is still setting up the Gateway API.
- **Fixed:** On panels not behind Cloudflare, rate limits count each visitor separately instead of sharing one limit across everyone.

### General
- **New:** 5Stack has a new look. The welcome page leads with "Find your five.", and the site, icons, in-game messages and Discord posts use the new mark and wordmark. Sites with a custom logo or name keep theirs.
- **New:** News articles post to their own Discord channel when first published. Admins set the webhook and optional role mentions in Settings → News.
- **New:** The docs add guides for Career and the Locker, Rokkan, Inventory and Sticker Crafts, Getting Around, and moderation.
- **Improved:** Past times an hour or more old show the exact time across the site, including notifications.
- **Improved:** The changelog's new-entries dot follows your account, so reading it on one device clears it everywhere.
- **Improved:** Signing in from the welcome page takes you to your player page.
- **Improved:** Webhook URLs, API keys and passwords in settings are hidden by default, with an eye button to reveal them.
- **Fixed:** The 5Stack logo no longer shows as a broken image for people who loaded the site during an update.
- **Fixed:** The welcome page no longer shows an error while scrolling.
- **Fixed:** The default language picker shows a space between the flag and the language name.

## Tuesday, November 3, 2026

A large day: community polls, a reworked coach review and Utility map, Stacks rewards for awards and the 5stack.gg tag, confirmations before tournament teardowns, and new health warnings for game server nodes.

### Matchmaking
- **New:** Each mode tile on the Play page has an info icon that shows the mode's current map pool when you hover or tap it, without selecting the mode. Premier and FACEIT show the Competitive pool.

### Matches
- **New:** Organizers and staff can reset a captains' draft back to its first pick from the draft room's admin dock, after a confirm. Captains and players are kept, and the pick clock restarts.
- **Improved:** Check-in now appears in the match header's VS box instead of a card on the Overview, with the same camera gate and red last ten seconds as the draft room. On phones, the teams stack beside it.
- **Improved:** Call for Support in the match menu now asks before paging the organizers.
- **Improved:** Deleting a map shows which pools it leaves. A matchmaking pool's last map can no longer be deleted or removed from the pool.
- **Improved:** Opening a finished match no longer rolls in every number at once. Stats show their value straight away and only animate when they change.
- **Fixed:** The scoreboard's HLTV column shows the rating again.
- **Fixed:** Lineup names stay on every player's in-game scoreboard for the whole match, not only the first seconds after going live.
- **Fixed:** Restoring a round no longer records false stats or loses a real round. A restarted server can no longer play over rounds that were already recorded.
- **Fixed:** A map's label is kept when maps are refreshed, and editing it updates the map in every mode.

### Tournaments
- **New:** Players placed into a tournament's medals or MVP get one notification when the tournament finishes.
- **Improved:** With several tournaments live, the Tournaments page gives each one an equal tab above the live feature.
- **Improved:** The Teams tab shows a card grid in seed order with Expand all and Collapse all, and your own team shows full width with its roster open. The check-in panel now shows how many teams have checked in instead of listing them all.
- **Improved:** Deleting, cancelling or resetting a tournament now asks first. If matches have been played, it lists the ones that would be deleted along with their demos and clips, and you must tick a box to confirm. Matches still in progress block it until they end.
- **Improved:** Leave pool on the Free Agents tab asks first and explains what leaving costs you.
- **Fixed:** Free agent sign-up times show the day once a sign-up is from an earlier day.
- **Fixed:** Rebuilding a cancelled tournament keeps leftover matches that still have demos or clips. Deleting a stage that has matches no longer fails.

### Leagues & Events
- **Improved:** The event overview shows every match in play or getting ready, plus a tab for each live tournament with its full bracket. The header's Watch live opens a match that is actually being played.
- **Improved:** Deleting a league season or resetting it to setup lists the played matches it would delete and needs them confirmed.

### Utility
- **New:** The Utility tab's throw map shows each side of the match on its own map, or one map with a CT / T toggle on narrow screens. It adds zoom, panning and a legend, and clicking a throw focuses on it with Watch and See the Meta Spot.
- **New:** Bots standing when you save a lineup are saved with it, and the drop key stands them back up. Dropping weapons is turned off on practice servers to make room for this.
- **New:** The utility map shows a lineup's bots with their own icon, and lineups with bots carry a badge.
- **New:** Players left idle on a practice server get two warnings and are then kicked. Admins set the time under Settings › Application › Utility; it is 15 minutes by default, and 0 turns it off.
- **Fixed:** The throw map's hints make sense on touch screens, and zooming while dragging no longer resets when you let go.
- **Fixed:** The flash card counts a player as blinded for 1s+ based on the seconds it shows, so a 3.0s flash no longer reads "0 of 1".
- **Fixed:** A lineup you save in a practice server now shows on the Public tab and the map while you are in that server.
- **Fixed:** Practice saves that couldn't reach 5Stack are retried automatically and are never saved twice. A refused save now tells you instead of blocking later saves.

### Coach
- **New:** The coach review shows the player's K/A/D, ADR, KAST, HLTV rating and lineup accuracy. It also has tabs for Overview, Worked, To fix and Utility, which together show everything Rokkan wrote.
- **Improved:** In theater mode, the review's side column grows wider when there's room, so tabs and utility rows no longer get cut off.
- **Improved:** The top bar shows the path to the open review, scouting report or habits page.
- **Improved:** Rokkan can now tell one lineup thrown twice apart from two different lineups.
- **Fixed:** Watch in the coach review no longer gets stuck after jumping past a throw. Phrases like "R8 bomb 0:31" now read as a round, not the Revolver.

### Demos & Replays
- **Improved:** A demo replay in a tab that stays hidden for 5 minutes stops and offers Watch again. A page opened in the background doesn't start a replay until you look at it.
- **Fixed:** Closing the demo viewer while a clip is rendering no longer stops you from making new clips.
- **Fixed:** The 2D and 3D replay buttons only appear once the map is confirmed to have a replay.

### Streams & Highlights
- **Improved:** The stream address now only serves playback and snapshots.
- **Fixed:** When a live stream switches matches, the HUD no longer shows the new match's teams over the old match's end screen.
- **Fixed:** Highlight renders take a free GPU in the order they were queued, and a freed GPU is picked up sooner.
- **Fixed:** On NVIDIA nodes, streams and highlights always render on the NVIDIA GPU instead of another device on the node.

### Stats & Leaderboards
- **New:** The Awards leaderboard has a Special column and a fourth podium dot, so players with only Special awards now appear on it.
- **Improved:** Stats table headers are quieter. Only the sorted column shows an arrow, and a Stats Guide button sits beside the controls.
- **Fixed:** Damage with the M4A1-S, USP-S, CZ75-Auto, R8 Revolver and MP5-SD is now recorded under the right gun. Older matches are corrected where possible, so Arsenal no longer shows 0 ADR for them.

### Players & Teams
- **New:** Teams can set a country in their settings, shown as a flag beside the team name on the team page, in the match header and in tournament team lists.
- **New:** A name change request asks the player why, and staff can reply with a comment the player receives. A player can only have one request open at a time.
- **Improved:** The top-bar profile menu opens on a mini version of your profile card. It shows your banner, frame, level, title, flag, ELO and pinned stat.
- **Fixed:** On profiles with a background, tabs, cards, tables and empty states sit on frosted glass, so the background no longer runs through the text.
- **Fixed:** The player page's All / 5Stack / External filter bar no longer wraps.

### Career
- **New:** Awards can give Locker items and Stacks to every holder. Tournament organizers can also set rewards per placement, and admins per season placement. Adding a reward pays existing holders and tells them.
- **New:** 40 looks for your profile stat print the number straight on your banner, and the stat now shows on your player page too. The Locker shows the 250 Stacks it costs to clear a pinned stat.
- **New:** Wearing the 5stack.gg clan tag in imported Steam or FACEIT matches pays 100 Stacks per match, plus a one-time 2,000 bonus. The Support card and FAQ explain it, and the thank-you notifications stack in the bell.
- **Fixed:** Avatar frames look the same on the profile card as on their Locker tile.
- **Fixed:** The Locker's tabs show as icons, with the selected tab named and hover names on the rest, so all seven fit on any screen.

### Notifications
- **Improved:** The new-tournament notification shows the tournament's banner, name and start time in your own time zone, and the push says when it starts.
- **Improved:** Looking at any 5Stack tab clears the flashing title and badge in all your other 5Stack tabs.
- **Fixed:** Award notifications open the award they are for.

### Moderation
- **Improved:** Staff can see removed sanctions and abandons, dimmed, with who removed them and when. Match organizers can see each abandon's ladder step and cooldown, and a removed abandon no longer counts against the player.
- **Improved:** A banned player's notice says how long the ban lasts, or that it is permanent.

### Game servers
- **New:** Nodes warn when CS2, the game streamer or k3s keep their files on a spinning hard drive.
- **New:** Nodes warn when their CPU is split across too many sockets, and advise setting the VM to one socket.
- **New:** GPU nodes warn when Secure Boot or something else keeps the NVIDIA driver from loading, or when kernel modesetting is off. A node whose NVIDIA driver didn't load still shows in the panel.
- **New:** Administrators can acknowledge a node warning so it stops being flagged. Acknowledged warnings stay listed under Hardware with Restore, and a changed warning is flagged again.
- **New:** The in-game scoreboard's Server Website button opens 5stack.gg on servers running the SwiftlyS2 version of the plugin.
- **Fixed:** File manager uploads of up to 100 MB now work on panels behind Cloudflare's proxy.
- **Fixed:** The dedicated servers list shows the plugin version for community servers.
- **Fixed:** Enabling, disabling or restarting a dedicated server in quick succession no longer leaves it in the wrong state.

### Self-hosting
- **New:** When both a 5Stack service update and a panel release are available, the update center offers a single Update that runs them in order. Opening the update center also checks for updates.
- **New:** A Storage guide explains which paths need an SSD or NVMe disk and how to move game files onto one.
- **Improved:** Traefik now binds the host's ports itself, so the panel sees players' real addresses when k3s runs on a VPN or private node address.
- **Improved:** The update popover shows an update starting as soon as you press Update. After a minute without progress, it says so and offers Try Again. Updates now finish as soon as the run ends, and new matches resume right away.
- **Improved:** A panel that uses external storage no longer runs the built-in storage service.
- **Improved:** The NVIDIA GPU guide adds a step to turn on kernel modesetting, which clip capture needs. The AMD guide covers a kernel option that stops the driver from loading, and notes that a bad memory setting now stops the panel at startup, with the log naming the problem.
- **Fixed:** Fresh installs on k3s 1.37 or later no longer fail, because the Gateway API resources are left to k3s.
- **Fixed:** Long steps in the header update popover wrap instead of being cut off.
- **Fixed:** Deleting demos and clips now removes their files from versioned storage buckets. If a file can't be removed, its demo or clip is kept so the delete can be retried.
- **Fixed:** When Detect can't reach a plugin, the settings page says why instead of "Failed to fetch".

### General
- **New:** The changelog groups each day by section of 5Stack and tags each change New, Improved or Fixed. Wide screens also get a Sections list for showing just one section.
- **New:** Match organizers and above see a dot on the profile menu when the changelog has new days.
- **New:** Community polls appear at the top of News, and the bell tells you when one opens. Any signed-in player can vote once and sees results as the poll allows, and anyone who can post news can run polls.
- **New:** Upload, crop, replace or remove your avatar under Settings → My Account. Removing it goes back to your Steam avatar.
- **New:** Click a GIF in chat to see it larger.
- **Improved:** Past times an hour or more old show the exact time instead of "3 days ago". Presence, live ages and countdowns still count.
- **Improved:** Chat videos recorded by OBS, ShadowPlay or phones are optimized after upload, so they start and seek faster.
- **Improved:** Player and match pages draw each section once in its final place, so nothing jumps around while they load.
- **Improved:** Dropdowns are lighter, especially on tournament stage forms. The friends list, matchmaking and the Play page's live queue count do less work, and players going offline no longer slows the rest of the site.
- **Improved:** The browser extension's FACEIT import, when it needs to, opens the match room in a background tab and closes it when done.
- **Fixed:** Links to 5Stack show their previews in Discord, Slack and Steam again, and search engines see the welcome page instead of an error.
- **Fixed:** My Account no longer blocks saving your country and language with "Invalid input".
- **Fixed:** Signing in, signing out or switching accounts in one tab now updates your other open tabs, chat included.
- **Fixed:** When your role changes, the open page adjusts to it without a reload.
- **Fixed:** Country flags show properly on Windows in all text styles.

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
