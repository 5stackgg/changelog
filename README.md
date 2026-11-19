# 5Stack changelog

What changed in 5Stack each day: new features, improvements and fixes across the web app, game servers and self-hosted panels, grouped by the section of 5Stack they touch. Each entry is written automatically from that day's merged changes (UTC).

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

## Wednesday, November 11, 2026

Today adds team roster photos in game, teams in search and new Rokkan tools for administrators, along with a round of fixes across the site.

### Matchmaking
- **Fixed:** Every member of a party must now meet the queue's minimum role before the party can queue.

### Matches
- **New:** When every player in a lineup plays for the same team, the match takes on that team's name, logo and history. Players then show their team roster photo in game, on the match page, on the stream HUD and on cameras.
- **New:** Draft lineups without a team are named "Team" plus their captain's name, and the name follows a replacement captain. A name set on the match page is never overwritten.
- **Fixed:** The in-game scoreboard shows the real rating at stake instead of -5000.
- **Fixed:** Players in a live match no longer get an error when they open other pages, such as Highlights.

### Coach
- **New:** A team's Coach tab and playbook now include matches the team played off the platform, such as Valve Premier and FACEIT. These matches still stay out of the team's public record.
- **New:** Administrators can have Rokkan review a finished match again from the match's admin menu. Players keep the current review until the new one is ready, and the match page shows when a re-review is in progress or has failed.
- **New:** Admin Overview has an AI Spend section with daily charts and totals. You can filter it by feature, match source and model, and each match review's cost is now recorded.
- **New:** Administrators get an alert when Rokkan's match reviews keep failing. A review Rokkan could not start now says so instead of showing a generic error.
- **Fixed:** A team's Coach tab lists the team's reviews again.
- **Fixed:** The team playbook counts bomb plants in imported matches instead of showing zero.

### Demos & Replays
- **Fixed:** Once the bomb is planted, the replay clock shows the red C4 icon and turns red, matching the HUD.

### Streams & Highlights
- **Fixed:** Creating player highlights while a batch is still rendering no longer throws that work away. You now see a message instead.

### Stats & Leaderboards
- **Improved:** The stats source toggle, match rows and the draft room's rank source show your panel's own name instead of "5Stack".
- **Fixed:** The ELO hover card closes as soon as the pointer leaves the number and no longer blocks clicks on the rows beneath it.

### Players & Teams
- **New:** The Ctrl+K search finds teams by name or tag and lists them above players.
- **New:** The profile banner shows your pinned team's logo. Roster members and owners can pin a team from its page with Show on Your Profile.
- **Improved:** Captains are marked with a C badge across rosters, match lineups and drafts. The Friend status is now a quieter grey.
- **Fixed:** The owner picker in Edit Team shows the chosen owner as a proper player row.

### Game servers
- **Improved:** With CPU pinning on and no value saved, each game server now gets 1 CPU instead of 2. The CPU pinning guide is updated to match.
- **Improved:** The dedicated servers list opens sorted by name, so servers no longer jump around when switched on or off.

### Self-hosting
- **New:** A Supported GPUs guide lists CS2 frame rates at 1080p for NVIDIA and AMD cards and recommends High or Medium settings for each.
- **Fixed:** Updating a panel no longer overwrites passwords and other secrets it has already stored.

### General
- **New:** Staff can mark players as verified, and every minimum-role setting gains a "Verified players only" option. Players who could take part before still can.
- **Improved:** On phones, tabs are a single swipeable row that sticks under the top bar and centres the active tab.
- **Improved:** The welcome page globe and panel count include every panel that has ever reported.
- **Fixed:** Link preview cards show an uploaded logo whole instead of cropping it.
- **Fixed:** Settings pages scroll all the way to the bottom while a system alert banner is showing.
- **Fixed:** On phones, the slide-out menu now starts below the status bar.

## Tuesday, November 10, 2026

Rokkan now sends weekly progress reports, answers questions about your matches and builds team playbooks, leaderboards split by side, and short tournament teams can recruit players.

### Matchmaking
- **New:** Draft rooms have their own page in the left nav, between Queue and Watch, and the Play page is now called Queue. On a wide screen, a side pane shows Host a room until you pick a room, then that room's players and settings.
- **Fixed:** The empty Draft Rooms page no longer shows a tall intro beside a much shorter Host a room panel.

