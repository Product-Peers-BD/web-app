# Landing Page: Single Case Study Details

> Part of `docs/requirements/landing-pages/`. Business logic lives in `articles-and-case-studies-requirements.md` — this doc covers page layout/UX.

## Page contents (in display order)

1. **Cover image**, Title, Category badge.
2. **Author** — photo, name, Mentor badge indicator if held, Follow button — links to their public profile.
3. **Meta row** — Read time, View count, Published date.
4. **Content** — full rich-text body (free-form; no enforced Problem/Solution/Result structure).
5. **Structured metadata block** (sidebar or below content): Client/Company Name, Industry badge(s), Case Study Problem (if set), Tools/Stack (if set), External Link (if set).
6. **Associated Products** — cards linking to each Product's detail page (if any).
7. **Associated Contests** — cards linking to each Contest's detail page (if any).
8. **Engagement bar**: Like, Bookmark, Comment count, Share.
9. **Comments** — via Global Commenting, directly on the content (not a Thread-system discussion).
10. **Related Case Studies** — up to 4 cards, via a tiered query (no ML/scoring engine): **Tier 1** — Case Studies sharing at least one Associated Product/Contest with this one (strongest signal — genuinely about the same thing); **Tier 2** — same Category; **Tier 3** — shares at least one Industry tag; **Tier 4 (fallback)** — most recent Case Studies platform-wide, to fill any remaining slots. Move through tiers in order until 4 cards are filled, deduplicating, breaking ties within a tier by recency.

## Cross-feature dependencies

- **Articles & Case Studies** (`articles-and-case-studies-requirements.md`) — full source of truth.
- **Products** / **Contests** — Associated Products/Contests links.
- **Public Profiles** (`public-profiles.md`) — Author link, Follow button.
- **Global Commenting** (`global-commenting-requirements.md`, package `packages/comments`).

## Deferred / explicitly out of scope for this phase

- Curated Content display/ordering (n/a — Curated is Articles-only, not Case Studies).
