# Maintaining

`.github/workflows/changelog.yml` runs at 00:15 UTC. It summarizes the previous UTC day's merged pull requests into `entries/<year>/<date>.md` and rebuilds the README from the latest 14 days. Days with nothing user-facing get no entry.

To redo a day, run the workflow by hand with a `date`. It overwrites that day's entry.

## What keeps private details out

1. Only the repositories in `AREAS` in `scripts/changelog.mjs` are read, and only pull requests merged into their default branch. Bots are skipped, as is any pull request labeled `no-changelog` or `internal`.
2. Before Claude sees a pull request, `scripts/redact.mjs` strips links, emails, IPs, domains, issue references, code blocks, tables and code names, and redacts the blocklist.
3. The prompt says what never to write: code names, internal services, customers, and how a security problem worked.
4. Every output line is checked again. A line with a link, email, IP, domain, reference, handle, code name, token-like string or blocklisted term is deleted. The log shows how many lines were deleted and why, never their text, because the logs of this repository are public.

## Secrets

- `GH_READ_TOKEN`: a fine-grained token owned by 5stackgg with read-only Pull requests access to the repositories in `AREAS`.
- `ANTHROPIC_API_KEY`
- `CHANGELOG_BLOCKLIST` (optional): customer, panel and community names or domains, one per line or comma-separated. It is a secret so the list itself stays private.

## Trying a day locally

```sh
GH_READ_TOKEN=$(gh auth token) node scripts/changelog.mjs --date 2026-10-29 --dry-run
```
