# 5Stack changelog

What changed in 5Stack each day: new features, improvements and fixes across the web app, game servers and self-hosted panels, grouped by the section of 5Stack they touch. Each entry is written automatically from that day's merged changes (UTC).

## Thursday, November 26, 2026

Today's update changes which matches count toward ELO.

### Stats & Leaderboards
- **New:** Whether a match affects ELO is now decided by rules for each kind of match, set separately for online and LAN play. By default, matches where one party fills the whole match, draft lobbies, scrims, player-created matches and tournaments no longer change ratings, and admins can edit these rules.
- **New:** Match organizers can switch a match between rated and unrated until its map veto begins. Tournament organizers can do the same for a whole tournament or stage until any of its matches reaches the veto.

## Wednesday, November 25, 2026

Support tickets now support images, and nightly backups cope better with brief storage outages.

### Self-hosting
- **Improved:** Nightly backups keep retrying through brief storage outages, spread over about 15 minutes, instead of giving up within a couple of minutes. Retries skip anything already backed up that day.

### General
- **New:** Support tickets show images inline, including screenshots from staff in the ticket's Discord thread, and open them in a full-screen viewer with zoom, arrow-key browsing and download. You can attach up to 4 images per message, at up to 10 MB each, by clicking the paperclip, pasting or dragging them in.

## Tuesday, November 24, 2026

Today adds region logos and room pings to the region veto, organizer voice, and Metamod switches for servers, plus many fixes across drafts, matchmaking, leagues and self-hosted panels.

### Matchmaking
- **Improved:** Every queue refusal now shows a translated reason, including party size, cooldown and ping details. A ban or cooldown is shown only to the player it applies to, and the rest of the party sees a general notice.
- **Improved:** The max ping slider now defaults to your panel's own limit. The ready check shows the match type and region, and a missed ready check now tells the party what happened.
- **Improved:** Draft room settings lock once the room leaves Open. The invite code changes when a room becomes invite only, and party joins skip players the host has blocked.
- **Improved:** A draft host must wait three minutes after check-in opens before dropping a no-show, and the draft room explains why when it is too early.
- **Fixed:** Your ping is now measured when you join a party and again before the captain queues, so party ping limits use up-to-date readings.
- **Fixed:** An inviter can only take back an invite that is still pending. Removing a member who had already accepted no longer pulls the lobby out of the queue.
- **Fixed:** A host who joins their own draft room's backups keeps running the room and can still start it when it is full.
- **Fixed:** A captains draft no longer makes a host without a seat into a captain, so picks can always be made. Captains are always seated players.
- **Fixed:** A draft whose match has already started stops retrying after three failed attempts, so its players are free to join other lobbies.
- **Fixed:** Signed-out visitors no longer see who is sitting in an open lobby.

### Matches
- **New:** The region veto shows each region's logo and the room's average ping, coloured by quality. Before the veto, players' pings to each region are measured in the background. Administrators can upload or remove a region's logo from the region's page.
- **New:** Match organizers who are not playing can join either team's voice from the match header or the draft room's team panels. In the call they are tagged as Organizer.
- **New:** Matches that do not count toward ratings now carry an Unrated badge. It appears on the match page, in match lists and in player match history.
- **Fixed:** Once a map has been played, only staff and tournament organizers can cancel a match, move it to another server or region, or reboot its server. A playing host can no longer do this.
- **Fixed:** Sides can no longer be switched in team, tournament or draft matches. Organizers who play in a match can no longer rewind the veto or extend its clock.
- **Fixed:** The header's check-in clock in a draft match follows the draft's one-minute window, and clocks over an hour now show hours.

### Leagues & Events
- **New:** Players, captains included, can leave a league team roster from their own row on the season page, even after the roster lock.
- **Improved:** Captains can only add their own team members to a league roster, and other players join the team by invite first. The season page explains when a removal would leave a team below the tournament's minimum lineup.
- **Fixed:** Rosters of a finished or canceled league season can no longer be changed except by league admins.

### Utility
- **New:** Administrators can choose who can start utility practice and browse lineups, separately from who can create matches. By default it follows the match creation setting.
- **Improved:** On-the-spot rows in a match's Utility tab now have Save, and Open Lineup once saved. A throw that matches a lineup you can see links straight to it. Grenade rows also get larger touch buttons and a labelled Save.
- **Fixed:** Practice servers, including temporary ones started when none is free, now load their plugins' settings, so plugins such as skin plugins work there.

### Streams & Highlights
- **Fixed:** Viewer counts now show for every live stream, not just the first hundred.
- **Fixed:** A stream's error details are shown only to signed-in viewers.

### Stats & Leaderboards
- **Fixed:** Editing a running season no longer allows setting its end date to today or earlier. Ending a season right away stays on End Season, with its confirmation.

### Players & Teams
- **Improved:** Player search's Steam lookups are now limited per player and per visitor, with a shared cap for signed-out visitors.

### Notifications
- **Fixed:** Signing out now stops push notifications reaching that device.

### Moderation
- **Fixed:** A banned player who tries to rejoin a server is now turned away at connect instead of taking a slot. If the ban is lifted, they can join again.

### Game servers
- **New:** Administrators can turn on Load Metamod for any dedicated server on a node, except CS:GO servers. This lets a Metamod plugin placed in the server's own files run. The guides cover both switches.
- **New:** When adding a game plugin, a Needs Metamod switch marks plugins that need Metamod. Marked plugins show a Metamod chip.
- **Improved:** Saving a server's map rotation, plugins and plugin configs together checks everything first. If only part of the save goes through, the server restarts on what was saved and tells you.
- **Improved:** The public servers list has a proper Join link, shows Full on a full server, offers Try again when it fails to load, and translates server types.
- **Improved:** A plugin database's password is changed once no server uses it anymore, without cutting off servers mid match. The Databases page now points to each row's restore button.
- **Improved:** Signed-out visitors see open, unranked servers even while they are offline. Players can see their own stats from restricted and password servers.
- **Fixed:** A restricted server's minimum role now requires players to be signed in.
- **Fixed:** Node disk alerts can be switched off by setting the threshold to 0, and a full game files disk now triggers an alert too.
- **Fixed:** The file manager refuses to open files over 5 MB instead of loading them whole.

### Self-hosting
- **Improved:** You can now add a GPU node from the GPU Nodes page with Use for Streaming and Clips. The guides and setup script hints cover this, along with new terminal commands.
- **Fixed:** A panel on the 5Stack service is never offered a git checkout's update commands, even while the service is briefly not reporting. It shows a "hasn't reported for a few minutes" notice instead. The plugin page shows the right command for panels on the service.
- **Fixed:** The panel's database no longer restarts itself when a backup or restore is cut off partway. The update that brings this fix restarts the database once.

### General
- **New:** Unknown addresses now show a translated not-found page.
- **Improved:** Croatian is corrected and fully translated, Polish and German wording is fixed, and match status badges are translated.
- **Improved:** Lobby invite buttons can be used from the keyboard, and pages have a skip-to-content link. The name form explains why a name was refused.
- **Fixed:** Signing out when your session has already ended no longer shows an error and takes you to the home page.
- **Fixed:** Sign-in errors now show a clear, translated reason.

## Monday, November 23, 2026

Today adds badges from panel plugins, shared databases for game server plugins, easier GPU node setup and several fixes for CS2 updates on nodes.

### Streams & Highlights
- **Fixed:** Streams and highlight clips now start on NVIDIA GPU nodes whose host keeps the graphics driver in a non-standard location.

