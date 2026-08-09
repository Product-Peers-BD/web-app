# Landing Page: Single Article Details

> Part of `docs/requirements/landing-pages/`. Business logic lives in `articles-and-case-studies-requirements.md` — this doc covers page layout/UX.

## Page contents (in display order)

1. **Cover image**, Title, Category badge, Curated badge/icon (if applicable).
2. **Author** — photo, name, Mentor badge indicator if held, Follow button — links to their public profile.
3. **Meta row** — Read time, View count, Published date.
4. **Content** — full rich-text body.
5. **Engagement bar**: Like, Bookmark, Comment count, Share.
6. **Comments** — via Global Commenting, directly on the content.
7. **Related Articles** — up to 3–4 cards, via a tiered query (no ML/scoring engine): **Tier 1** — same Category AND same author; **Tier 2** — same Category (different author); **Tier 3** — same author (different Category); **Tier 4 (fallback)** — most recent Articles platform-wide, to fill any remaining slots. Move through tiers in order until filled, deduplicating, breaking ties within a tier by recency.

## Cross-feature dependencies

- **Articles & Case Studies** (`articles-and-case-studies-requirements.md`) — full source of truth.
- **Public Profiles** (`public-profiles.md`) — Author link, Follow button.
- **Global Commenting** (`global-commenting-requirements.md`, package `packages/comments`).

## Deferred / explicitly out of scope for this phase

- Nothing currently deferred — the Related Articles algorithm is now specced above.
