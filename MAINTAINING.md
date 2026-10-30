# Maintaining

`.github/workflows/changelog.yml` runs at 00:15 UTC. It summarizes the previous UTC day's merged pull requests into `entries/<year>/<date>.md` and rebuilds the README from the latest 14 days. Days with nothing user-facing get no entry.

`feed/` is the same entries as JSON for the web app's changelog page: one file per month (`feed/2026-10.json`, newest day first) and `feed/index.json` listing the months, a hash of each month file, and every area. Panels cache a month under its hash, so a redone day reaches them within about 15 minutes. Both are rebuilt from `entries/` on every run, so only the month that changed shows a diff.

Editing or deleting an entry by hand is fine: `.github/workflows/rebuild.yml` rebuilds `feed/` and the README on any push that touches `entries/`. `npm run rebuild` does the same locally.

To redo a day, run the workflow by hand with a `date`. It overwrites that day's entry.

## What keeps private details out

1. Only the repositories in `AREAS` in `scripts/changelog.mjs` are read, and only pull requests merged into main. Bots are skipped, as is any pull request labeled `no-changelog` or `internal`.
2. Before Claude sees a pull request, `scripts/redact.mjs` strips links, emails, IPs, domains, issue references, code blocks, tables and code names, and redacts the blocklist.
3. The prompt says what never to write: code names, internal services, customers, and how a security problem worked.
4. Every output line is checked again. A line with a link, email, IP, domain, reference, handle, code name, token-like string or blocklisted term is deleted. The log shows how many lines were deleted and why, never their text, because the logs of this repository are public.
5. Lines outside the entry format (the three headings and `- **Area:** text` bullets) are deleted too, so the README and the feed always show the same entries.

## Secrets

- `GH_READ_TOKEN`: a fine-grained token owned by 5stackgg with read-only Pull requests access to the repositories in `AREAS`.
- `ANTHROPIC_API_KEY`
- `CHANGELOG_BLOCKLIST` (optional): customer, panel and community names or domains, one per line or comma-separated. It is a secret so the list itself stays private.

## Trying a day locally

```sh
GH_READ_TOKEN=$(gh auth token) node scripts/changelog.mjs --date 2026-10-29 --dry-run
```