### Players & Teams
- **New:** Panel plugins can put a badge on players. It shows in the role icon spot on every player display, with "+N" when there are more, and beside the VAC shield on profiles. Hovering lists every badge, and the plugin development guide has a new Player Badges page.

### Game servers
- **New:** Administrators can create databases for game server plugins under Settings › Databases and tick which dedicated servers may use each one. Plugins can then share data such as ranks and stats across servers, and the same page restarts the servers that need it and restores a database from a nightly or Cloud backup.
- **New:** Game plugins can now say they need Metamod:Source, and only servers that load such a plugin start it. The Game Plugins guides explain how to mark and install these plugins.
- **New:** A plugin's settings can include the ID of the match the server is playing, so a plugin can tag what it reports with that match. On servers that host no match it is left empty.
- **New:** A node's CS2 menu has a Verify files action that checks every CS2 file against Steam and fixes any that differ.
- **New:** A node's CS2 section warns when the disk CS2 is installed on has less than 20 GB free and shows a Free space meter. An update that runs out of room now says "Not enough disk space" and shows how much is free.
- **Fixed:** CS2 updates from an older build no longer fail when Steam stops offering that build. The update now checks the files on disk and downloads only what differs.
- **Fixed:** When Steam stops offering a node's pinned build, the pin is removed and administrators get a notice naming the build and the node. Before, the next update quietly installed the latest build while the pin still showed.
- **Fixed:** Retry update after a failed Verify files now verifies the files again instead of running a plain update.
- **Fixed:** A long restore of one plugin database no longer makes creating, deleting or repairing the others fail.

### Self-hosting
- **New:** Panel › GPU Nodes lists the NVIDIA and AMD graphics cards found on your nodes, each with a Use for Streaming and Clips button, and a GPU node's menu has Stop Using This GPU. Progress and failures show on the page with Try Again, and panels without the 5Stack service show the setup command to copy instead.
- **New:** Each plugin database is backed up nightly as its own file. Database › Backups lists these with a filter per database, and Settings › Backup and the notification bell warn when a plugin database is missing a backup.
- **Improved:** The panel's database now keeps some of its connections for the panel itself, so plugin databases can never crowd it out. The database restarts once when this update rolls out.
- **Improved:** The self-hosting guides now write the 5Stack service's commands with the short script name, without ".sh". The old form still works.
- **Fixed:** When the 5Stack service briefly stops reporting, the GPU Nodes page now says it lost touch and waits. It no longer offers the setup command meant for panels without the service or marks a change as Ready too early.
- **Fixed:** Removing the last GPU node no longer refuses when its card brand is unknown. A failed GPU change now stays flagged until a later run sets the panel up again.

### General
- **Fixed:** API keys from Settings › API Keys work with the API again. A key can no longer create further API keys, and a deleted key stops working.

## Sunday, November 22, 2026

Today brings Twitch broadcasts to any of several connected channels, a cancel-deadline countdown for live matches, and faster CS2 updates on game servers.

### Matches
- **New:** Players, coaches and organizers of a live match see its cancel deadline as a countdown strip under the server bar. It covers the warmup no-show window and then the map's time limit, and says what happens when time runs out; spectators no longer see a cancel countdown.

### Streams & Highlights
- **New:** You can connect any number of Twitch channels in Settings › Streaming, each with its own status, Test and Disconnect. Streamers and above pick each broadcast's destination when starting it: Direct or TV, then the 5Stack player or a Twitch channel that isn't already on another match.
- **Improved:** Start Live Stream is always offered on the match page, and any broadcast running on another match can be moved to this one, keeping its channel and mode. Twitch broadcasts can now use Direct as well as TV.

### Game servers
- **Improved:** CS2 updates and version pins now patch the existing install in place, so only changed files download instead of the whole game. Pinning a CS2 build no longer needs a Steam account, and the version pinning guide is updated to match.
- **Improved:** A CS2 update that fails for lack of disk space now says so and shows how much space is free.

### General
- **Fixed:** Adding 5stack.gg to the home screen on iOS shows the 5Stack logo instead of a plain "5". If you already added it, remove it from your home screen and add it again.

## Friday, November 20, 2026

Today adds Twitch broadcasting, a smarter auto director, staff-only lineup changes once a match's server is up, and more control over which highlights are kept.

### Matches
- **New:** Staff can swap a seated player while a match waits for its server or is live. The new player keeps the seat and is checked the same way as any other seated player.
- **Improved:** Once a match's server is up, only the match's organizers, tournament organizers and admins can seat, remove, move or swap players. Lineups lock when the match ends, so a finished scoreboard stays as played.
- **Improved:** The scoreboard and every stat panel list the players who actually played. Empty slots and seat controls appear only for people who can seat a player.
- **Fixed:** Moving a player to another lineup now follows the same roster, lineup size and ban rules as seating them.
- **Fixed:** A live match whose map was already in warmup now shows its warmup countdown on the match page and ends on time when players don't show.

### Tournaments
- **New:** Tournaments have a Subs During A Match switch under Allow Substitutes. It is on by default and lets the tournament's organizers change lineups once a match's server is up. When it is off, only admins can.

### Demos & Replays
- **Fixed:** The automatic demo cleanup no longer deletes a demo while someone is watching it or a highlight is rendering from it. It pauses while all demos are being re-parsed and spreads a large backlog over several runs.

### Streams & Highlights
- **New:** Admins can connect a Twitch channel in Settings › Streaming and send live broadcasts to it from an NVIDIA streaming node. A Test button checks that the channel is ready.
- **New:** Broadcasts sent to Twitch play in Twitch's player on the match page, the Watch page, the popout and the floating player. Each shows the channel, its viewer count and a delay notice.
- **New:** Settings › Highlights has a "Keep highlights with" choice, set to 3K by default. Auto highlights below it expire once they pass retention, while higher-kill and hand-made highlights stay until storage runs out.
- **New:** Settings › Encoding has a live stream latency field, so admins can add buffering when broadcasts stutter on a weak connection.
- **Improved:** The auto director follows bomb plants, defuses and clutch players. It also moves on from a quiet player instead of staying on them.
- **Improved:** Highlight retention defaults to 30 days.
- **Fixed:** Switching a delayed TV broadcast to another match keeps its delay.

### Career
- **New:** Admins can turn on a recheck of earned titles after a full ELO rebuild. A title earned only by a voided, abandoned or deleted match is then removed, or moved to another match that still earns it.

### General
- **Improved:** Draft system alerts are hidden from everyone except administrators. Who created or last edited an alert, season, award, region or dedicated server is now shown only to staff.
- **Improved:** The privacy policy names the AI provider behind Rokkan and says that uploads have their location and camera details removed.
- **Improved:** The 5Stack wordmark is refreshed with evenly spaced lettering across the site, the docs and highlight outros.

## Thursday, November 19, 2026

Today adds a match MVP, new highlight settings, a Rifler role and many draft room fixes.

### Matchmaking
- **Improved:** A pending invite on the draft board now shows as a faded, dashed "Invited" card. Cancel Invite on the board cancels it at once, without the Kick dialog.
- **Improved:** Players brought into a Teams draft from a team's roster now get an invite to accept instead of being seated directly, and the usual ban, cooldown and ELO checks apply.
- **Fixed:** A Teams draft can't start until every seated starter has accepted, and the header shows how many invites are still open. A pending request on a side now gets its own message.
- **Fixed:** A player can no longer be seated on a full Teams side. New invites and direct adds to a full side go to its bench, and a benched invite shows with that side's backups.
- **Fixed:** Draft rooms no longer get stuck on the last pick when backups or pending invites are in the room. Rooms left stuck for 30 minutes are cleaned up.
- **Fixed:** The Play page and the friends list now count a draft's seats correctly, so pending requests and benched invites don't make a room look full.

