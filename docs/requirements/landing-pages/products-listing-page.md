# Landing Page: Products Listing

> Part of `docs/requirements/landing-pages/`. Business logic and the base page spec already live in `products-requirements.md` → Landing Pages → Product Listing page. This doc formalizes that as its own indexed page and adds the remaining layout decisions.

## Filters (per `products-requirements.md`)

- Industry (multi-select)
- Stage (`IDEA` / `MVP` / `BETA` / `LIVE` / `PAUSED` / `SUNSET` — full enum, see `products-requirements.md`, updated)
- Tag (multi-select)

## Sort

- Latest (most-recently-published), Oldest, Most Popular (view count).

## Search

- Free-text search on **Product Name only** — same "name/title field only" convention as other listing pages.

## Card fields (per `products-requirements.md`)

- Product thumbnail, Product Name, Industry badge, **Stage badge** — an addition to the source doc's listed card fields, useful at-a-glance context.

## Personalization

- None — same list for Guest and Member.

## Cross-feature dependencies

- **Products** (`products-requirements.md`) — full source of truth.
- Links into **Single Product Page** for each card.

## Deferred / explicitly out of scope for this phase

- None beyond what's already deferred in the source doc.
