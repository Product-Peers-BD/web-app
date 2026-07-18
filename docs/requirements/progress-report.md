# Requirements Progress Tracker

> Living document — updated every time a feature's requirements doc is completed or meaningfully changed. Check this file instead of asking for a status recap.

Last updated: 2026-07-18

---

## Core product features (from the project brief)

| #   | Feature                                                 | Status         | File                                                        |
| --- | ------------------------------------------------------- | -------------- | ----------------------------------------------------------- |
| 1   | Events                                                  | ✅ Covered     | `docs/requirements/events-requirements.md`                  |
| 2   | Contests                                                | ✅ Covered     | `docs/requirements/contests-requirements.md`                |
| 3   | Case Studies                                            | ⬜ Not started | —                                                           |
| 4   | Resources (member-submitted articles / curated content) | ⬜ Not started | —                                                           |
| 5   | Mentorship (apply → review → book → 1:1 sessions)       | ⬜ Not started | —                                                           |
| 6   | Products (member builder directory)                     | ⬜ Not started | —                                                           |
| 7   | Sponsor Us                                              | ✅ Covered     | `docs/requirements/shared-features.md` (Sponsors section)   |
| 8   | Contact                                                 | ✅ Covered     | `docs/requirements/shared-features.md` (Contact Us section) |

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

## Foundational

| Feature                                                                     | Status     | File                                  |
| --------------------------------------------------------------------------- | ---------- | ------------------------------------- |
| Roles & Authentication (Super Admin, Admin, Mentor, Member, profile fields) | ✅ Covered | `docs/requirements/roles-and-auth.md` |

## Landing Pages (public interface)

> Page-by-page UI/UX logic — separate from the feature-level business logic docs above, but can surface new requirements/schema needs.

| #   | Page                                       | Status         | Notes                                                                                                                                      |
| --- | ------------------------------------------ | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | Landing Page                               | ⬜ Not started |                                                                                                                                            |
| 2   | About Us page                              | ⬜ Not started |                                                                                                                                            |
| 3   | Contact Us page                            | ⬜ Not started |                                                                                                                                            |
| 4   | Sponsors page                              | ⬜ Not started | Renamed from "Sponsor Us" — combines the sponsor showcase (past/current, as social proof) with the pitch/inquiry section for new sponsors. |
| 5   | Events Page                                | ⬜ Not started |                                                                                                                                            |
| 6   | Single Event Details page                  | ⬜ Not started |                                                                                                                                            |
| 7   | Contests Page                              | ⬜ Not started |                                                                                                                                            |
| 8   | Single Contest Details page                | ⬜ Not started |                                                                                                                                            |
| 9   | Case Studies Page                          | ⬜ Not started |                                                                                                                                            |
| 10  | Single Case Study Details page             | ⬜ Not started |                                                                                                                                            |
| 11  | Mentorship Page                            | ⬜ Not started |                                                                                                                                            |
| 12  | Articles Page                              | ⬜ Not started |                                                                                                                                            |
| 13  | Single Article Details Page                | ⬜ Not started |                                                                                                                                            |
| 14  | Products Listing Page                      | ⬜ Not started |                                                                                                                                            |
| 15  | Single Product Page                        | ⬜ Not started |                                                                                                                                            |
| 16  | Join Community Page                        | ⬜ Not started |                                                                                                                                            |
| 17  | Single Profile Page (Team, Mentor, Member) | ⬜ Not started |                                                                                                                                            |
| 18  | Register Page (Member)                     | ⬜ Not started |                                                                                                                                            |
| 19  | Login Page (Member)                        | ⬜ Not started |                                                                                                                                            |
| 20  | Terms & Conditions page                    | ⬜ Not started |                                                                                                                                            |
| 21  | Privacy Policy page                        | ⬜ Not started |                                                                                                                                            |
| 22  | Global Search Results page                 | ⬜ Deferred    | Confirmed necessary, but planned for a **future phase**, not this one.                                                                     |

**Resolved:**

- No Forgot Password page needed — Member auth has no password. Instead, Members can **link multiple OAuth providers** to one account (e.g. registered via Google, later connects LinkedIn too — or vice versa — and can log in with either afterward). _(Flag: this account-linking logic belongs in `roles-and-auth.md` — will add there.)_

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

**Still open:**

- Mentor/Judge dashboard views — undecided whether these live inside the Member Dashboard Panel or the Admin Dashboard. To be decided later.

---

## Summary

- **4 of 8** core product features fully covered.
- **3 of 7** shared/supporting features covered.
- **1 of 1** foundational doc covered.
- **0 of 22** Landing Pages discussed.
- **0 of 10** Member Dashboard pages discussed.
- Remaining core features: Case Studies, Resources, Mentorship, Products.
- Remaining shared infrastructure: Media Library, Thread System, Global Commenting, Rich Text Editor — all four are dependencies of the remaining core features, so worth resolving before or alongside them.
- Landing Pages and Member Dashboard Panel haven't been started — likely best tackled after the remaining core features, since page content depends on the underlying feature logic being settled first.

## Notes for future updates

- When a feature's requirements doc is finished (no open flags/review comments outstanding), flip its row to ✅ and fill in the file path here.
- When a new shared/foundational concern surfaces mid-discussion (as Sponsors and Roles & Auth did), add it as its own row rather than folding it silently into an unrelated feature's file.
- Keep this file itself lightweight — it's an index, not a spec. Details always live in the linked feature file.