### Matches
- **New:** The match Roles card shows each player's role on the T side and the CT side, with a short reason when you tap it and a marker where Rokkan chose the role. A player's Preferred roles on their profile are also split by side.
- **Improved:** The Trades table now has four columns: Trades Made, In Trade Range, Traded and Net Trade. When a map is selected, a match row's expanded panel shows only that map's stats.
- **Improved:** The Economy tab's buy matchups show kills per round for each player. Each value is coloured against what that player usually does.
- **Improved:** The match organizer role runs matches that are not part of a tournament. On tournament matches it has moderator access, and the tournament's organizers, tournament organizers and administrators run the match.
- **Improved:** Lineup captains can only set their lineup to a team they manage. They can no longer change the team once the match is live, or on tournament matches.
- **Fixed:** Practice sessions no longer appear in live and upcoming match lists on the welcome page, the Watch page and the broadcast deck, or in live match counts.

### Tournaments
- **New:** In tournaments open to both teams and free agents, a team with an open seat can turn on Looking For Players, and players can ask to join it from a new section above the free agent pool. Recruiters accept or decline from My Team or the notification bell, and the player is told when they are accepted.

### Utility
- **Improved:** The Practice Servers page is now for match organizers and above. A practice session is run and seen only by its host and administrators.
- **Fixed:** The utility plugin on dedicated practice servers can now connect to the panel.
- **Fixed:** The re-render preview only appears on lineups that can actually be rendered.

### Coach
- **New:** Rokkan writes a weekly progress report every Monday for players with at least two reviewed matches that week, and sends a "Your Week With Rokkan" notification. Reports appear in the Coach inbox and show which habits got better, which are still happening, and what to practise.
- **New:** Ask Rokkan lets you ask questions about a match Rokkan reviewed for you, with suggested questions and a daily limit shown. Times in its answers jump the replay to that moment. On your own panel, Ask Rokkan and the weekly report now run whenever the match coach is on, with no separate settings.
- **New:** Your section of a review opens the To Fix tab with "From Your Last Reviews", which shows what is fixed, better or back since your earlier reviews. You can mark each item as Helpful, Mostly or Not Right, with a reason and an optional note.
- **New:** The team's Coach tab has a Playbook for the current roster. It lists the plays the team ran on each map over its last eight matches there and how they turned out. Picking a play shows its rounds in the 2D replay, alongside the lineups the team threw in it.
- **Improved:** Each habit on the Habits page shows which recent matches it was seen in. It also says whether a problem is Stuck, Improving, Gone or New, and whether a strength is Steady or Improving.
- **Improved:** Administrators can have Rokkan review a finished match again. The current review stays available until the new one is ready, and players are not notified.

### Demos & Replays
- **Fixed:** Grenades a player still held when they died are counted correctly. A grenade thrown just before death is no longer missed, and a grenade picked up after a throw is no longer cancelled out.

### Streams & Highlights
- **Fixed:** Multi-kill clips with a player chip and no outro no longer freeze after the first kill.
- **Fixed:** Older clips play in full again instead of being cut short by an assumed three-second outro.

### Stats & Leaderboards
- **New:** The Rating, ADR, KPR, KAST and UDR leaderboards can count only T side or CT side rounds. You can filter them by side roles such as Entry, Lurker, Anchor, Rotator and AWP. Exclude Tournaments has moved into a Filters menu.
- **Improved:** Season stat tiles on the leaderboard no longer show a Built-in label.
- **Fixed:** Per-side stats now count every round a player was in, not only rounds with a kill or death.
- **Fixed:** Changing a competitive season's dates or deleting a season now rates the affected matches again correctly.

### Players & Teams
- **New:** The team page has a new header that shows the next match and the team's open scrim hours. The Overview tab lists the team's matches, activity moves to its own filterable tab, and the veto simulator plays out step by step on active-pool maps.
- **New:** You can choose which team your profile banner shows by pinning it from the Teams tab on your profile.
- **Improved:** The Teams tab on a profile marks each join and leave with the team's emblem and opens with a row of team cards, current teams first.
- **Improved:** Your Steam status is shown to another player only once you have accepted their friend request.
- **Fixed:** On phones, the profile banner gives the team its own full-width bar so its name is no longer squeezed.
- **Fixed:** The player page no longer flashes a "no match history" message while match history is still loading.

### Career
- **Improved:** The Career button in the header now shows only your level badge and Stacks, so it takes less room.

### Notifications
- **New:** Alerts now have levels. Critical alerts get their own section at the top of the bell, and staff can choose which levels send a push and whether critical alerts ring during quiet hours. Administrators can choose which levels are posted to the Discord support channel.
- **Improved:** Panel updates are grouped into one bell row that shows the release the panel left, the one it runs now, and how many updates that was.

