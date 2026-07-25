# Requirements Progress Tracker

> Living document — updated every time a feature's requirements doc is completed or meaningfully changed. Check this file instead of asking for a status recap.

Last updated: 2026-07-22

---

## Core product features (from the project brief)

| #   | Feature                                                                           | Status                    | File                                                          |
| --- | --------------------------------------------------------------------------------- | ------------------------- | ------------------------------------------------------------- |
| 1   | Events                                                                            | ✅ Covered                | `docs/requirements/events-requirements.md`                    |
| 2   | Contests                                                                          | ✅ Covered                | `docs/requirements/contests-requirements.md`                  |
| 3   | Case Studies                                                                      | ✅ Covered                | `docs/requirements/articles-and-case-studies-requirements.md` |
| 4   | Articles (renamed from "Resources" — member-submitted articles / curated content) | ✅ Covered                | `docs/requirements/articles-and-case-studies-requirements.md` |
| 5   | Mentorship (apply → review → book → 1:1 sessions)                                 | ✅ Covered (3 open flags) | `docs/requirements/mentorship-requirements.md`                |
| 6   | Products (member builder directory)                                               | ✅ Covered                | `docs/requirements/products-requirements.md`                  |
| 7   | Sponsor Us                                                                        | ✅ Covered                | `docs/requirements/shared-features.md` (Sponsors section)     |
| 8   | Contact                                                                           | ✅ Covered                | `docs/requirements/shared-features.md` (Contact Us section)   |

## Shared / supporting features

| #   | Feature                                                                                   | Status         | File                                   |
| --- | ----------------------------------------------------------------------------------------- | -------------- | -------------------------------------- |
| 1   | Sponsors (Sponsor + Sponsor Tier, Event/Contest attachment)                               | ✅ Covered     | `docs/requirements/shared-features.md` |
| 2   | Contact Us (form, spam protection, search, export, admin triage)                          | ✅ Covered     | `docs/requirements/shared-features.md` |
| 3   | Payment (Bkash now, pluggable for future gateways — used by Event & Contest registration) | ✅ Covered     | `docs/requirements/shared-features.md` |
| 4   | Media Library (S3 + CDN, shared upload/picker)                                            | ⬜ Not started | —                                      |
| 5   | Thread system (discussion threads — Events, Contests, later Case Studies)                 | ⬜ Not started | —                                      |
| 6   | Global Commenting system (comments/replies)                                               | ⬜ Not started | —                                      |
| 7   | Rich Text Editor (Tiptap, JSON output)                                                    | ⬜ Not started | —                                      |
| 8   | Follow System (follow Users/Teams, follower counts)                                       | ✅ Covered     | `docs/requirements/shared-features.md` |
| 9   | Team Public Profile (`/t/{teamSlug}`)                                                     | ✅ Covered     | `docs/requirements/shared-features.md` |

## Foundational

| Feature                                                                                    | Status     | File                                  |
| ------------------------------------------------------------------------------------------ | ---------- | ------------------------------------- |
| Roles & Authentication (Super Admin, Admin, Member + Mentor Badge, unified public profile) | ✅ Covered | `docs/requirements/roles-and-auth.md` |

## Landing Pages (public interface)

> Page-by-page UI/UX logic — separate from the feature-level business logic docs above, but can surface new requirements/schema needs.

| #   | Page                                                                                                             | Status         | Notes                                                                                                                                      |
| --- | ---------------------------------------------------------------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | Landing Page                                                                                                     | ⬜ Not started |                                                                                                                                            |
| 2   | About Us page                                                                                                    | ⬜ Not started |                                                                                                                                            |
| 3   | Contact Us page                                                                                                  | ⬜ Not started |                                                                                                                                            |
| 4   | Sponsors page                                                                                                    | ⬜ Not started | Renamed from "Sponsor Us" — combines the sponsor showcase (past/current, as social proof) with the pitch/inquiry section for new sponsors. |
| 5   | Events Page                                                                                                      | ⬜ Not started |                                                                                                                                            |
| 6   | Single Event Details page                                                                                        | ⬜ Not started |                                                                                                                                            |
| 7   | Contests Page                                                                                                    | ⬜ Not started |                                                                                                                                            |
| 8   | Single Contest Details page                                                                                      | ⬜ Not started |                                                                                                                                            |
| 9   | Case Studies Page                                                                                                | ⬜ Not started |                                                                                                                                            |
| 10  | Single Case Study Details page                                                                                   | ⬜ Not started |                                                                                                                                            |
| 11  | Mentorship Page                                                                                                  | ⬜ Not started |                                                                                                                                            |
| 12  | Articles Page                                                                                                    | ⬜ Not started |                                                                                                                                            |
| 13  | Single Article Details Page                                                                                      | ⬜ Not started |                                                                                                                                            |
| 14  | Products Listing Page                                                                                            | ⬜ Not started |                                                                                                                                            |
| 15  | Single Product Page                                                                                              | ⬜ Not started |                                                                                                                                            |
| 16  | Join Community Page                                                                                              | ⬜ Not started |                                                                                                                                            |
| 17  | Single Public Profile Page — unified for any user via `/u/{username}` (Admin/Member, Mentor badge shown if held) | ⬜ Not started | Updated model: one profile shape for everyone, no separate "type" per role. Super Admin has no public profile.                             |
| 17b | Single Team Public Profile Page — `/t/{teamSlug}`                                                                | ⬜ Not started | Separate from user profiles; own slug, own page.                                                                                           |
| 18  | Register Page (Member)                                                                                           | ⬜ Not started |                                                                                                                                            |
| 19  | Login Page (Member)                                                                                              | ⬜ Not started |                                                                                                                                            |
| 20  | Terms & Conditions page                                                                                          | ⬜ Not started |                                                                                                                                            |
| 21  | Privacy Policy page                                                                                              | ⬜ Not started |                                                                                                                                            |
| 22  | Global Search Results page                                                                                       | ⬜ Deferred    | Confirmed necessary, but planned for a **future phase**, not this one.                                                                     |

