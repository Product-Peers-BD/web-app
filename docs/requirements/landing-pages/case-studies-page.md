# Landing Page: Case Studies

> Part of `docs/requirements/landing-pages/`. Business logic lives in `articles-and-case-studies-requirements.md` — this doc covers page layout/UX.

## Overview

Public listing of Published Case Studies.

## Filters

- Category (Case Study's own Category list — separate from Article Categories, per the shared model doc).
- Industry (multi-select, shared autocomplete list).
- **Not filterable by Tools/Stack** — kept simple; Industry + Category cover the main discovery needs.

## Sort

- Latest (most-recently-published)
- Most Popular (view count)
- No "Curated" concept for Case Studies (per `articles-and-case-studies-requirements.md`), unlike Articles. No curated sort/filter here.

## Search

- Free-text search on **Title + Client/Company Name**, scoped to these two fields rather than full Content body (consistent with keeping search fast/precise, same reasoning as Title-only on Events/Contests, extended here since Client/Company Name is a key identifying field for Case Studies specifically).

## Card fields

- Cover image, Title, Client/Company Name, Industry badge(s), author name/photo, "Read Case Study" CTA.

## Personalization

- None — same list for Guest and Member.

## Cross-feature dependencies

- **Articles & Case Studies** (`articles-and-case-studies-requirements.md`) — full source of truth.
- Links into **Single Case Study Details** page for each card.

## Deferred / explicitly out of scope for this phase

- None beyond what's already deferred in the source doc.
