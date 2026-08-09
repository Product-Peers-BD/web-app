# Member Dashboard Panel — Index

> Page-by-page UI/UX requirements for the logged-in Member's dashboard (part of `apps/web`, alongside the public Landing Pages). Business logic behind each feature lives in its own file under `docs/requirements/` — files in this folder are about page structure, layout, and content decisions specifically. Substantial pages get their own file; closely-related pages (list + detail pairs, or a single content workflow) are grouped together to avoid clutter, same convention as `landing-pages/`. **12 pages total** — the original 10 from the project brief, plus a Mentorship Sessions page and a Contest Judging page, both added after gaps were surfaced during drafting (see below).

| #   | Page                                                         | Status     | File                     |
| --- | ------------------------------------------------------------ | ---------- | ------------------------ |
| 1   | Dashboard Page (overview)                                    | ✅ Covered | `dashboard-overview.md`  |
| 2   | Profile Settings                                             | ✅ Covered | `profile-settings.md`    |
| 3   | Payment History                                              | ✅ Covered | `history-pages.md`       |
| 4   | Participated/Registered Event History Page                   | ✅ Covered | `history-pages.md`       |
| 5   | Single Event Registration Details Page                       | ✅ Covered | `history-pages.md`       |
| 6   | Participated Contest History Page                            | ✅ Covered | `history-pages.md`       |
| 7   | Participated Contest Details Page                            | ✅ Covered | `history-pages.md`       |
| 8   | Library Page (Case Studies + Articles written, Bookmarks)    | ✅ Covered | `content-library.md`     |
| 9   | Create/Edit Case Study or Article Page                       | ✅ Covered | `content-library.md`     |
| 10  | Draft Preview Page (private view)                            | ✅ Covered | `content-library.md`     |
| 11  | Mentorship Sessions (mentee bookings + mentor request inbox) | ✅ Covered | `mentorship-sessions.md` |
| 12  | Contest Judging (assigned-Judge workflow)                    | ✅ Covered | `judging.md`             |

**12 of 12** pages covered (10 originally listed + 2 added below).

**Three gaps surfaced while drafting, all now resolved:**

1. **Mentorship Sessions** — no dedicated page existed for Members to manage mentor bookings (as mentee) or their request inbox (as an eligible mentor). Resolved by adding **page 11** above.
2. **Products submissions** — the Library page's original scope only covered Articles + Case Studies + Bookmarks. Resolved by adding a **My Products** tab to the Library page in `content-library.md`.
3. **Contest Judging UI** — `contests-requirements.md` defines Judge actions in detail but never specified where in the Member Dashboard a badge-holding Member accesses them. Resolved by adding **page 12** above.