### Matches
- **New:** Once a match ends, its MVP shows under the score in the match header. The MVP still shows when a map was canceled and updates after a demo is parsed.
- **Improved:** On desktop, a finished veto now shows as a centred row of map chips with each team's logo.
- **Improved:** The check-in box has a light running round its edge, so it reads as a button with any brand colour. The light turns red and speeds up in the last 10 seconds.
- **Improved:** A forfeit before any map was played now shows a dash for each side, with your result bar under your side.
- **Fixed:** A match opened from Recent games in the side panel now shows its Quick Overview in one readable column.

### Tournaments
- **Fixed:** Bracket previews and embedded brackets now show the Grand Final's and each round's real best-of.

### Utility
- **Improved:** The Utility tab follows the map picked at the top of the match page, and picking a map keeps you on Utility. Callout names now show by default.

### Streams & Highlights
- **New:** Settings › Highlights has a slider for which roles get an auto highlight every match, once a week, or none. With nothing saved, every signed-in player gets one every match, and panels that already saved settings keep them.
- **Fixed:** Switch Stream To This Match now appears for a live broadcast, and a delayed broadcast keeps its GOTV delay when it switches.
- **Fixed:** After a stream switch or map change, the stream HUD now updates returning players' team, name and photo.

### Stats & Leaderboards
- **New:** Profiles and ELO hover cards show how much ELO you need for the next tier.
- **New:** A side where no position stands out and the player mostly used a rifle now reads Rifler instead of Flex. Rifler is also a side role on the leaderboard and can be given by Rokkan.

### Players & Teams
- **New:** Administrators can remove another player's uploaded avatar from the profile. Removing an avatar now asks first everywhere.
- **Improved:** The Teams directory now opens sorted by Rating, strongest teams first.
- **Improved:** The team page loads its roster history once for Overview and Activity.
- **Fixed:** The roster photo viewer stays on the same player when someone joins or leaves, and it closes when no one is left.
- **Fixed:** On phones, See all and View ELO on a profile now scroll to the tabs, and the tab strip sticks to the top as you scroll.
- **Fixed:** The profile's Filters menu now scrolls within short screens, so the Range calendar and Clear can be reached.
- **Fixed:** Recent matches rows on a profile keep the map and ELO in view beside the ELO card, and a Cancelled badge is no longer clipped.
- **Fixed:** The profile's Share and Message buttons are square again.

### Career
- **New:** When a match takes you up a level, the rewards card lists what you unlocked and any Stacks earned, each with its own Equip button.
- **Fixed:** Career XP is no longer paid for a match nobody played.

### Notifications
- **Fixed:** Opened notifications now wrap as one tidy paragraph with every line on the same left edge.

### Game servers
- **Improved:** The CS2 and CS:GO update check now asks Steam directly and runs every 5 minutes. A third-party mirror is used only as a fallback and can't roll a build back.
- **Fixed:** Game server nodes no longer stay offline after a panel reboot, because they reconnect on their own.

### Self-hosting
- **Fixed:** Game nodes added with the install script now get their network routes approved automatically. The guide for using your own OAuth client now asks for Policy File read access and points to the exact lines your panel's setup page shows.

### General
- **New:** Uploaded photos and videos, including avatars and chat attachments, no longer keep where they were taken or which camera took them.
- **New:** The Terms on 5stack.gg now explain how to send a copyright notice.
- **Fixed:** The draft room, lobby lists and veto board now use the same monospace font as the rest of the site.

## Wednesday, November 18, 2026

Today brings a single Performance tab on player profiles, more reliable drafts, map changes after the veto, and Cobblestone.

### Matchmaking
- **New:** A draft's backup can now leave after the draft has started, from a strip under the scorebug that shows their place. Leave is locked only for the moment the match is being made.
- **New:** Opening a scrim notice about an expired, declined or cancelled request shows that request at the top of the team's Requests, with why it closed, Request again and Dismiss.
- **Improved:** A page reload or short disconnect now keeps you in your lobby and queue for 3 minutes instead of 60 seconds.
- **Fixed:** A draft now follows a match an organizer changed by hand, and a banned team member no longer cancels it. A draft can no longer create two matches, and a player can't be approved into a draft while another draft holds them.
- **Fixed:** A draft that gets stuck making its match is retried. It is called off after three failed tries so its players are freed.
- **Fixed:** A backup who leaves while the match is being made is no longer seated, and check-in no longer counts them. A no-show swap now happens completely or not at all, and a busy draft asks you to try again.

### Matches
- **New:** Admins and match organizers can change a map that hasn't started yet, from the map card's menu or from Fix a Problem. Maps already in the series aren't offered.
- **New:** Cobblestone is available for Competitive (outside Active Duty), Wingman and Duel, with new artwork, including in a game server node's offline match form. Wingman and Duel pools pick it up on panels with automatic map pool updates on.
- **New:** Matches you played now show your result. You get a coloured bar under your score in the match header, a result line in match lists and on Watch page cards, and a ring on your team's crest.
- **Fixed:** Schedule Match buttons now show only to match organizers and above, the people who can use them.

### Leagues & Events
- **Fixed:** Captains now see the opposing captain's scheduling note in the season calendar's fixture dialog.

### Coach
- **New:** Settings › Recaps shows every recap waiting to be written, with an estimated cost. You can write them all, pick which ones to write, or have Rokkan write recaps automatically when a period, season or event ends, pausing after failures before trying again.
- **Improved:** AI Spend on the admin overview groups spending into Coaching, Moderation and Recaps, with each feature listed under its group.

### Demos & Replays
- **Fixed:** Replay, radar and lineup map data builds again for maps compiled by the latest CS2 build, including some workshop maps that failed before.

### Stats & Leaderboards
- **New:** The Breakdown, ELO, Maps, Arsenal and Combat tabs are now one Performance tab of cards. Each card opens into a full view, and old links open Performance.
- **New:** Comparing with another player or a season marks Performance cards and tables with the gap to them.
- **New:** Chips in the ELO view switch the chart between 5Stack ELO, Premier, Competitive, Wingman and FACEIT histories.
- **Improved:** The ELO change popup explains each change in plain words, from the odds to the final number. The ELO graph marks gains and losses with coloured arrows.
- **Improved:** KAST and HS% now show as rank bars from Poor to Elite. The recent results radar fills its card and shows the W–L record.
- **Improved:** Performance views use the space better, open as a sheet on phones, and have their graphs ready before you scroll to them. The role radar box lines up with the cards beside it.
- **Improved:** The recap share card is one design for the link preview, downloads and the share dialog, and now shows your rating and flag.
- **Improved:** Recap stats show your place, such as "1st of 15", instead of a percentage. The recap timeline shows full event names and has scroll arrows.
- **Fixed:** The recent W–L now counts surrendered and forfeited matches and scores each match by who won it.
- **Fixed:** Recaps keep every chapter that has something in it, and event recaps list awards won in the event's tournaments. Any event's recap can now be shared by link.
- **Fixed:** Going back to a recap keeps your place, and picking a year on a phone no longer pushes the profile off the left edge.
- **Fixed:** Closing an open stat card no longer leaves the row empty before the other cards pop back.

