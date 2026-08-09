# Admin & Super Admin Dashboard — Index

> Page-by-page UI/UX requirements for `apps/dashboard` (Admin and Super Admin only — distinct from the Member-facing `apps/web`). Business logic behind each capability lives in its own core feature file under `docs/requirements/` — files in this folder are about page structure, layout, and admin workflow specifically. Closely-related pages are grouped together to avoid clutter, same convention as `landing-pages/` and `member-dashboard/`.

**40 pages total**, compiled from every Admin-facing capability already implied across the existing docs, then restructured through review into List/Create/Edit/Details(tabs)/Settings(drawer) patterns for consistency.

### Foundational — `foundational.md`

| #   | Page                                                     | Status     |
| --- | -------------------------------------------------------- | ---------- |
| 1   | Admin Dashboard Overview                                 | ✅ Covered |
| 2   | Admin Login                                              | ✅ Covered |
| 3   | Admin Profile Settings                                   | ✅ Covered |
| 4   | Admin/Team Management                                    | ✅ Covered |
| 5   | Platform Settings (General / Comments / Mentorship tabs) | ✅ Covered |

### Events — `events-admin.md`

| #   | Page                                                                    | Status     |
| --- | ----------------------------------------------------------------------- | ---------- |
| 6   | Events List                                                             | ✅ Covered |
| 7   | Event Create Page                                                       | ✅ Covered |
| 8   | Event Edit Page                                                         | ✅ Covered |
| 9   | Event Details (Details / Attendees / Discussion tabs + Settings drawer) | ✅ Covered |
| 10  | Event Taxonomy (Type / Category / Tag tabs)                             | ✅ Covered |

### Contests — `contests-admin.md`

| #   | Page                                                                                                            | Status     |
| --- | --------------------------------------------------------------------------------------------------------------- | ---------- |
| 11  | Contests List                                                                                                   | ✅ Covered |
| 12  | Contest Create Page                                                                                             | ✅ Covered |
| 13  | Contest Edit Page                                                                                               | ✅ Covered |
| 14  | Teams Management (global)                                                                                       | ✅ Covered |
| 15  | Contest Details (Details / Judges / Registrations / Teams / Discussion tabs + Publish Result + Settings drawer) | ✅ Covered |

### Articles — `articles-admin.md`

| #   | Page                        | Status     |
| --- | --------------------------- | ---------- |
| 16  | Article Category Management | ✅ Covered |
| 17  | Articles List               | ✅ Covered |
| 18  | Article Create Page         | ✅ Covered |
| 19  | Article Edit Page           | ✅ Covered |

### Case Studies — `case-studies-admin.md`

| #   | Page                           | Status     |
| --- | ------------------------------ | ---------- |
| 20  | Case Study Category Management | ✅ Covered |
| 21  | Case Studies List              | ✅ Covered |
| 22  | Case Study Create Page         | ✅ Covered |
| 23  | Case Study Edit Page           | ✅ Covered |

### Products — `products-admin.md`

| #   | Page                   | Status     |
| --- | ---------------------- | ---------- |
| 24  | Product Tag Management | ✅ Covered |
| 25  | Products List          | ✅ Covered |
| 26  | Product Create Page    | ✅ Covered |
| 27  | Product Edit Page      | ✅ Covered |

### Mentorship — `mentorship-admin.md`

| #   | Page                              | Status     |
| --- | --------------------------------- | ---------- |
| 28  | Mentor Badge Management           | ✅ Covered |
| 29  | Mentor Badge Applications Queue   | ✅ Covered |
| 30  | Mentorship Eligibility Management | ✅ Covered |
| 31  | Mentorship Payment Records        | ✅ Covered |

### Shared / Cross-feature — `shared-admin.md`

| #   | Page                                    | Status     |
| --- | --------------------------------------- | ---------- |
| 32  | Sponsors & Tiers Management             | ✅ Covered |
| 33  | Contact Us Inbox                        | ✅ Covered |
| 34  | Payment/Transaction Records (global)    | ✅ Covered |
| 35  | Static/CMS Pages Management             | ✅ Covered |
| 36  | Media Library (full-library Admin view) | ✅ Covered |
| 37  | Comments/Threads Moderation Queue       | ✅ Covered |
| 38  | Home Page Customizer                    | ✅ Covered |
| 39  | About Page Content Management           | ✅ Covered |
| 40  | Testimonials Management                 | ✅ Covered |

**40 of 40** pages covered.

## Structural conventions established during this pass

- **List / Create / Edit / Details(tabs) / Settings(drawer)** — the dominant pattern across Events, Contests, Articles, Case Studies, Products. "Details" pages show read-focused tabs (info recap, related sub-resources); "Create"/"Edit" are the actual mutation forms; "Settings" drawers hold per-record configuration, separate from the main form.
- **Global vs. per-record settings** — genuinely platform-wide toggles (comment limits, mentor self-apply, etc.) live in the new Platform Settings page (#5), never scattered per-feature. Per-record settings (this Event's registration window, this Contest's winner tiers) live in that record's own Settings drawer.
- **Review workflows** — no standalone "Review Queue" pages; every reviewable content type's List page is filterable by status, and Approve/Reject/Curated/Featured/Block actions live on that record's Edit page.
