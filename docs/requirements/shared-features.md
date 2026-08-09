# Shared / Supporting Features

> This file collects smaller supporting features — either genuinely cross-cutting infrastructure that multiple product features depend on (e.g. Sponsors, Media Library), or standalone features that are simple enough not to warrant their own dedicated file (e.g. Contact Us) — as opposed to larger, standalone audience-facing features that get their own file (e.g. `events.md`, `contests.md`). Each gets its own section below. Referenced from feature docs rather than duplicated.

---

## Sponsors

### Entities

**Sponsor** — a brand/company that can be attached to Events/Contests.

| Field                   | Required | Notes                                                                                                                                                                                                                                                                                                                                                                                    |
| ----------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Brand Logo              | Yes      |                                                                                                                                                                                                                                                                                                                                                                                          |
| Banner                  | No       | Optional banner image                                                                                                                                                                                                                                                                                                                                                                    |
| Brand/Company Name      | Yes      |                                                                                                                                                                                                                                                                                                                                                                                          |
| Sponsor Website URL     | No       | Link to the sponsor's own website                                                                                                                                                                                                                                                                                                                                                        |
| Description             | No       | Max 255 chars                                                                                                                                                                                                                                                                                                                                                                            |
| Slug                    | auto     | Backend-generated, unique, editable later                                                                                                                                                                                                                                                                                                                                                |
| Associated Contact Info | No       | Textarea. Internal use only (Admin-only visibility, not shown publicly) — sponsor's contact details.                                                                                                                                                                                                                                                                                     |
| Featured                | No       | Default `false`. Admin-only toggle, independent of any Event/Contest attachment. Controls two placements: (1) Home page's Sponsors Strip section (see `landing-pages/home.md`), and (2) a pinned/highlighted row at the top of the public Sponsors page (see `landing-pages/static-pages.md`). _(Renamed from "Featured on Homepage" once the field's scope expanded beyond just Home.)_ |

- Created only by Admin, via a dedicated **Sponsors** page in the dashboard.

**Sponsor Tier** — a label describing a sponsorship level (e.g. Title Sponsor, Gold, Platinum, Coffee Sponsor, Lunch Sponsor).

- Created by Admin via a separate **Sponsor Tiers** page in the dashboard.
- Tiers are just reusable labels — not tied to any single Event/Contest at creation time.

### How Sponsors + Tiers attach to an Event or Contest

- Sponsors and Tiers are both **global, reusable master lists** — but the actual _association_ (which sponsor sits under which tier) only exists in the context of a specific Event or Contest. There's no "global" sponsor-tier pairing outside of one.
- From an Event or Contest's details page in the dashboard, Admin can:
    1. Add a Tier to that Event/Contest (picked from the Tier select box).
    2. Under that Tier, add one or more Sponsors (picked from the Sponsor select box).
- This effectively means: `Event/Contest → Tier → [Sponsors]`, scoped per Event/Contest. The same Tier (e.g. "Gold Sponsor") can be used independently across many different Events/Contests, each with its own set of sponsors under it.

### Deletion & editing rules

