# Requirements Progress Tracker

> Living document — updated every time a feature's requirements doc is completed or meaningfully changed. Check this file instead of asking for a status recap.

Last updated: 2026-08-07 (rev. 10 — Admin & Super Admin Dashboard fully drafted, 40 pages; every planned feature area now covered)

---

## Core product features (from the project brief)

| #   | Feature                                                                           | Status     | File                                                          |
| --- | --------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------- |
| 1   | Events                                                                            | ✅ Covered | `docs/requirements/events-requirements.md`                    |
| 2   | Contests                                                                          | ✅ Covered | `docs/requirements/contests-requirements.md`                  |
| 3   | Case Studies                                                                      | ✅ Covered | `docs/requirements/articles-and-case-studies-requirements.md` |
| 4   | Articles (renamed from "Resources" — member-submitted articles / curated content) | ✅ Covered | `docs/requirements/articles-and-case-studies-requirements.md` |
| 5   | Mentorship (apply → review → book → 1:1 sessions)                                 | ✅ Covered | `docs/requirements/mentorship-requirements.md`                |
| 6   | Products (member builder directory)                                               | ✅ Covered | `docs/requirements/products-requirements.md`                  |
| 7   | Sponsor Us                                                                        | ✅ Covered | `docs/requirements/shared-features.md` (Sponsors section)     |
| 8   | Contact                                                                           | ✅ Covered | `docs/requirements/shared-features.md` (Contact Us section)   |

## Shared / supporting features

| #   | Feature                                                                                                 | Status     | File                                                  |
| --- | ------------------------------------------------------------------------------------------------------- | ---------- | ----------------------------------------------------- |
| 1   | Sponsors (Sponsor + Sponsor Tier, Event/Contest attachment)                                             | ✅ Covered | `docs/requirements/shared-features.md`                |
| 2   | Contact Us (form, spam protection, search, export, admin triage)                                        | ✅ Covered | `docs/requirements/shared-features.md`                |
| 3   | Payment (Bkash now, pluggable for future gateways — used by Event & Contest registration)               | ✅ Covered | `docs/requirements/shared-features.md`                |
| 4   | Media Library (local disk storage this phase, S3 planned later — shared upload/picker)                  | ✅ Covered | `docs/requirements/media-library-requirements.md`     |
| 5   | Thread system (discussion threads — Events and Contests only, `packages/threads`)                       | ✅ Covered | `docs/requirements/thread-system-requirements.md`     |
| 6   | Global Commenting system (comments/replies, `packages/comments`)                                        | ✅ Covered | `docs/requirements/global-commenting-requirements.md` |
| 7   | Rich Text Editor (Tiptap v3, JSON output, `packages/text-editor`)                                       | ✅ Covered | `docs/requirements/text-editor-requirements.md`       |
| 8   | Follow System (follow Users/Teams, follower counts)                                                     | ✅ Covered | `docs/requirements/shared-features.md`                |
| 9   | Team Public Profile (`/t/{teamSlug}`)                                                                   | ✅ Covered | `docs/requirements/shared-features.md`                |
| 10  | Static/CMS Pages (Admin Page CRUD — powers Terms & Conditions, Privacy Policy, and future static pages) | ✅ Covered | `docs/requirements/shared-features.md`                |

## Foundational

| Feature                                                                                    | Status     | File                                  |
| ------------------------------------------------------------------------------------------ | ---------- | ------------------------------------- |
| Roles & Authentication (Super Admin, Admin, Member + Mentor Badge, unified public profile) | ✅ Covered | `docs/requirements/roles-and-auth.md` |

## Landing Pages (public interface)

> Page-by-page requirements now live in their own folder: **`docs/requirements/landing-pages/`** — see `docs/requirements/landing-pages/README.md` for the full 22-page index and per-page status/links. Not duplicated here to avoid the two lists drifting out of sync.

**21 of 22** pages covered — all active pages done in one pass, based on already-established feature requirements. Global Search remains deferred to a future phase. All inline flags across these pages, including `home.md`'s Stats bar metric set, are now resolved (tracked in `docs/requirements/open-flags-tracker.md`).

**Resolved (applies platform-wide, not just page layout):**

- No Forgot Password page needed — Member auth has no password. Instead, Members can **link multiple OAuth providers** to one account (e.g. registered via Google, later connects LinkedIn too — or vice versa — and can log in with either afterward). Documented in `docs/requirements/roles-and-auth.md`.

## Member Dashboard Panel (logged-in member)

> Page-by-page requirements now live in their own folder: **`docs/requirements/member-dashboard/`** — see `docs/requirements/member-dashboard/README.md` for the full 10-page index and per-page status/links. Not duplicated here to avoid the two lists drifting out of sync.

**12 of 12** pages covered (10 originally listed + Mentorship Sessions + Contest Judging, both added after being surfaced as gaps). All three structural gaps flagged during the initial pass are now resolved — see `docs/requirements/member-dashboard/README.md` for detail. A notification system remains an open flag, not built this phase.