**Resolved:**

- No Forgot Password page needed — Member auth has no password. Instead, Members can **link multiple OAuth providers** to one account (e.g. registered via Google, later connects LinkedIn too — or vice versa — and can log in with either afterward). Documented in `docs/requirements/roles-and-auth.md`.

## Member Dashboard Panel (logged-in member)

| #   | Page                                                      | Status         | Notes                                                                                                                                    |
| --- | --------------------------------------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Dashboard Page (overview)                                 | ⬜ Not started |                                                                                                                                          |
| 2   | Profile Settings                                          | ⬜ Not started |                                                                                                                                          |
| 3   | Payment History                                           | ⬜ Not started |                                                                                                                                          |
| 4   | Participated/Registered Event History Page                | ⬜ Not started |                                                                                                                                          |
| 5   | Single Event Registration Details Page                    | ⬜ Not started | Event equivalent of the Contest details page below — confirmed needed.                                                                   |
| 6   | Participated Contest History Page                         | ⬜ Not started |                                                                                                                                          |
| 7   | Participated Contest Details Page                         | ⬜ Not started |                                                                                                                                          |
| 8   | Library Page (Case Studies + Articles written, Bookmarks) | ⬜ Not started | Includes status beyond Draft/Published: **Pending Review**, **Rejected** (since Resources requires Admin review for Member submissions). |
| 9   | Create/Edit Case Study or Article Page                    | ⬜ Not started |                                                                                                                                          |
| 10  | Draft Preview Page (private view)                         | ⬜ Not started |                                                                                                                                          |

**Resolved:**

- **Mentor-badge dashboard placement**: depends on the underlying account type, not a separate dashboard.
    - If the badge holder is a **Member**, all Mentor-related capabilities (judging, speaker info, etc.) surface within their existing **Member Dashboard Panel**.
    - If the badge holder is an **Admin**, they already have full Admin Dashboard access — no separate view needed. The one addition: in the Admin Dashboard's contest list, an Admin who is also a Judge on a given contest sees an indicator flagging that they're assigned as Judge there, making it easy to spot which contests need their judging attention.

---

## Summary

- **8 of 8** core product features fully covered — Mentorship has 3 open flags (see `mentorship-requirements.md`).
- **5 of 9** shared/supporting features covered.
- **1 of 1** foundational doc covered.
- **0 of 23** Landing Pages discussed.
- **0 of 10** Member Dashboard pages discussed.
- All 8 core product features now have at least a first pass. Remaining ground: the shared infrastructure pieces (Media Library, Thread System, Global Commenting, Rich Text Editor), and the two page-by-page UI/UX discussions (Landing Pages, Member Dashboard).
- Remaining shared infrastructure: Media Library, Thread System, Global Commenting, Rich Text Editor — all four are dependencies of the remaining core features, so worth resolving before or alongside them.
- Landing Pages and Member Dashboard Panel haven't been started — likely best tackled after the remaining core features, since page content depends on the underlying feature logic being settled first.
- **Major restructure (this round)**: Mentor is no longer a standalone role — it's now a "badge" attachable to Admin or Member accounts. Public profiles were also unified into a single model (`/u/{username}`) regardless of role. See `roles-and-auth.md` for full details; `contests-requirements.md`'s participation rule was updated accordingly.

## Notes for future updates

- When a feature's requirements doc is finished (no open flags/review comments outstanding), flip its row to ✅ and fill in the file path here.
- When a new shared/foundational concern surfaces mid-discussion (as Sponsors and Roles & Auth did), add it as its own row rather than folding it silently into an unrelated feature's file.
- Keep this file itself lightweight — it's an index, not a spec. Details always live in the linked feature file.