### Players & Teams
- **Improved:** The player profile header has a new layout, with a one-line name and rank and a compact ID strip on phones. The badge row now fits on one line on phones and the trophy tray on two rows on desktop, and the level badge no longer runs into the ID strip.
- **Improved:** Staff below administrator can only give roles below their own, and the role picker offers only those. The roles guide is updated to match.
- **Fixed:** Leaving or deleting a team now shows why it failed, and a double tap sends only one request.
- **Fixed:** Award hovers and the Trophy Case show what each award is for.
- **Fixed:** Team search results show the result count again.

### Career
- **New:** Installing the 5Stack Match Importer browser extension pays a one-time Stacks reward. Linked Accounts now has a Match Importer card, and new accounts get a setup step for it.
- **Improved:** The match page's rewards card leads with your rating change and opens the full breakdown on hover. It also shows what the match added to your level bar and lists the Stacks it paid.
- **Fixed:** The Win line on a won match's rewards card shows its XP again.
- **Fixed:** XP is recounted right away when staff remove an abandon or a match is voided or restored.

### Notifications
- **Improved:** The bell stays still while it's open, and new notifications wait on a "New" pill until you open them.
- **Improved:** Notifications take you to the page and part of the page they're about, and the bell closes when you open one.
- **Improved:** Update notices are grouped by kind, and build, plugin and update failures are listed under Critical. Steam Bot Offline and Rokkan Reviews Failing are now warnings.
- **Improved:** Awards from the same event stack together.
- **Fixed:** Older award notices without a badge now stack, and season award reward notices open that season's awards board.

### Moderation
- **Fixed:** After Dismiss or Resolve, the message counts only the reports you actually closed, not ones another moderator closed first.

### Game servers
- **New:** The panel's link to a node's offline tool now signs administrators in, with no password to copy. A used or expired link falls back to the password sign-in.
- **Improved:** The offline tool's sign-in page, the node's Offline section and the offline support guide explain how to get in when the event has no internet.
- **Improved:** Game server nodes now accept only short-lived signed requests from the panel. A node whose clock is off says so.
- **Improved:** The offline tool keeps its sign-in more secure when opened over HTTPS.

### Self-hosting
- **Improved:** Map asset and gamedata notices are now listed with the staff notifications on the Discord page and post to the staff alerts channel by default, instead of the public CS2 updates channel.
- **Improved:** Tag Manager now runs only after the operator's name, address and contact email are filled in, and the Privacy page names who runs the site.

### General
- **New:** Administrators see the best matching docs section at the top of ⌘K search.
- **Improved:** Map images now load at the size they're shown, so the coach list no longer goes blank on a fast scroll. The same applies to event match rows, the Play page map pool, tournament cards, draft settings, quick connect, server map rotations and the team veto simulator.
- **Improved:** Charts across the site share one tooltip style, and line charts show a guide line at the hovered point.
- **Improved:** Monospaced text looks the same on Windows and Android as on Mac.
- **Fixed:** Several refused actions now say why instead of showing a generic error.
- **Fixed:** Back and forward restore your scroll position more reliably.
- **Fixed:** 1Password no longer offers a sign-in prompt while you scroll the Discord settings page.
- **Fixed:** CS2 news posts in Discord no longer show raw formatting tags and lead with the post's first picture.

## Tuesday, November 17, 2026

Today brings player recaps, a trophy case on player pages, a tabbed coach hub and a new layout for event media, along with many fixes.

### Matchmaking
- **Improved:** Matchmaking skips regions whose servers are all offline, and won't start a queue when every chosen region is offline.
- **Fixed:** A matchmade match still waiting for a server after 30 minutes is now canceled without counting anyone as a no-show.
- **Fixed:** Changes to a scrim's time are now saved correctly whatever the player's time zone.

### Matches
- **Improved:** Scheduling notes on match time proposals are now visible only to the two captains, league admins and the tournament's organizers.
- **Fixed:** Join TV and the "TV is delayed" notice only show when the match server runs GOTV, so they no longer appear on practice servers or servers without TV.

### Tournaments
- **Fixed:** A tournament's creator, co-organizers and organizers can all start it, and a cancelled tournament can no longer go live.
- **Fixed:** Team invites are checked again when accepted, and accepting one now works for someone who is already on the team.
- **Fixed:** When registering, names that differ only by letter case or look-alike characters now count as the same name.

### Leagues & Events
- **New:** An event's Media tab and Overview Moments use a mosaic layout, with each photo and video shown in its own shape. Moments loads more as you scroll when it is the last section, and See all only appears when some media is hidden.

### Coach
- **New:** The coach hub brief is split into Plan, Habits and Utility tabs under a bar that stays in place as you scroll. The Utility tab shows your lineup score with its trend and per-match bars, and weekly reports open in full in the side pane, comparing this week with last week.
- **Improved:** Review findings show their rounds on a strip of the whole match. Hover a round to see its time, or click it to play it, and long findings no longer squeeze their titles on the Overview.
- **Improved:** On a review, findings open one at a time when clicked, and lines carried over from your last reviews now sit at the top of To Fix. The Utility tab lists each grenade, which opens to its throws, each marked Missed or On the spot.

### Streams & Highlights
- **Improved:** Streamers can edit or remove only the stream links they added or links on matches they organize, while moderators can manage any. When a change is refused, a message explains it and the list goes back to how it was.

### Stats & Leaderboards
- **New:** Player recaps for quarters, years and seasons appear on the Recap tab of your own profile. They include a timeline, chapters on when you played, your style, clutch moments, utility, the people you played with and your best nights, and "Top X% here" rankings. Rokkan's notes are added after the period ends, and you get a notification when they are ready. Recaps can be downloaded as images or shared as a link that can be turned off.
- **New:** Finished events you played get their own recap with your rank, record, K/D, awards, and the clips and photos you appear in. Every recap gains a Best moments chapter with your aces, 4Ks, knife kills and clutches. The event page shows a Your Recap tile linking to it.
- **New:** Admins choose how often recaps come out: yearly, every 6 months, every quarter, or seasons only, with an option to finish the year with a yearly recap. They also pick which roles get recaps and generate recaps from the Recaps settings.
- **New:** Public servers always have a points season, and panels without one start a global Season 1.
- **Improved:** The Seasons page lists live, upcoming and past seasons, and each season's dates, awards and actions open in a side drawer.
- **Improved:** Tournament matches always count on the player page and the leaderboard, so the Exclude tournaments filter has been removed.
- **Improved:** Community seasons are now called public server seasons throughout the site.
- **Fixed:** The Awards board now shows event, league and season awards when a game mode is picked, including on the default Competitive view.
- **Fixed:** Tied players on the leaderboard now share a rank on the rows, the podium and the player panel.

### Players & Teams
- **New:** The player page has a trophy case that shows awards and badges together. Owners can pick what each plaque shows, or drag items into any order from the trophy case, the All Trophies sheet or the profile header.
- **Improved:** On another player's profile, organizers can change only the name, country, role and verification, and only for players at or below their own rank.
- **Fixed:** The verified badge keeps updating instead of stopping after it first loads.

### Notifications
- **Fixed:** Players in a match's lineup are now notified when check-in opens and when the match goes live.
- **Fixed:** Tournament invites and tournament team invites now link to the tournament.

### Moderation
- **Improved:** Only moderators can see who issued a sanction.

### Game servers
- **Fixed:** The plugin list now shows a retry option when it can't load, instead of loading forever.

### Self-hosting
- **Improved:** Panel update, panel move and game server update banners show in each viewer's language, with update times in their own format. The panel update banner can no longer be dismissed, and the game server update banner can only be dismissed until the update starts.
- **Fixed:** Recovery notices now reach Discord channels set to Warning or Critical whenever the alert they end was posted there.

