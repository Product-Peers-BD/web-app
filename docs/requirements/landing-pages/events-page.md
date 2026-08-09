# Landing Page: Events

> Part of `docs/requirements/landing-pages/`. Business logic (fields, filters, registration flow) lives in `events-requirements.md` — this doc covers page layout/UX for the public listing.

## Overview

Public listing of all Published events across all 4 Event Types.

## Status filter (not tabs)

- **No tabs.** Default view shows **all events together**, ordered: currently **Ongoing** first, then **Upcoming** (soonest-first), then **Past** (most-recent-first) — i.e. chronologically outward from "now" in both directions, upcoming/ongoing surfaced ahead of past.
- **Status filter** (one of the filter controls, not a page-level tab): Upcoming / Ongoing / Past — lets a visitor narrow to just one bucket if they want, but isn't the default browsing mode.
- **Status derivation**: `Ongoing` = current time is between Start and End date/time; `Upcoming` = Start is in the future; `Past` = End has passed. Computed at read time, same pattern as scheduled visibility elsewhere in the project (no stored status field, no background job).
- **Card badge**: each card shows a status badge (Upcoming / Ongoing / Past) so it's visually clear at a glance even in the combined default view.

## Filters (per `events-requirements.md` → Filtering & sorting, plus Status above)

- Status (Upcoming / Ongoing / Past)
- Event Type
- Date range
- Format (Online/Physical/Hybrid)
- Category (multi-select)
- Free vs Paid
- Tags (multi-select)
- Has-registration (yes/no)

## Sort

- Title (A–Z / Z–A)
- Date (newest→oldest / oldest→newest)
- Default (no sort selected): the combined Ongoing → Upcoming → Past ordering described above.

## Search

- Free-text search on **Title only** — not Description.

## Card fields

- Banner image, Title, Event Type badge, Category badge(s), **Status badge (Upcoming/Ongoing/Past)**, Start date/time, Format, primary CTA.
- CTA logic: "Register" if `has_registration` and registration is currently open; "View Details" otherwise (including Past events, sold-out events, or registration-not-yet-open events — those states are clarified on the single event page, not the card).

## Pagination

- **Load More.**

## Personalization

- None — same list for Guest and Member (contrast with Home's Upcoming Events preview, which prioritizes the Member's own registrations; this full listing page shows everything regardless of login state).

## Cross-feature dependencies

- **Events** (`events-requirements.md`) — full field/filter/registration source of truth.
- Links into **Single Event Details** page for each card.

## Deferred / explicitly out of scope for this phase

- None beyond what's already deferred in `events-requirements.md` (Waitlist).