### Game servers
- **Fixed:** Offline matches now use ports from the node's game port range, so players can reach them when the firewall is on.

### Self-hosting
- **New:** The Internet exposure page lists only servers that expose something and shows each server's firewall (ufw) state. It also offers Turn On Firewall for servers where the firewall is off, with live progress for each server. The header to-dos flag servers with ports to close, and a note explains what results mean for servers behind a router.
- **New:** An Audit Log page shows which administrator changed settings, regions, nodes, dedicated servers, map pools, game modes, plugins, sanctions and roles. Changes the panel makes on its own appear as System, and entries are kept for a year.
- **New:** A panel behind your own reverse proxy can list the proxy's addresses during install, so Traefik keeps the real visitor address it passes on. Existing installs are unchanged.
- **Improved:** Application settings open on Panel Updates and start with a My Panel group for health, security and server settings. Game modes now sit under Match setup, Panel plugins and the Plugin Directory share one Plugins page, and Diagnostics is part of Telemetry.
- **Improved:** Starting a panel or 5Stack service update no longer shows a duplicate "started" toast.
- **Improved:** Editing a saved panel plugin fills in its address, so Detect works in one click.
- **Fixed:** Panel updates and maintenance reuse one banner each instead of filling the Alerts page with old entries. Banners left behind by earlier runs are removed.

### General
- **New:** Numbers across the site, including scores, stats, counts and leaderboards, roll to their new value instead of snapping when they change.
- **Improved:** Pages showing animated cosmetics, match pages with many numbers, match clutches and the season standings are faster.
- **Improved:** Opening the changelog marks it as read without a button.
- **Improved:** The welcome page now calls the Inventory app by its new name, Loadout.
- **Fixed:** An alert you dismissed shows again when it is put back up later.
- **Fixed:** Uploaded logos show whole on the landing page header, footer and nav banner, and the landing page name fits cleanly on phones.

## Monday, November 9, 2026

Today brings an Internet exposure page and simpler updates for self-hosted panels, a new player profile, off-season leaderboards, more accurate stats, and a smoother event Media tab and highlights on phones.

### Matches
- **Improved:** When the map column has nothing but the map cards, it folds away during the veto so the veto board gets the full width.
- **Fixed:** The match server picker no longer offers switched-off servers to anyone but admins, and two matches can no longer reserve the same free server.

### Leagues & Events
- **New:** Event media now accepts WebM, MOV and .m4v videos as well as MP4.
- **Improved:** The event Media tab now puts the media first, and uploaders get an Add Media button that opens the file picker and link field (a bottom sheet on phones). You can drop files anywhere on the tab, and a link pasted anywhere fills the link field and waits for you to press Add.
- **Fixed:** Media tagging now offers everyone attached to the event, including team and tournament rosters and organizers, even before any matches are played. Team chips in Membership show the team's avatar.
- **Fixed:** A large MP4 saved with a .mov name, or the other way round, is now kept instead of refused after uploading.

### Utility
- **Fixed:** A practice server without a label now shows as "Practice server" in the picker.

### Coach
- **New:** Rokkan's match reviews now look at each death, every grenade thrown and the round's money, so it can explain how a round was lost.
- **New:** Review pages have a copy-link button beside Open Match, following the same rules as on the match page.
- **Fixed:** Newer kinds of Rokkan findings show proper translated labels instead of raw tag names.

### Streams & Highlights
- **New:** After you watch a clip's outro once, later clips stop where the action ends, including older clips. Downloads still include the outro.
- **New:** A Mark Seen button on the bell's Clips of you strip marks every unseen clip from the last 30 days as seen.
- **Improved:** Highlights work better on phones. Clips fill the screen when the phone is sideways, with an Up next panel that slides out, and one tap opens a clip tile. Opening a clip grows it out of its tile, and unmuting carries over to the next clip.
- **Fixed:** Demos that were cut short when a server stopped while recording now load and play.