### General
- **New:** The site is available in Croatian, and it now picks the first language in your browser's list that it supports.
- **New:** On panels that use Google Tag Manager, visitors in European time zones are asked for consent before it loads. They can change their choice at any time from the privacy page.
- **Improved:** Layouts work better on phones, tablets and 1024px laptops, including match lists, the map veto, team lineups, dialogs on short screens and larger tap targets.
- **Improved:** Signed-in sessions are better protected.
- **Fixed:** Breadcrumbs and the page language now follow the language you've chosen.
- **Fixed:** Tournament, match, team and player pages that don't exist now show a clear not-found message, and team and player pages can retry a failed load.

## Monday, November 16, 2026

Events get a full-screen media viewer and clearer tabs, highlights can be filtered to knife kills, and Rokkan now reads the weapon a player actually had out.

### Leagues & Events
- **New:** Event photos and videos open in a full-screen viewer with a strip of all the event's media, which you can step through with arrow keys, the edge buttons or a swipe on phones. A details drawer lets you rename media and tag players, and lets the uploader and organizers delete it.
- **New:** The Matches, Highlights and Media tabs show how many items they hold, and the Players tab is now called Leaderboard. Old links still open it, and before an event has stats it lists the event's teams and signed-up players.
- **New:** The event header shows team crests that open the team list, with each team linking to its page.
- **Improved:** The event overview is laid out more clearly, with your line above the top three and results listed under Matches. Stats use the scoreboard's labels and lead with HLTV rating, and the leaderboard fits on phones without scrolling sideways.
- **Improved:** Event galleries lay out photos and videos faster because each item's shape is already known instead of being measured in your browser.

### Coach
- **Improved:** Rokkan judges each death by the weapon the player actually had in hand, not the grenades they were carrying. When an admin runs Review with Rokkan on an older demo, the demo is read again to pick this up.
- **Fixed:** Earlier findings based on grenades carried rather than held are removed from habits, team tendencies, scouting, progress reports and briefs. Review text players have already read is unchanged.

### Streams & Highlights
- **New:** Highlights can be filtered to clips with a knife kill from the Kills menu, alone or together with a kill count. The filter works on the highlights page and an event's Highlights tab, and it includes older clips.
- **Improved:** Each side of the Match Clips / Singular Clips toggle shows its count, so you can see how many results a filter found even when they fit on one page.

### Game servers
- **Fixed:** Idle practice servers no longer fill the server console with warnings while no session is running.

### Self-hosting
- **Fixed:** cert-manager now runs on the panel node instead of possibly landing on a game node, so certificate renewals keep working when a game node goes down. Updating moves it on existing installs.
- **Fixed:** Node updates and live system logs in the panel no longer stop arriving after a quiet period.

### General
- **Fixed:** A panel's own logo on the welcome page now shows in full instead of being cropped by rounded corners.
- **Fixed:** Link share cards no longer show the default title for several minutes after the panel's settings briefly fail to load.

## Sunday, November 15, 2026

Titles are now earned through challenges, Rokkan's reports move to the coach hub, the moderation Done tab groups each close into one row, and several settings saves are more reliable.

### Matches
- **Fixed:** The match settings form no longer says "Match Updated" when nothing was saved, such as after you stop being an organizer. It now shows "You don't have permission to do this." and keeps your unsaved changes, and a refused save shows one error message instead of two.

### Tournaments
- **Fixed:** Adding a stage with its own match settings, or creating a league season, now saves in one step. An interrupted save no longer leaves a half-finished setup or creates a duplicate stage or season.
- **Fixed:** Saving a stage's settings now tells you when nothing was saved and shows a single error when a save is refused. A scheduled stage match also keeps its settings when the stage is switched back to the tournament's settings at the same moment.

### Utility
- **Fixed:** A practice session that fails to start no longer leaves a stuck match behind.

### Coach
- **Improved:** Scouting reports and weekly progress reports now live in the coach hub instead of the notification bell. The Coach badge counts unopened scouting reports and updates live, and the New tab lists them.

### Demos & Replays
- **Fixed:** Demos now upload for matches that went quiet for a while and were then forfeited or given a winner by hand.

### Career
- **New:** Titles in the Locker are now earned through challenges in rated 5Stack Competitive matches with ten rated players, and each title shows the challenge that earns it where its price used to be. Stacks already spent on titles are refunded, titles you have already earned through past matches are granted, and level titles and Champion are unchanged.

### Notifications
- **Improved:** The "Match Stats Ready" notification is retired, and existing ones are removed from the bell.

### Moderation
- **New:** The Done tab lists each close as one row, so a spammer cleared in one click shows as a single entry. Each row shows the player, category, room, outcome, moderator and note, and Show Messages opens the close's lines with repeats folded together.

### General
- **Fixed:** At the end of a match, the fading scorebug in the header is no longer covered by the party pill as its Play button appears.

## Saturday, November 14, 2026

A big day for draft rooms, with new ways to find, join, pause and hand off rooms, plus clearer LAN match rules, profile badges, a Spend stat and a new Highlights app.

### Matchmaking
- **New:** The Draft Rooms page puts a gold Join button on every room and adds a Quick Join card for the open room closest to starting. A welcome dialog explains how joining works and can be reopened from How It Works beside Filters.
- **New:** A draft room's host can hand the room to another seated player from the Hosted by chip. The new host is told in the bell, by push and with a toast on whatever page they are on.
- **New:** The host, organizers and both captains can pause a draft room's clock while players are picked and during the map veto. Resuming counts down 3, 2, 1, and a pause nobody resumes ends after 5 minutes.
- **New:** Match organizers can draw two new captains, or swap one, while a captains draft is picking, which restarts the draft at pick 1. Hosts can no longer change captains once picking has begun.
- **New:** Who Can Join now has a Team option with a team picker, so a draft room can be opened only to a team's roster. Match organizers can pick any team.
- **New:** Any draft room host can now pick the room's game mode. If the mode stops being available before the draft ends, the match plays standard and unranked.
- **New:** Match organizers get an In progress tab on the Draft Rooms page that lists every started room, so a stuck room can be found and opened.
- **New:** A draft room on a custom map pool shows its maps in the lobby header.
- **Improved:** The full Host a Room form opens on the draft settings you last used on this device, and new rooms pick two random captains by default. The Draft Lobbies guide is updated to match.
- **Improved:** During the veto, a turn bar names the captain on the clock and shows the time left. Both teams are listed beside the chat, and the room builds each step in smoothly instead of folding shut.
- **Improved:** A draft room's settings show as labelled cells, with the game mode in its own cell. On phones, Leave becomes an icon so Start Draft is no longer cut off.
- **Improved:** A room's opened details end with a View Room link, so you can look into a room without joining. Player faces on the rooms list are larger.
- **Improved:** Every player now sees Open Slot tiles for free seats in Available Players, and the tiles fill their rows evenly.
- **Fixed:** The Draft Rooms page no longer flashes the "no rooms" banner before the rooms load.
- **Fixed:** Teammates now see who is in a draft room limited to their team, instead of 0 players.
- **Fixed:** Changing or deleting a draft room's custom maps no longer changes or removes the maps of another room, match or tournament on the same pool. Everyone in the room now sees the host's map changes right away.
- **Fixed:** A draft room whose players all come from one team shows that team's A and B sides from the start. A team drafting against itself is placed on both lineups, and players show their roster photos once the match is made.

