# Implementation Tracker

> **Build status, feature by feature.** Companion to `progress-report.md` — that file tracks whether a feature is _documented_; this file tracks whether it is _built_. Documentation is 100% complete, so from here on this is the file to check for "where are we?".
>
> Last updated: 2026-10-29 (rev. 1 — tracker created; implementation starts with Database + Backend API)

---

## Current phase

**Phase 1 — Database & Backend API.** Nothing is built yet beyond static landing UI. The immediate work is the Prisma schema and the `apps/api` foundation (auth, core CRUD), not more UI.

Landing pages are being **redesigned in Figma** (near-complete, pending PM confirmation). Existing landing UI in `apps/web` is therefore treated as **v1 / to be reworked**, not done. See [Figma redesign reconciliation](#figma-redesign-reconciliation) for how design-vs-logic conflicts get handled.

---

## Legend

| Mark | Meaning                                              |
| ---- | ---------------------------------------------------- |
| ✅   | Done and merged                                      |
| 🟡   | In progress                                          |
| 🔄   | Rework — v1 exists, superseded by the Figma redesign |
| ⬜   | Not started                                          |
| ➖   | Not applicable for this feature                      |

## What each column means

A column is only ✅ when **all** of its definition is true — this keeps status objective rather than a feeling.

| Column      | Done means                                                                                                                          |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Docs**    | Requirements written, zero open flags.                                                                                              |
| **DB**      | Prisma models + relations + enums + migration applied. Internal integer PK **and** exposed `uuid`; slug where publicly addressable. |
| **API**     | `apps/api` routes + controllers + Zod schemas + service layer + permissions, documented in Swagger.                                 |
| **Svc**     | Typed functions, models and enums in `packages/api-services` — callable from both Next.js apps.                                     |
| **Landing** | Public page(s) built in `apps/web` to the **final Figma design**.                                                                   |
| **L-Bind**  | Landing page(s) reading live API data; no `constants/*.ts` mock data left.                                                          |
| **Admin**   | `apps/dashboard` page(s) built.                                                                                                     |
| **A-Bind**  | Admin page(s) wired to the API.                                                                                                     |
| **Member**  | Member dashboard page(s) built in `apps/web`.                                                                                       |
| **M-Bind**  | Member page(s) wired to the API.                                                                                                    |

---

## Master matrix

### Foundational & shared infrastructure

| Feature                          | Docs | DB  | API | Svc | Landing | L-Bind | Admin | A-Bind | Member | M-Bind |
| -------------------------------- | ---- | --- | --- | --- | ------- | ------ | ----- | ------ | ------ | ------ |
| Roles & Authentication           | ✅   | ⬜  | ⬜  | ⬜  | 🔄      | ⬜     | ⬜    | ⬜     | ⬜     | ⬜     |
| Media Library                    | ✅   | ⬜  | ⬜  | ⬜  | ➖      | ➖     | ⬜    | ⬜     | ⬜     | ⬜     |
| Text Editor                      | ✅   | ➖  | ➖  | ➖  | ➖      | ➖     | ⬜    | ⬜     | ⬜     | ⬜     |
| Global Commenting                | ✅   | ⬜  | ⬜  | ⬜  | ⬜      | ⬜     | ⬜    | ⬜     | ➖     | ➖     |
| Thread System                    | ✅   | ⬜  | ⬜  | ⬜  | ⬜      | ⬜     | ⬜    | ⬜     | ➖     | ➖     |
| Payments (Bkash)                 | ✅   | ⬜  | ⬜  | ⬜  | ⬜      | ⬜     | ⬜    | ⬜     | ⬜     | ⬜     |
| Follow System                    | ✅   | ⬜  | ⬜  | ⬜  | ⬜      | ⬜     | ➖    | ➖     | ➖     | ➖     |
| Platform Pages (Home/About/Join) | ✅   | ⬜  | ⬜  | ⬜  | 🔄      | ⬜     | ⬜    | ⬜     | ➖     | ➖     |

### Core product features

| Feature                 | Docs | DB  | API | Svc | Landing | L-Bind | Admin | A-Bind | Member | M-Bind |
| ----------------------- | ---- | --- | --- | --- | ------- | ------ | ----- | ------ | ------ | ------ |
| Events                  | ✅   | ⬜  | ⬜  | ⬜  | 🔄      | ⬜     | ⬜    | ⬜     | ⬜     | ⬜     |
| Contests                | ✅   | ⬜  | ⬜  | ⬜  | 🔄      | ⬜     | ⬜    | ⬜     | ⬜     | ⬜     |
| Articles                | ✅   | ⬜  | ⬜  | ⬜  | 🔄      | ⬜     | ⬜    | ⬜     | ⬜     | ⬜     |
| Case Studies            | ✅   | ⬜  | ⬜  | ⬜  | 🔄      | ⬜     | ⬜    | ⬜     | ⬜     | ⬜     |
| Mentorship              | ✅   | ⬜  | ⬜  | ⬜  | 🔄      | ⬜     | ⬜    | ⬜     | ⬜     | ⬜     |
| Products                | ✅   | ⬜  | ⬜  | ⬜  | 🔄      | ⬜     | ⬜    | ⬜     | ⬜     | ⬜     |
| Sponsors                | ✅   | ⬜  | ⬜  | ⬜  | 🔄      | ⬜     | ⬜    | ⬜     | ➖     | ➖     |
| Contact Us              | ✅   | ⬜  | ⬜  | ⬜  | 🔄      | ⬜     | ⬜    | ⬜     | ➖     | ➖     |
| Static / CMS Pages      | ✅   | ⬜  | ⬜  | ⬜  | ⬜      | ⬜     | ⬜    | ⬜     | ➖     | ➖     |
| Teams & Public Profiles | ✅   | ⬜  | ⬜  | ⬜  | 🔄      | ⬜     | ⬜    | ⬜     | ⬜     | ⬜     |

### Totals

| Column  | ✅  | 🔄  | ⬜  | ➖  |
| ------- | --- | --- | --- | --- |
| Docs    | 18  | 0   | 0   | 0   |
| DB      | 0   | 0   | 17  | 1   |
| API     | 0   | 0   | 17  | 1   |
| Svc     | 0   | 0   | 17  | 1   |
| Landing | 0   | 9   | 6   | 3   |
| Admin   | 0   | 0   | 17  | 1   |
| Member  | 0   | 0   | 11  | 7   |

**Nothing is end-to-end complete.** 0 of 18 features have a database table, an endpoint, or a bound UI.

---

## Per-feature detail

Entity lists below are drawn from the requirements docs and are the starting point for schema design — confirm field-level detail against each feature's doc before writing the Prisma model. All tables follow the project-wide rule: internal integer PK + exposed indexed `uuid`, snake_case plural table names, and a slug for anything publicly addressable.

### Roles & Authentication — `roles-and-auth.md`

- [ ] `users` — role (SUPER_ADMIN / ADMIN / MEMBER), username, public profile fields
- [ ] `oauth_accounts` — multi-provider linking (Google + LinkedIn on one account)
- [ ] `mentor_badges` — badge attachable to Admin or Member, plus the separate "mentorship-eligible" flag
- [ ] Sessions / JWT issuing + refresh strategy
- [ ] Super Admin seeding at initial setup (single configured Google account)
- [ ] Route guards + role middleware in `apps/api`

### Events — `events-requirements.md`

- [ ] `events` — fields, status, scheduled visibility (computed at read time, no cron)
- [ ] `event_types`, `event_categories`, `event_tags` — taxonomy, delete = detach
- [ ] `event_registrations` — capacity, waitlist, manual admin add
- [ ] Sponsor attachment junction (tiered)
- [ ] Thread System attachment
- [ ] Filtering & sorting; status filter (Upcoming / Ongoing / Past), Load More pagination

### Contests — `contests-requirements.md`

- [ ] `contests` — fields, lifecycle
- [ ] `teams` — one team per member globally
- [ ] `contest_team_members` — **per-contest roster snapshot**, not a live FK
- [ ] `contest_submissions`
- [ ] `contest_judges` + `contest_scores` + judge feedback (max 450 chars)
- [ ] `contest_winners` — configurable tier count, Automatic / Pick-and-choose modes, ties allowed
- [ ] Public participant team ranking
- [ ] Thread System attachment

### Articles & Case Studies — `articles-and-case-studies-requirements.md`

- [ ] `articles` + `case_studies` — shared model, Tiptap JSON body, excerpt field
- [ ] Review workflow (Mentor badge bypasses approval)
- [ ] Curated Content flag (Articles only)
- [ ] Engagement: bookmarks, reactions
- [ ] Global Commenting attachment (not Thread System)

### Mentorship — `mentorship-requirements.md`

- [ ] Two-tier eligibility gate (Mentor badge + mentorship-eligible flag)
- [ ] `mentor_availability` — slots, duration
- [ ] `mentorship_bookings` — booking states, cancellation rules
- [ ] Payment integration
- [ ] Post-session flow
- [ ] Discovery / mentor listing

### Products — `products-requirements.md`

- [ ] `products` — creation fields
- [ ] Review workflow + Featured flag
- [ ] Creator-curated related Case Studies (reverse link, not automatic)
- [ ] Global Commenting attachment

### Sponsors — `shared-features.md`

- [ ] `sponsors` + `sponsor_tiers`
- [ ] Attachment junction to Events / Contests
- [ ] **Deletion blocked while in use**; edits propagate live
- [ ] `Featured` flag — pins on both Home and the Sponsors page

### Contact Us — `shared-features.md`

- [ ] `contact_submissions` — form fields, CAPTCHA/honeypot, no email verification
- [ ] Admin triage, search, export

### Payments — `shared-features.md`

- [ ] `payments` / transactions — gateway **and** manual admin-recorded entries in the same table, tagged `manual`
- [ ] Bkash provider behind a pluggable provider interface (`packages/payments`)
- [ ] Invoice generation + member/admin download

### Shared infrastructure packages

- [ ] `packages/media-library` — `files` table, local-disk provider behind a pluggable storage interface
- [ ] `packages/text-editor` — Tiptap v3, JSON output, base64 disabled
- [ ] `packages/comments` — polymorphic commentable, one reply level, @mentions
- [ ] `packages/threads` — Events + Contests only
- [ ] `packages/api-services` — fetcher + services + models + enums
- [ ] `packages/utils` — shared helpers

> None of these packages are scaffolded yet. When one is, add it to the Architecture section of root `CLAUDE.md` per `conventions.md`.

---

## Figma redesign reconciliation

The landing pages were redesigned in Figma. The design is near-complete and awaiting PM confirmation before handoff.

**Rule for conflicts:** `docs/requirements/` is the source of truth for **logic and behaviour**; Figma is the source of truth for **visual design**. Where the Figma omits or contradicts a documented rule — a missing state, a dropped filter, a flow step the designer didn't know about — the requirement wins, and the gap gets logged below and raised with the PM/designer rather than silently built either way.

### Handoff status

| Step                                          | Status |
| --------------------------------------------- | ------ |
| PM confirmation of the Figma design           | ⬜     |
| Figma file handed over                        | ⬜     |
| Page-by-page review against requirements docs | ⬜     |
| Discrepancies logged and resolved with PM     | ⬜     |
| Rebuild of `apps/web` landing pages started   | ⬜     |

### Per-page redesign status

Fill in as frames arrive. "v1 built" = the current static implementation on `dev`.

| #   | Page                           | v1 built | Figma frame | Reviewed | Rebuilt |
| --- | ------------------------------ | -------- | ----------- | -------- | ------- |
| 1   | Home                           | ✅       | ⬜          | ⬜       | ⬜      |
| 2   | About Us                       | ✅       | ⬜          | ⬜       | ⬜      |
| 3   | Contact Us                     | ✅       | ⬜          | ⬜       | ⬜      |
| 4   | Sponsors                       | ✅       | ⬜          | ⬜       | ⬜      |
| 5   | Events list                    | ✅       | ⬜          | ⬜       | ⬜      |
| 6   | Single Event                   | ✅       | ⬜          | ⬜       | ⬜      |
| 7   | Contests list                  | ✅       | ⬜          | ⬜       | ⬜      |
| 8   | Single Contest                 | ✅       | ⬜          | ⬜       | ⬜      |
| 9   | Case Studies list              | ✅       | ⬜          | ⬜       | ⬜      |
| 10  | Single Case Study              | ✅       | ⬜          | ⬜       | ⬜      |
| 11  | Mentorship                     | ✅       | ⬜          | ⬜       | ⬜      |
| 12  | Articles list                  | ✅       | ⬜          | ⬜       | ⬜      |
| 13  | Single Article                 | ✅       | ⬜          | ⬜       | ⬜      |
| 14  | Products list                  | ✅       | ⬜          | ⬜       | ⬜      |
| 15  | Single Product                 | ✅       | ⬜          | ⬜       | ⬜      |
| 16  | Join Community                 | ✅       | ⬜          | ⬜       | ⬜      |
| 17a | User Profile (`/u/{username}`) | ✅       | ⬜          | ⬜       | ⬜      |
| 17b | Team Profile (`/t/{teamSlug}`) | ⬜       | ⬜          | ⬜       | ⬜      |
| 18  | Register                       | ✅       | ⬜          | ⬜       | ⬜      |
| 19  | Login                          | ✅       | ⬜          | ⬜       | ⬜      |
| 20  | Terms & Conditions             | ⬜       | ⬜          | ⬜       | ⬜      |
| 21  | Privacy Policy                 | ⬜       | ⬜          | ⬜       | ⬜      |
| 22  | Global Search                  | ➖       | ➖          | ➖       | ➖      |

19 of 22 pages exist as v1. Team Profile, Terms and Privacy were never built.

### Discrepancy log

Log every place the Figma and the requirements disagree. Nothing gets built from a design that contradicts a documented rule until the row is resolved.

| #   | Page / Component                                    | What the Figma shows | What the requirements say | Decision | Status |
| --- | --------------------------------------------------- | -------------------- | ------------------------- | -------- | ------ |
| —   | _(empty — populate during the page-by-page review)_ | —                    | —                         | —        | —      |

**Known logic the designer is most likely to have missed** — check these first on every frame:

- **Guest vs. Member states.** Join CTA and the Join Community page are Guest-only; logged-in Members are redirected to Dashboard Overview.
- **Event/Contest registration state machine.** Multiple panel states; **Members cannot self-cancel** — Admin only.
- **Status filters, not tabs.** Events and Contests use a Status filter (Upcoming/Ongoing/Past) with a badge per card, not Upcoming/Past tabs.
- **Load More, not numbered pagination.**
- **Search is Title-only**, not full-text over descriptions.
- **Stats bar carries 8 metrics** — likely needs a wrapping/scrollable layout, not a fixed strip. Shared 1:1 by Home, About Us and Join Community.
- **Sponsors page has no Current/Past split** — one master list, `Featured` pins to top.
- **About Us Team cards** show Photo + Name + Admin-entered Designation only — no bio, no social links.
- **Mentor is a badge, not a role** — any Admin or Member can hold it; profiles are one unified model at `/u/{username}` regardless of role.
- **Scheduled visibility is computed at read time** — no "publishing soon" states driven by background jobs.

---

## Build order

Dependencies run left to right; don't start a phase before its predecessor is usable.

1. **Phase 1 — Database.** Prisma schema for all entities above, migrations, seed data. Start with Roles & Auth, then Events + Contests (the heaviest), then content types.
2. **Phase 2 — Backend API.** Auth first (OAuth + JWT + role middleware), then per-feature CRUD, then Media Library. Swagger as you go.
3. **Phase 3 — `packages/api-services`.** Typed fetcher + service functions, consumed by both apps.
4. **Phase 4 — Landing rebuild + binding.** Rebuild `apps/web` to the final Figma, binding to live API in the same pass rather than rebuilding static then wiring twice.
5. **Phase 5 — Admin dashboard.** 40 pages — the largest single chunk, and unblocked only once the API exists.
6. **Phase 6 — Member dashboard.** 12 pages in `apps/web`.

Phases 5 and 6 can run in parallel if there's capacity; both depend on Phases 1–3.

---

## Update protocol

- Update a cell the moment the work merges, not in a batch later — a stale tracker is worse than none.
- Bump the `Last updated` line and the rev number at the top on every change.
- Keep this file an index. Behaviour and business rules belong in the feature's own doc under `docs/requirements/`, never duplicated here.
- A new feature or package gets a row in the master matrix **and** a section under Per-feature detail.