### Stats & Leaderboards
- **New:** Matches between competitive seasons keep your ELO from your latest rating and appear on off-season boards. Between seasons, the boards open on the last season's final standings.
- **New:** Organizers can edit a community season's description, start day and end day, and the description of a running or ended competitive season.
- **Improved:** Stat descriptions now explain what each stat measures, and the FAQ says which stats come from demos. These are in English for now.
- **Fixed:** KAST, rounds played, clutches, multi-kills, opening-duel trades, accuracy and head-to-head damage now count only what actually happened, such as leaving out team kills and rounds a player wasn't in.
- **Fixed:** Counter-strafing, crosshair placement, reaction time, first bullet, trades, spot conversion and utility on death are measured more accurately.
- **Fixed:** The Sniper role and per-weapon stats now come from the guns each player actually carried and fired, not only from their kills.

### Players & Teams
- **New:** Player profiles open on a full-width banner, with ELO and the last 8 matches side by side beneath it. The full match list moves to a new Matches tab.
- **Improved:** Syncing Steam friends is limited to once every five minutes per player.
- **Improved:** Refreshing a FACEIT rank now requires being signed in and works only for players on 5Stack.

### Career
- **Improved:** The header's Career button now says Career and shows your level and Stacks, with an XP bar along its bottom edge and XP to go in its tooltip.

### Self-hosting
- **New:** Settings › Security › Internet exposure lists each server's ports and what the internet can reach on them. You can check all nodes again or copy the ports to block for your provider's firewall, and the header warns when ports are open.
- **New:** Panel updates lists services still running an older build than the installed release, and its Update Now restarts them, even while a newer release is offered.
- **Improved:** The update popover now shows only Update available, Updating or Update failed. One Update Now updates plugins along with the panel.
- **Improved:** Demo streams rendered on AMD GPUs now go out at 1440p, as on NVIDIA, when the GPU's encoder supports it.
- **Improved:** The requirements and FAQ now list only the ports that need to be open to the internet (80, 443, UDP 8189, the game server ports, and TURN when it's on) and say port 8585 stays on your LAN or between 5Stack servers. The panel no longer needs or serves the search and file storage console subdomains.
- **Fixed:** Running a panel script or changing settings is no longer announced as a finished panel update, and a failed one is titled for what it was.
- **Fixed:** A 1440p render sent out at 1080p is now scaled down instead of cropped to its top-left corner, which affected AMD GPUs using the CPU encoder.

### General
- **Improved:** The Locker, the friends list and the header's Stacks balance load with much less work. A friend's new frame or nameplate now shows within 10 minutes or on your next page load.
- **Improved:** The 5Stack browser extension has the new 5Stack brand icons.
- **Fixed:** The player card in the navigation corner no longer changes size when your frame loads, so the links above it stay put.

## Sunday, November 8, 2026

Finished Rokkan reviews can now be read and shared by anyone, the Locker gets a loadout view and a phone layout, and notifications are less noisy.

### Leagues & Events
- **Improved:** Event media and banners now have one 100MB limit for every file type (PNG, JPEG, WebP, GIF, MP4 and MP3), replacing the separate limits per type. The upload hints and the events guide reflect the new limit.

### Coach
- **New:** Anyone can read a finished match's Rokkan review, signed in or not. The match page shows "Rokkan reviewed this match" with Read Review and a copy-link button (the share sheet on phones), and the review page lets you switch between each team's and map's review.
- **New:** A tournament match's Rokkan review stays private to its team until the tournament ends, so the next opponent can't read it first. Its share link appears once the tournament is over.

### Career
- **New:** The Locker's outfit list is now a loadout of six slot tiles that show what you're wearing, what you're trying on and its price. You can put items back or take them off, and picking a slot switches the grid.
- **Improved:** On phones, the Locker replaces its left column with a bottom dock of slot icons and Apply Look, and shows the battle pass as one row of milestones with arrows.

### Notifications
- **New:** Wearing the 5stack.gg clan tag now keeps one notification with your running Stacks total, which updates quietly after each paid match. If a match shows you without the tag, the notification returns as an unread reminder to wear it again.
- **Improved:** New-article notifications now lead with the article's title and show its full teaser underneath. Other pushes are shortened at a whole word instead of mid-word.
- **Improved:** The bell and the push badge count a played match once, even when it leaves stats, a Rokkan review, an import notice, tag thanks and unwatched highlights. Live and urgent match alerts still count on their own.
- **Improved:** Opening your section of a coach review marks that review's notification as read in the bell.

### General
- **New:** A newly created API key is hidden until you press the eye button to reveal it. Copy still copies the full key.
- **Improved:** The player navigation is a simpler list with full-width rows and a marker that follows the current page. The Updates count now matches unread news notices.
- **Fixed:** The newest post's card and the post page header show the cover at full height beside the text, without blurred bars.

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

Older days are in [entries](entries).