- **Deletion is blocked while in use** — a Sponsor or a Tier **cannot be deleted** if it's currently attached to any Event or Contest. Admin must first remove it from every Event/Contest that references it before deletion is allowed.
    - _(Note: this is stricter than Event Category/Tag, which allow deletion regardless of usage — Sponsors/Tiers intentionally behave differently since sponsor commitments are commercial/contractual and shouldn't silently disappear from a listing.)_
- **Editing propagates live** — editing a Sponsor (e.g. logo, name) or a Tier (e.g. title) updates it everywhere it's used, across every Event/Contest that references it. This is a live reference, not a per-event snapshot — unlike, e.g., Contest team rosters, which do need historical snapshots (see `contests.md`). Sponsors/Tiers don't need that: there's no requirement to preserve "what the sponsor's name/logo was at the time" per event.

### Public display

- On an Event/Contest's public details page, if Admin has added sponsors, they're shown **grouped by Tier**. Visual layout/UI TBD in the design phase.
- There's also a dedicated public **Sponsors page** showing the entire master Sponsor list, independent of any Event/Contest attachment — this is how general platform sponsors (e.g. an IT/hosting partner or a community T-shirt sponsor) get shown regardless of whether they're also attached to any specific Event/Contest. Full page spec in `landing-pages/static-pages.md`.

---

## Static / CMS Pages

A generic Admin-managed content-page feature — built once, used for Terms & Conditions and Privacy Policy (see `landing-pages/static-pages.md`), and reusable for any future one-off static page without needing a code deploy.

### Page entity

| Field   | Required | Notes                                                                                                                                                |
| ------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Title   | Yes      |                                                                                                                                                      |
| Slug    | auto     | Backend-generated from Title, unique, editable later — same convention as Events/Articles/etc.                                                       |
| Content | Yes      | Rich text via `packages/text-editor` (Tiptap, JSON output) — same shared editor used by Articles/Case Studies.                                       |
| Status  | —        | `Draft` / `Published`, default `Draft`. **No scheduled publishing** for this feature — a page is either live or it isn't, admin toggles it manually. |

- Admin can create, edit, publish/unpublish (back to Draft), and delete Pages from a dedicated dashboard area — simple CRUD, no review workflow (Admin-authored only, no Member submissions).
- **Routing**: `https://website-url.com/{slug}` — a slug-based catch-all route in `apps/web`, resolved at read time against Published Pages.
- **Slug collision prevention**: a Page's slug must not collide with any of the app's existing static routes (e.g. `about-us`, `contact-us`, `sponsors`, `events`, `contests`, `case-studies`, `articles`, `mentorship`, `products`, `join`, `register`, `login`, `u`, `t`, and any other top-level route already defined in `apps/web`). Validated on create/edit — Admin sees an error and must pick a different slug if it conflicts.

## Cross-feature dependencies

- **Rich Text Editor** (`packages/text-editor`) — Content field.
- **Landing Pages — Static Pages** (`landing-pages/static-pages.md`) — Terms & Conditions, Privacy Policy are the first two Pages created via this feature.

## Deferred / explicitly out of scope for this phase

- Scheduled publishing for Pages (Draft/Published only, no `scheduled_publish_at`).
- Any review/approval workflow (Admin-only feature).

---

## Contact Us

Simple contact form on the public **Contact Us** page (part of the combined "Sponsor Us / Contact" area from the brief).

### Form fields

| Field        | Required | Notes                                          |
| ------------ | -------- | ---------------------------------------------- |
| Contact Type | Yes      | Select: **General Inquiry** or **Sponsorship** |
| Name         | Yes      |                                                |
| Email        | Yes      |                                                |
| Phone        | No       |                                                |
| Message      | Yes      | Min 20 chars, max 1000 chars                   |

### Submission

- Both **Guest** and **authenticated Member** users can submit the form.
- If submitted by a logged-in Member, their user account details are captured and shown alongside the submission in the dashboard's contact list (so Admin can see it's tied to a known member, not just a name/email typed into the form).
- **Spam protection at submission**: form is protected by CAPTCHA and/or a honeypot field, to prevent bot submissions before they ever reach the dashboard (in addition to Admin's manual "Mark as Spam" for anything that gets through).

### Admin dashboard

- List of all Contact form submissions.
- Mark any submission as **Read/Unread**.
- Mark any submission as **Spam**.
- **Status** field per submission, default **Pending**. Full status list: `Pending`, `In Progress`, `Reached`, `Resolved`, `Denied`.
- **Admin note/feedback** — a textarea per submission, for internal notes to inform later follow-up action.
- **View Details** — clicking a submission opens a popup with full details and all the above actions available in place.
- **Search** — free-text search across Name, Email, and Message.
- **Filters**: Spam / Not spam, Read / Unread, Guest / Registered user, Status (from the status list), Contact Type (General Inquiry / Sponsorship).
- **Sorting**: submission date, latest ↔ oldest.
- **Export** — Admin can export the (filtered) submission list as CSV.

---

## Payment

Shared payment handling, used wherever `is_premium` applies — currently **Event registration** and **Contest registration**, with the same underlying logic in both.

### Current phase

- **Bkash only.** Successful payment confirms the booking/registration.
- Invoice is generated and downloadable by the Member from their dashboard.
- Both Admin and Member can view/track all payment + registration records, and download invoices, from their respective dashboards (already noted per-feature in `events-requirements.md` and `contests-requirements.md`).

### Manual payment path

- When Admin manually adds a participant beyond capacity (Events/Contests), or manually promotes a waitlisted member (Events, future phase) — payment happens **outside** the automated Bkash flow. Admin coordinates directly with the participant (e.g. via WhatsApp/phone) and records the payment manually.
- Manually-recorded payments are logged in the **same** Payment/Transaction record as gateway payments, tagged as `manual` (vs. `gateway`) so Admin's payment tracking/reporting stays complete either way. Admin also has the option to manually enter gateway/payment details for a manual entry (e.g. which method was actually used, reference/transaction info) rather than it being a bare "marked paid" flag. Full payment data model/fields TBD in a dedicated Payment discussion.

### Future phases

- Additional payment gateways are planned beyond Bkash. This implies the payment logic should be built as a **pluggable/abstracted provider layer** from the start — Event/Contest code calls a generic "process payment" interface rather than being hard-wired to Bkash specifically, so a new gateway can be added later without reworking Event/Contest registration logic.
- Payment lives as its own shared package, own `packages/` directory in the Turborepo — same pattern as Media Library/Thread System/Global Commenting.

---

## Follow System

Shared, reusable following mechanism — first surfaced via Articles/Case Studies ("follow the author"), but applies to both **Users** (public profile, `/u/{username}`) and **Teams** (public profile, `/t/{teamSlug}`).

- Any authenticated platform user can follow another User's public profile, or a Team's public profile.
- Follower count is shown publicly on both User and Team profile pages.
- Purely a follow/follower relationship for now — **no algorithmic feed yet**. A future phase will introduce a news feed showing latest activity from followed Users/Teams, plus platform-suggested relevant activity — **explicitly deferred, not built now**.

## Team Public Profile

URL: `https://landing-url.com/t/{teamSlug}` — unique, backend-generated slug per team at creation, editable later by Admin.

**Shown on the Team profile page:**

- Team profile image, banner, team name, current team leader.
- **Follow button** (see Follow System above).
- **Current member roster** — the team's global/current member list (as originally defined in `contests-requirements.md`), shown in its own tab.
- **Activities Timeline** — a separate tab, chronological (latest-to-oldest by default, visitor can flip to oldest-to-latest; further filters TBD), covering: team created, attended a Contest (with team leader + participating members at that time), won a Contest, and Team Leader updates to the team's Name, Profile Image (logo), or Banner.

**Team Leader edit capability:** when the authenticated Team Leader (of a given contest's participating team — see `contests-requirements.md`) browses their own Team's Public Profile page, they see an **Edit** option allowing them to update the team's **Name**, **Description**, **Profile Image** (team logo), and **Banner**. No other team member has this edit access — it's specific to whoever currently holds the Team Leader designation.

Only the **current leader** (i.e. most-recently-assigned Team Leader, across any of the team's contests) has edit access at any given time.

_(Note: the per-contest membership snapshot behavior defined in `contests-requirements.md` — team rosters can differ contest-to-contest — still applies to what's shown in the Activities Timeline and in each Contest's own team listing. The roster tab here shows the team's current/global membership, which is a separate concept from any single contest's snapshot.)_

---

## Media Library

Moved to its own file — **`media-library-requirements.md`** — once the technical UI/interaction spec (component props, hooks, keyboard shortcuts, bulk operations, drag-reorder persistence) made it comparable in depth to a core feature rather than a lightweight shared-features entry. Nothing left to document here beyond that pointer.
