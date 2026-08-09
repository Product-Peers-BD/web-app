# Landing Page: Single Product

> Part of `docs/requirements/landing-pages/`. Business logic and the base page spec already live in `products-requirements.md` → Landing Pages → Product Detail page. This doc formalizes that as its own indexed page; no new decisions beyond layout ordering.

## Page contents (in display order)

1. **Banner**, Product Name, Industry badge(s), Stage badge.
2. **Description** — full rich-text body.
3. **Gallery** (if any).
4. **Product URL / Link** (if set) — external "Visit Product" CTA.
5. **Problem it solves** (if set).
6. **Company/Team section** — company/team name, accepted team members with designation/role (invited-but-not-yet-accepted members never appear here).
7. **Related Case Studies** — creator-curated subset of Case Studies that reference this Product (opt-in, not automatic — per `products-requirements.md`).
8. **Engagement bar**: Like, Comment count, Share, View count. **No Bookmark** (confirmed not supported for Products).
9. **Comments** — via Global Commenting.

## Cross-feature dependencies

- **Products** (`products-requirements.md`) — full source of truth.
- **Case Studies** (`articles-and-case-studies-requirements.md`) — Related Case Studies source.
- **Public Profiles** (`public-profiles.md`) — team member links.
- **Global Commenting** (`global-commenting-requirements.md`, package `packages/comments`).

## Deferred / explicitly out of scope for this phase

- Submit a query to the product owner (deferred platform-wide, per source doc).
- Product reviews/ratings (deferred platform-wide, per source doc).
