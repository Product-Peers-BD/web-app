# Landing Page: About Us

> Part of `docs/requirements/landing-pages/` — see `README.md` in this folder for the full page index and status.

## Overview

Mostly a static, content-marketing page — no personalization by login state for the bulk of the content (same Mission/Story, Timeline, Values, Team for Guest and Member). Two exceptions: **Stats now pulls from the same live source as Home's Stats bar** (see #2 below), and the **Join Community CTA is hidden for logged-in Members**, matching Home's behavior (see #6 below).

---

## Section-by-section structure

### 1. Mission / Story

- Static rich-text block: PPBD's founding story, mission statement.
- Admin-editable via a single content record (headline + rich text body, using `packages/text-editor`).
- No CTA embedded here — CTA is handled by the dedicated Join CTA section (#5).

### 2. Stats

- **Live data source — same metrics/query as Home's Stats bar** (Total Members, Events Hosted, Contests Held, Mentors Available — per `home.md`'s Stats/Social Proof Bar), not manually entered. One shared live source, displayed on both Home and About, so the two never drift out of sync.
- No separate Admin-managed content list for this section — nothing to add/edit/reorder here; it renders directly from the same aggregate queries Home uses.
- **Mirrors Home's exact metric set 1:1** — Total Members, Events Hosted, Contests Held, Mentors Available, Articles Published, Case Studies Published, 1:1 Mentor Sessions, Products Listed (per `home.md`'s Stats/Social Proof Bar). No separate/expanded subset for About; same 8 metrics, same live source.

### 3. Timeline / Milestones

- Repeatable list of milestone entries, Admin-managed (add/edit/delete/reorder — drag-and-drop, same UX pattern as Testimonials ordering on Home).

| Field             | Required | Notes                                                                                                           |
| ----------------- | -------- | --------------------------------------------------------------------------------------------------------------- |
| Date/Period label | Yes      | Free text (e.g. "October 2025", "Q1 2026") rather than a strict date picker, so Admin can write ranges/quarters |
| Title             | Yes      | e.g. "PPBD Founded"                                                                                             |
| Description       | No       | Short free text                                                                                                 |
| Icon/Image        | No       | Via Media Library                                                                                               |

- Displayed in Admin-defined order (not auto-sorted by date) — gives Admin control over narrative flow, though in practice they'll likely order chronologically.

### 4. Values / Pillars

- Repeatable list of value cards, Admin-managed (add/edit/delete/reorder).

| Field       | Required | Notes                  |
| ----------- | -------- | ---------------------- |
| Icon        | No       | Via Media Library      |
| Title       | Yes      | e.g. "Community First" |
| Description | Yes      | Short free text        |

### 5. Team (Admins/Founders)

- **Picker of existing platform users, not standalone entries.** Admin searches and selects an existing registered User (Member or Admin account) and adds a Designation for the About page — same "pick existing users + add a caption" pattern used elsewhere (e.g. Products' team member picker). The entry links directly to that person's real `/u/{username}` public profile.

| Field       | Required | Notes                                                                                                                                                                                         |
| ----------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User        | Yes      | Picked from existing platform accounts (search by name/username)                                                                                                                              |
| Designation | Yes      | Admin-entered, free text — e.g. "Founder", "Co-Founder", "Head of Marketing", "Head of Public Relations". About-page-specific, independent of the user's own profile Title/Designation field. |

- **Team card shows**: the user's live **Photo**, **Name**, and **Social Links** (all pulled from their actual profile, not re-entered here — stays in sync automatically if they update any of these), plus the Admin-entered **Designation** above. **No Bio** on the card itself — visitors who want that click through to the person's full `/u/{username}` profile.
- Admin can add/remove/reorder team entries from the dashboard.

### 6. Join Community CTA

- Static headline + **"Join Now"** CTA → Register Page — same pattern as Home's Join Community CTA section.
- **Guest only** — hidden entirely for logged-in Members, matching Home's behavior exactly (they've already joined).

### 7. Footer

- Same shared Footer as every other page (link groups: About, Explore, Legal, Social) — see `home.md` for the definition. Not redefined per-page.

---

## Section ordering

- **Same reorder/show-hide flexibility as Home, via the same Customizer** — the Home Page Customizer (`home.md`) is extended to also manage About's sections (Mission, Stats, Timeline, Values, Team, Join CTA, Footer), rather than building a separate mechanism. Admin gets one Customizer tool that now manages both pages' section order and Guest/Member/Both visibility per section.
- **Data Source Mode**: not applicable to any About section (unlike Home's Mentorship Spotlight / Case Studies Spotlight) — About has no mode-selectable sections.
- **Auto-hide when empty**: extends the same pattern Home already has — e.g. Timeline/Values/Team auto-hide if Admin hasn't added any entries yet, consistent with Home's empty-section handling.
- Content within each repeatable section (Stats — now live, not manually reordered; Timeline, Values, Team) is independently manageable by Admin as before; the Customizer controls section-level order/visibility, not item-level content within a section.

---

## Admin dashboard

- One dashboard area for About Page content, with sub-sections for: Mission/Story (single record), Timeline (list), Values (list), Team (list — user picker + caption). **Stats has no dashboard content to manage** — it renders live, same source as Home.
- The three repeatable lists (Timeline, Values, Team) follow the same CRUD + drag-and-drop reorder pattern already established for Home's Testimonials.
- Section-level order/visibility (across About and Home both) is managed from the shared Home Page Customizer — see Section ordering above.

---

## Cross-feature dependencies

- **Media Library** — Value/Timeline icons (Team photos now come from the linked user's own profile, not uploaded here).
- **Rich Text Editor** (`packages/text-editor`) — Mission/Story body.
- **Register Page** — Join Community CTA target.
- **Public Profiles** (`public-profiles.md`) — Team entries link to real `/u/{username}` pages.
- **Home** (`home.md`) — shared live Stats source; shared Home Page Customizer now also governs About's section order/visibility.

## Deferred / explicitly out of scope for this phase

- Nothing currently deferred — all prior open items for this page are resolved.