### Matches
- **New:** On a paused match, anyone can type .check in chat to see who the match is waiting for. During a disconnect pause, a player in the match can use it to resume once everyone is back.
- **Improved:** LAN and offline matches have the surrender vote again. LAN tournament matches have no vote; instead, their organizers are alerted when a player has been gone for 3 minutes, including during warmup, knife or between maps.
- **Improved:** LAN matches follow the same check-in, ready and no-show rules as online matches. A full lobby that never readies up is canceled, while a LAN tournament match waits and alerts its organizers. A LAN match that stalls mid-map now alerts organizers instead of being canceled.
- **Improved:** The match guides explain what a LAN changes for deadlines, disconnects and surrender, and how .check works.
- **Improved:** The check-in box rolls in, rolls its amber away when you check in, and fades to red over the last ten seconds.
- **Improved:** Round history tooltips open as soon as you hover, and clicking a round keeps the tooltip open.
- **Improved:** The buy type chart shows one split bar per matchup, so neither team's bar goes missing.
- **Fixed:** A map ended by a surrender, forfeit or result set by hand now goes to the match's winner, and rounds the server plays afterward no longer change the score. When this changes a map's winner, the match is rated again.
- **Fixed:** A match resumed right after it was canceled picks up its server again instead of waiting on a vote nobody can answer.
- **Fixed:** A player who leaves during warmup, knife or between maps now gets their 3-minute timer when the map starts. A leaver whose seat is filled by a substitute is no longer reported.
- **Fixed:** A missed check-in or a stalled veto no longer records every player as a no-show when a server was assigned ahead of time.
- **Fixed:** Check-in no longer says the match will cancel when Match Cancellation is turned off.
- **Fixed:** Adding time to the veto clock now updates the countdown for both teams right away.
- **Fixed:** Scoreboard rows line up whether or not they have a player menu.

### Tournaments
- **New:** Tournament and league standings show each team's win rate. On phones, the win rate sits under the W–L record, so the tables no longer scroll sideways.
- **Fixed:** Leaver alerts now reach a tournament's owner and co-organizers and link the match. Support requests about a tournament match no longer post twice.

### Leagues & Events
- **Improved:** The Wins tab of an event leaderboard shows Losses and Win Rate, and ties do not count as losses.
- **Improved:** A player's expanded row on an event leaderboard shows their stats only; the long Matches list is gone.

### Coach
- **Improved:** Rokkan's reviews no longer appear in the notification bell or as pushes; they live on the Coach page with its own count. Reviewed players still get a Match Stats Ready notice.
- **Improved:** A Coach review's replay opens with the scoreboard and play-by-play closed, and both can still be opened from the replay.
- **Improved:** Switching to the other team's review of the same map keeps the replay and page in place instead of reloading.
- **Fixed:** An admin who is not in a match sees one review band per map instead of one per team.

### Demos & Replays
- **New:** Admins can reparse only the demos of matches played on 5Stack, without also reparsing imported matches.
- **Improved:** Grenades thrown at the same moment on the replay's seek bar fold into one icon and a +N, which opens into a tray of every throw.
- **Fixed:** Maps of a match that ended mid-map, by surrender, forfeit or a result set by hand, now get their demo.

### Streams & Highlights
- **New:** Clips of you have their own Highlights app in the right hub, with a count of unseen clips, a New tag and Mark All Seen. They no longer appear in the bell.
- **Improved:** A match's highlight reel shows your own highlights first.
- **Improved:** A highlight waiting in a paused render batch now reads Paused instead of Next in line.
- **Fixed:** The stream HUD shows a player's own roster photo even when the lineup has no team.
- **Fixed:** Live streams no longer get stuck on CS2's workshop download prompt.

### Stats & Leaderboards
- **New:** Clicking Win Rate, ADR, K/D, KPR or DPR on a player's Performance tab expands it into a graph and list of the matches behind it, with links to the best and worst match.
- **Fixed:** Night maps now count toward their day map's card on a player's Maps tab.

### Players & Teams
- **New:** Player pages show leveled badges for 21 achievements, such as aces, clutches and utility kills. You can pin three as plaques, and the rest show as patches with an All badges list showing progress to each next level.
- **Fixed:** Kills made while airborne are now recorded, so the aerial-kills badge counts them and the Gravity Optional title can be earned.
- **Fixed:** Signed-out visitors no longer see an error on player pages.

### Career
- **New:** Spend is a new profile stat in the Locker that shows the in-game money you spent and earned. Hover or tap it for a breakdown. It counts only matches played on 5Stack, and older matches fill in when their demos are reparsed.
- **Improved:** The stat on your Career card is now picked from a menu on the card's number or on a look's label, replacing the row of stats.
- **Fixed:** On phones, the pinned profile stat and title share one line on the player card.

### Moderation
- **New:** The Messages queue groups a player's flagged chat into bursts by category, showing Rokkan's read, who reported it and the transcript. Dismiss, Resolve and Sanction close every report in a burst at once.

### Game servers
- **Fixed:** CS:GO dedicated servers no longer crash a few seconds after a map loads, and they no longer receive CS2 plugins.
- **Fixed:** A CS2 update no longer restarts CS:GO servers. CS:GO servers now get the player slots they are set to; turn an existing server off and on to apply this.
- **Fixed:** CS:GO servers no longer log a harmless 64-bit Metamod load error on every boot.

### General
- **New:** Administrators can pick a Discord voice channel that players are moved to when a match ends, instead of dropping out of voice.
- **Improved:** The top bar's draft and match chips are now one scorebug that shows picks, check-in, the veto and the live score, and whose move it is. The lobby, match, draft and Stacks pieces appear together and slide smoothly as they change.
- **Improved:** Open account setup steps show as orange dots that lead to Linked Accounts, where each step has its own card. Linking your match history is now a guided two-step process.
- **Improved:** The right hub's Team tile shows teammates online in a pill under its logo, so the corner badge is only for team chat.
- **Fixed:** Signing in from a draft room, an invite link or any page that needs a sign-in now returns you to where you started.
- **Fixed:** The right hub scrolls when its apps outgrow a short screen and no longer sits under the scoreboard's pinned column.
- **Fixed:** Focus rings on text fields are no longer cut off.
- **Fixed:** Opening Support tickets from the Admin list keeps the left nav on Admin.

## Friday, November 13, 2026

Today brings fairer handling of dropped players, pauses and surrenders, Wingman and Duel season podiums, limits on repeat-opponent ELO, and many fixes across draft rooms, events and stats.

### Matchmaking
- **New:** Draft Rooms in the left menu shows how many rooms are open. The count includes public rooms and the friends, team and invite rooms you can see.
- **New:** When every player in a draft is on the same LAN and it has a free server, the draft's match is played there. A venue's match LAN is preferred over a nearby practice-only one.
- **Fixed:** Opening a draft room whose match has already started now goes straight to the match page instead of holding you in the room.
- **Fixed:** A team-only draft room now reads "Team only" on its card, row, settings and edit form instead of showing placeholder text.
- **Fixed:** Once a draft's match is made, a side that plays as one team shows that team's name and logo in the room and on its veto board.
- **Fixed:** On a full room's side card, Join now sits above the roster, so a short window can't hide it. The roster is listed in two columns.
- **Fixed:** The "Checking in" label in the draft header is no longer cut off at medium window widths.