**Resolved:**

- **Mentor-badge dashboard placement**: depends on the underlying account type, not a separate dashboard.
    - If the badge holder is a **Member**, all Mentor-related capabilities (judging, speaker info, etc.) surface within their existing **Member Dashboard Panel**.
    - If the badge holder is an **Admin**, they already have full Admin Dashboard access — no separate view needed. The one addition: in the Admin Dashboard's contest list, an Admin who is also a Judge on a given contest sees an indicator flagging that they're assigned as Judge there, making it easy to spot which contests need their judging attention.

---

## Admin & Super Admin Dashboard

> Page-by-page requirements now live in their own folder: **`docs/requirements/admin-dashboard/`** — see `docs/requirements/admin-dashboard/README.md` for the full 40-page index and per-page status/links. Not duplicated here to avoid the two lists drifting out of sync.

**40 of 40** pages covered. This pass established a few structural conventions worth knowing going forward: **List/Create/Edit/Details(tabs)/Settings(drawer)** as the dominant pattern for Events, Contests, Articles, Case Studies, and Products; a dedicated **Platform Settings** page for genuinely global (not per-record) toggles, kept separate from per-record Settings drawers; and **no standalone Review Queue pages** — every reviewable content type's List page is status-filterable instead, with Approve/Reject/Curated/Featured/Block actions living on that record's Edit page.

---

## Coming Soon App (separate, temporary — not a core product feature)

> Standalone single-page app for `productpeersbd.org` prior to production launch of `apps/web`. Own lifecycle (built, deployed, then retired), so it's not counted in the Summary table below. Full spec: `docs/requirements/coming-soon-app-requirements.md`.

| Feature          | Status     | File                                                |
| ---------------- | ---------- | --------------------------------------------------- |
| Coming Soon page | ✅ Covered | `docs/requirements/coming-soon-app-requirements.md` |

---

## Summary

| Area                          | Total | Covered | Remaining                                      |
| ----------------------------- | ----- | ------- | ---------------------------------------------- |
| Core Product Features         | 8     | 8       | 0                                              |
| Shared / Supporting Features  | 10    | 10      | 0                                              |
| Foundational (Roles & Auth)   | 1     | 1       | 0                                              |
| Landing Pages                 | 22    | 21      | 1 (Global Search — deferred, not pending work) |
| Member Dashboard Panel        | 12    | 12      | 0                                              |
| Admin & Super Admin Dashboard | 40    | 40      | 0                                              |

- **8 of 8** core product features fully covered — all open items resolved, including Mentorship's final 3.
- **10 of 10** shared/supporting features covered — all complete.
- **1 of 1** foundational doc covered.
- **21 of 22** Landing Pages complete (all but the deferred Global Search). Home and About Us were discussed in detail earlier (Testimonials, Home Page Customizer, Stats/Timeline/Values/Team blocks); the remaining 20 pages were drafted in one pass directly from the existing feature requirements docs, with open decisions marked inline as flags rather than blocking progress. Full index: `docs/requirements/landing-pages/README.md`.
- **12 of 12** Member Dashboard pages complete (10 original + Mentorship Sessions + Contest Judging, both added after being surfaced as gaps) — full index: `docs/requirements/member-dashboard/README.md`. All three structural gaps from the initial pass are now resolved.
- **🎉 Every planned feature area is now covered.** All 8 core product features, all 21 active Landing Pages, all 12 Member Dashboard pages, all 4 shared infrastructure packages, and all 40 Admin & Super Admin Dashboard pages — full index: `docs/requirements/admin-dashboard/README.md`.
- The Admin Dashboard pass established a few structural conventions worth knowing: List/Create/Edit/Details(tabs)/Settings(drawer) as the dominant pattern for Events, Contests, Articles, Case Studies, Products; a dedicated Platform Settings page for genuinely global toggles (separate from per-record Settings drawers); and no standalone "Review Queue" pages — status-filterable Lists + actions on the Edit page cover that instead.
- While drafting Thread System, a real contradiction was found and fixed across `events-requirements.md` and `conventions.md`: both had incorrectly implied Case Studies used Thread System, when `articles-and-case-studies-requirements.md` had already deliberately decided Case Studies use Global Commenting directly. Confirmed scope: **Thread System = Events + Contests only.**
- **Major restructure (this round)**: Mentor is no longer a standalone role — it's now a "badge" attachable to Admin or Member accounts. Public profiles were also unified into a single model (`/u/{username}`) regardless of role. See `roles-and-auth.md` for full details; `contests-requirements.md`'s participation rule was updated accordingly.

## Notes for future updates

- When a feature's requirements doc is finished (no open flags/review comments outstanding), flip its row to ✅ and fill in the file path here.
- When a new shared/foundational concern surfaces mid-discussion (as Sponsors and Roles & Auth did), add it as its own row rather than folding it silently into an unrelated feature's file.
- Keep this file itself lightweight — it's an index, not a spec. Details always live in the linked feature file.
