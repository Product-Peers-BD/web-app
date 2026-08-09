# Landing Page: Articles

> Part of `docs/requirements/landing-pages/`. Business logic lives in `articles-and-case-studies-requirements.md` — this doc covers page layout/UX, including the **Curated Picks** display/ordering decisions that doc explicitly deferred here.

## Curated Picks section (resolving the deferred item)

- A dedicated horizontal section/carousel at the top of the page, above the main filterable grid.
- **Source**: Articles where `is_curated = true`.
- **Count**: up to 6 shown in the carousel.
- **Ordering**: most-recently-published first — no drag-and-drop. Admin has no way to hand-pick the order this phase, only the curated flag itself.
- Curated articles also still appear in the main grid below (with their badge/icon) — the Curated Picks section is a spotlight, not a removal from the general list.

## Main grid

### Filters

- Category (Article's own Category list — separate from Case Study Categories).
- Curated (yes/no toggle).
- Author — **multi-select** (can pick one or multiple authors).

### Sort

- Latest (most-recently-published)
- Most Popular (view count)

### Search

- Free-text search on **Title only** — same convention as Events/Contests/Case Studies.

### Card fields

- Cover image, Title, Category badge, author name/photo, estimated read time, Curated badge/icon if applicable, "Read Article" CTA.

## Personalization

- None — same list for Guest and Member.

## Cross-feature dependencies

- **Articles & Case Studies** (`articles-and-case-studies-requirements.md`) — full source of truth, including the `is_curated` filter/flag.
- Links into **Single Article Details** page for each card.

## Deferred / explicitly out of scope for this phase

- Manual ordering among curated articles — still deferred; recency-only ordering is what's built.
