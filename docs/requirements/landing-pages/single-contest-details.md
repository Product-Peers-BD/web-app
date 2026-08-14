# Landing Page: Single Contest Details

> Part of `docs/requirements/landing-pages/`. Business logic lives in `contests-requirements.md` — this doc covers page layout/UX.

## Page contents (in display order)

1. **Banner**, Title.
2. **Judges** — cards (photo, name), linking to their public profiles, shown publicly, consistent with Event Speakers being public.
3. **Dates** — Contest Start/End, Result Publish Date (target, with note that actual publishing is manual).
4. **Description** — full rich-text body.
5. **Format / Venue** (if Physical/Hybrid).
6. **Registration panel** — same state machine as Single Event Details, except Contests always require registration (no `has_registration` toggle) — so the "no registration panel" state never applies here.
7. **Teams** — participating teams list (public, per `contests-requirements.md`): team name/logo, visible members (only those who've personally registered), Team Leader indicator.
8. **Winners** section — shown only after Admin publishes results: winner tier(s), team(s) per tier (ties supported), winning team's submission assets **only if** that toggle is enabled for the contest.
9. **Participant Ranking** — shown if that contest's ranking-visibility toggle is on (independent of the scores-visibility toggle).
10. **Videos**, **Image Gallery**, **FAQ**, **Sponsors** (grouped by Tier) — same patterns as Events.
11. **Discussions** — same thread/comment pattern as Events.
12. **Share**.

## Cross-feature dependencies

- **Contests** (`contests-requirements.md`) — full source of truth for teams, judging, winners, registration.
- **Public Profiles** (`public-profiles.md`) — Judge links, Team public profile links.
- **Sponsors** (`shared-features.md`).

## Deferred / explicitly out of scope for this phase

- Judge score breakdowns or per-judge comments on the public page — those stay internal to Admin/Judges per `contests-requirements.md`.
