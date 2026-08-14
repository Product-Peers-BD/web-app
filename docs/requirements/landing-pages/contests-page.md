# Landing Page: Contests

> Part of `docs/requirements/landing-pages/`. Business logic lives in `contests-requirements.md` — this doc covers page layout/UX.

## Overview

Public listing of Published contests. `contests-requirements.md` doesn't define public listing filters/sort the way `events-requirements.md` does, so this structure is modeled after the Events listing for consistency — mirroring Events' pattern exactly (status filter + badge, not tabs; see `events-page.md`).

## Status filter (not tabs)

- **No tabs.** Default view shows **all contests together**, ordered: currently **Running** first (registration open or submission window active), then **Upcoming** (soonest-first), then **Past** (most-recent-result-first) — same "outward from now" combined ordering as Events.
- **Status filter**: Upcoming / Running / Past — one of the filter controls, not a page-level tab.
- **Card badge**: each card shows a status badge (Upcoming / Running / Past) for at-a-glance clarity in the combined default view.

## Filters

- Status (Upcoming / Running / Past)
- Format (Online/Physical/Hybrid)
- Free vs Paid

## Sort

- Title (A–Z / Z–A)
- Date (newest→oldest / oldest→newest)
- Default (no sort selected): the combined Running → Upcoming → Past ordering above.

## Card fields

- **Upcoming/Running**: Banner, Title, Status badge, dates, Format, "Register"/"View Details" CTA (same open/closed/sold-out logic as Events).
- **Past (results published)**: Banner, Title, Status badge, Winning team name + photo/logo, winner tier label, "View Results" CTA — only if that contest's public winner-visibility settings allow it (per `contests-requirements.md`); otherwise just "View Details".

## Search

- Free-text search on **Title only** — not Description, same as Events.

## Personalization

- None — same list for Guest and Member.

## Cross-feature dependencies

- **Contests** (`contests-requirements.md`) — full source of truth.
- Links into **Single Contest Details** page for each card.

## Deferred / explicitly out of scope for this phase

- Leaderboard (already deferred platform-wide).