### Matches
- **New:** In online matches, a player who drops costs their team a technical timeout, and each team has two. When both teams are short they take turns paying, and the match plays on short-handed once a team's timeouts are spent.
- **New:** In LAN and offline matches, a dropped player's pause stays until someone resumes it. The pause reminder counts down the timeout in every language.
- **New:** A cancelled match is tagged Cancelled on the match page, in match lists and in chat, with a note explaining what that means. It no longer counts toward stats, leaderboards, ELO, awards, Career XP or the profile's Maps totals, and it counts again if it is un-cancelled.
- **Improved:** A pickup seat is now taken only by linking Discord on 5stack.gg. Until then, the player waits in spectator and is told how to claim their seat.
- **Improved:** Only lineup players can ready up, and each lineup readies on its own. The not-ready list also names seats nobody has taken yet.
- **Improved:** LAN and offline matches no longer call surrender votes or record abandons. A cancelled LAN match outside a tournament records no no-shows.
- **Improved:** In-game restore messages and the restore command now use the round the restore starts on, matching the match page.
- **Fixed:** A pause now only ends for the reason it was made, and a technical pause holds until both teams resume. A lost camera pauses the next round in play.
- **Fixed:** The round-start pause counts only lineup players, so a coach or caster no longer hides a missing player.
- **Fixed:** A surrender can only be called while the map is being played, and only by the surrendering lineup's players, who are also the only ones who vote.
- **Fixed:** A leaver who times out after halftime now surrenders for their own side. An answered surrender vote no longer comes back, and a failed vote keeps other leavers' timers running.
- **Fixed:** A yes or no answer now counts for one vote only. When several votes are open, players are asked to name the one they mean.
- **Fixed:** Ready, knife and pause timers and votes end when the map moves to its next phase, so stale prompts no longer carry over.
- **Fixed:** A server restarted while a map waits for the TV delay now finishes the map instead of leaving the match live for hours.
- **Fixed:** Restoring to the start of round 1 works on online matches on every server. Restores count each lineup's own players, so a 5v4 can restore and a coach or caster never fills a seat.
- **Fixed:** The add-player search on a match lineup now finds stand-ins who are not on the team.
- **Fixed:** In the map veto, Confirm sits in the middle of the chosen map on phones, and "Usually bans" labels stay inside their box on narrow maps.
- **Fixed:** The map pool popup shows the pool loading, or says it failed, instead of claiming it has no maps.

### Tournaments
- **Fixed:** Correcting or replaying a tournament match keeps its end time and rebuilds the ratings that came after it. A correction no longer strands the bracket or cancels the tournament, and a corrected final finishes the tournament again with a fresh podium.
- **Fixed:** Grand Final series scores now include the upper bracket's map head start on match pages, brackets, standings, Watch and share cards.
- **Fixed:** Focus rings in the award composer and prize sheet are no longer cut off.

### Leagues & Events
- **New:** Event highlights have their own tab, and the Overview shows the event's top plays. Tournaments taking sign-ups appear as a slim row with Register.
- **New:** Events in the left menu shows how many events are live now. The Events link stays visible to everyone while Events is switched on.
- **Improved:** The Events page moves events from Up next to Live to Past on their own schedule, without a reload.
- **Fixed:** An event never shows in two sections at once, and its badges change at its exact start and end.
- **Fixed:** An event page reloads its matches when a tournament, team or player is attached or removed.
- **Fixed:** Imported matches are no longer linked to events, so they stay off an event's matches, leaderboard, stats and highlights.

### Utility
- **Improved:** The practice panel offers regions that only host practice, with latency readings, and "Any region" starts your server on the LAN you are on first.
- **Fixed:** LAN detection for practice is more reliable. It runs once you sign in, picks up LANs that appear mid-session, and starts fresh when another player signs in.

### Streams & Highlights
- **New:** The match page shows which highlights are still being made, how many are ready and where yours is in line.
- **Fixed:** The stream HUD puts teams on the right sides of workshop maps, including on TV and Playcast streams.
- **Fixed:** Swap sides now holds through halftime and overtime, and a second press undoes the first.
- **Fixed:** FACEIT demos no longer crash a few seconds into playback when used for streams and highlight clips.

### Stats & Leaderboards
- **New:** Each season now awards Wingman and Duel podiums alongside Competitive. The leaderboard shows the podium for the selected match type, and these medals name their mode on profiles.
- **New:** When the same players meet four or more times in a week, the winners keep 75%, then 50%, then 25% of their ELO gain. The ELO popup explains the reduction, and admins can change these settings in Settings › Players.
- **New:** Administrators can revoke a calculated season medal by giving a reason, and the revoke holds through recalculation. A Revoked list on the award page lets them restore it.
- **Improved:** The ELO popup says when the player left the match.
- **Improved:** A full ELO recompute skips imported matches, so it finishes sooner.
- **Fixed:** A match live across a season's end now counts toward the season it ends in.
- **Fixed:** Editing a season's dates now asks for a rebuild when the change touches live or imported matches.
- **Fixed:** Stat rebuilds, cancels, deletes and demo imports over the same players no longer fail when they happen at the same time.

### Players & Teams
- **Improved:** Imported matches of every type now name the team the full lineup plays for, in match headers and team records.
- **Fixed:** A very active player's Performance tab no longer leaves out recent matches.
- **Fixed:** The Team Hub's team pane fits its column, so Leave, End Call and Queue are no longer clipped.
- **Fixed:** The player picker no longer keeps retrying a search that fails.

### Career
- **Fixed:** Profile banners and backgrounds hold still on phones, and worn page backgrounds are not drawn there, which stops blank areas and flickering. Locker previews still show each background.

### Notifications
- **New:** The bell has a Setup section for getting started steps and an Updates section that folds update notices into one line.
- **Improved:** The bell and the app icon badge count all notices about one match once, instead of once per notice.
- **Fixed:** The prompt to join team voice now goes away when its match ends or is deleted.
- **Fixed:** The chat sound stays silent while you are playing or coaching a live match.

### Moderation
- **Improved:** The Admin tab counts open reports, and Reports opens on the first tab with something waiting. Tabs with waiting reports show a count.

### Game servers
- **New:** Practice servers have their own switch in a node's options and work with matchmaking off.
- **Improved:** The node switch is now called "Accepting new servers." Turning it off stops new matches and practice servers while running ones keep going, and the Managing Nodes guide is updated to match.
- **Improved:** Remove CS2 explains it needs Accepting new servers off, or both Matchmaking and Practice servers off.
- **Improved:** Node reboot and driver warnings now use the "Accepting new servers" name, so an acknowledged warning shows once more after the node updates.
- **Improved:** In-game ready tags, vote results, refusals, knife picks and command replies now reach each player in their own language on every server. Team names read correctly in Polish, Russian and Ukrainian.
- **Improved:** The server form checks a node-hosted server's connect and RCON passwords before saving and explains what characters they can use.
- **Fixed:** A node coming back online now clears its offline alerts. A node that sends an unreadable disk reading is still marked offline when it drops.

### General
- **New:** A Share button on match, tournament, team, event, league season and player profile pages opens your phone's share sheet or copies the link.
- **New:** Administrators can send match voice channels to another Discord server from Settings › Application › Discord, and send it back at any time.
- **Improved:** The Discord settings page lets the bot give itself access to a channel it can't post in, or shows the steps to fix it in Discord.
- **Improved:** Badge counts across the site stop at 99+.
- **Improved:** Opening and closing the left menu is smoother.

## Thursday, November 12, 2026

Today adds a Team app with team calls and party seats, a redesigned Coach playbook with Rokkan briefs, and a long list of tournament fixes.

### Matchmaking
- **New:** Parties now have seats: five by default, and the leader can open up to 10. A team can call itself into a Team party that its players join without an invite, and a full call keeps you in line until a seat opens.
- **Improved:** Who can join a party or draft room is now one list: Invite only, one of your teams, Friends, Open, and Private for draft rooms. The top bar lists party members like the friends list, with a crown after the leader's name.

### Matches
- **New:** A match with the same team on both lineups is tagged Intrasquad, with sides named A and B. It doesn't count as a win or loss on the team's record.
- **Improved:** Matches you are importing show their progress in the right hub's Matches app (Finding match, Demo found, Parsing demo), with a count on its icon. This replaces the badge in the left menu corner.
- **Improved:** A lineup shows the roster photos of the team its full lineup plays for, even when no team was picked.
- **Fixed:** When a restarted server replays its map, the earlier rounds and kills no longer stay counted.
- **Fixed:** The Round Restart Delay set in a match's options now takes effect.
- **Fixed:** Players left dead in warmup after a team change are now respawned.
- **Fixed:** A restore refused for a missing backup now names the round the restore would start, as the match page does.
- **Fixed:** Coaches no longer receive spectator or GOTV access for matches they coach, the same as the match's players.

### Tournaments
- **Improved:** Reset to Setup now asks first and names the tournament. When a free agent draft made teams, the dialog says how many will be taken apart and that their players go back to the free agent list.
- **Fixed:** A grand final now plays at the stage's grand final best-of, with the winner bracket's map advantage, even when fewer teams registered. The bracket card and the league season playoffs label it correctly.
- **Fixed:** Setting a map winner in a grand final now counts the winner-bracket team's map advantage.
- **Fixed:** A single-elimination third-place decider now plays at the stage's decider best-of instead of the final's. The "3rd Place Decider" label also shows when fewer teams registered.
- **Fixed:** Lineups of matches placed by a tournament bracket can no longer be swapped.
- **Fixed:** Opening registration on an invite-only tournament no longer sends a signup notice to every player.
- **Fixed:** Saving tournament options is now all or nothing, so a refused save no longer leaves partial changes or an unused custom map pool behind. Turning on Auto Start now starts matches under the new rules.
- **Fixed:** After a tournament starts, the Teams tab label counts the teams the tab actually lists.
- **Fixed:** The tournament page no longer scrolls sideways on phones. This also fixes the date and time picker used when creating matches and tournaments.

### Leagues & Events
- **Fixed:** The Up next event card now says "starts tomorrow" instead of just "tomorrow".

### Utility
- **Fixed:** On phones, More ways to play on the Play page and in draft rooms no longer offers to start a practice server unless one is already running.

### Coach
- **New:** Coach is now an app in the right hub, where you can read your brief and reviews in place and switch between your own and your team's.
- **New:** The Coach hub's brief is now one card with Rokkan's note, what's working and what's costing you, a plan for your next match, and your utility over your last 10 reviewed matches. Rokkan writes a new brief once per newly reviewed match.
- **New:** A team's Coach tab shows a card for each problem habit, with how often it happened, who it was found on, where it happened, and what to do instead. Each card adds Rokkan's team-level why, fix and practice tip, and Watch it opens the review at that round.
- **Improved:** The team playbook is redesigned. It reads the last 10, 20 or 50 matches on a map, lists recurring plays first by win rate, and shows each play's utility as a numbered timeline pinned where it lands.
- **Improved:** The playbook opens from a map rail beside the habit cards, and it now has its own address, so links open straight onto a map and Back closes it. Night versions of a map count with the map.
- **Fixed:** Coach review and scouting panes now fit on screen when a system alert banner is showing.

### Demos & Replays
- **Improved:** Switching match or round in the 2D replay no longer freezes the page, and players fade across instead of popping. In the playbook, switching to another match on the same map keeps the replay loaded, and going back to one of the last two matches is instant.
- **Improved:** On replays in the playbook, coach reviews and scouting, scrolling or swiping up and down over the whole map now scrolls the page. When zoomed in, scrolling down zooms back out first, and pinching still zooms.
- **Fixed:** The replay no longer flickers when a panel above it opens or closes.
- **Fixed:** Shots now record the ammo in the magazine before the shot, including a magazine's last bullet, so ammo stats no longer come up one short per reload. Demos parsed earlier keep their old values until they are reparsed.

### Streams & Highlights
- **Improved:** The stream HUD now recognizes workshop maps to set each team's side. In a grand final, its series score includes the winner-bracket team's map advantage.
- **Fixed:** Renders and streams no longer hang at launch after Steam's latest client update.

### Stats & Leaderboards
- **New:** The leaderboard says how many placement matches it takes to be ranked.
- **Improved:** The leaderboard's Season Awards are marked Projected and say when the awards will be given out.
- **Improved:** Community points for This Week now show what the week gained or lost, starting from 0. All Time still shows the total.
- **Improved:** Sortable stat headers can now be reached with Tab and sorted with Enter or Space, and screen readers announce the sorted column. The Stats Guide also reads better with screen readers.
- **Fixed:** Leaving a match now always costs at least as much ELO as losing it.
- **Fixed:** Season Gold, Silver and Bronze, and their projected standings, now rank Competitive ratings only.
- **Fixed:** Shortening a season now removes matches past its new end from that season's stats, so they aren't counted in two seasons.
- **Fixed:** On community stats, rounds, MVPs and bomb defuses now count only when another human player is on the other side.

### Players & Teams
- **New:** A Team app at the top of the right hub shows your team's roster with live status, team chat and a party you can call the team into. Teammates use the same rows as the friends list, and unread team messages badge the Team icon.
- **New:** Players can choose whether the site shows their avatar or their roster image, in Settings › My Account and in Edit Player. Players who already uploaded a roster image keep seeing it.
- **Improved:** The team page roster is now a team photo with a side column of Roster, League and Roster History tabs beside the last 20 matches. The banner shows the team's league, and match rows show the faces of pickup opponents.
- **Improved:** Roster History uses the same player display as the starting lineup, grouped into Starters, Substitutes, Bench, Coaches and Former. The roster now lists members alphabetically.
- **Fixed:** Your pinned team now comes first under Your Teams.
- **Fixed:** The Team Editor's save bar stays inside the drawer, so Save is no longer cut off.
- **Fixed:** On phones, the Edit Player sheet no longer scrolls sideways, and long country names are shortened instead of widening the form.

### Game servers
- **Improved:** Connect and RCON passwords for node-hosted servers may only use letters, digits and a few safe symbols, so the server always gets exactly the password you set. Existing passwords keep working until they are changed.
- **Fixed:** The node inspector's Region, CS2 version and Plugin pickers are now visible and usable on phones.
- **Fixed:** Settings › Plugins no longer flips back to the previous tab after you pick another one.

### Self-hosting
- **New:** A system alert can now turn on Maintenance mode. While it is on, everyone except administrators sees a maintenance page with the alert's title and message. The panel opens again by itself when the alert ends or the switch is turned off.
- **New:** The branding page adds a page title, meta description and share image, used for the browser tab and link previews.
- **Improved:** Player-facing text now uses your panel's brand name, and leaderboard empty states say "registered account".

### General
- **New:** A Support app in the right hub lets anyone open a ticket and talk with staff, and staff answer tickets from a queue. Each player can open up to three tickets per 24 hours.
- **Improved:** Linking Discord now checks your Steam connection on Discord and marks your account verified when they match. The Discord card in Settings shows your link and Steam check status.
- **Improved:** Loading placeholders appear only when a load takes a moment, so quick loads no longer flash them.
- **Improved:** The welcome page's globe now counts every panel on the 5Stack network, and the page title reads "Find Your Five".
- **Fixed:** News posts that fail to reach Discord are now retried.

Older days are in [entries](entries).
