# Landing Pages — Index

> Page-by-page UI/UX requirements for the public site. Business logic behind each feature lives in its own file under `docs/requirements/` (e.g. `events-requirements.md`) — files in this folder are about page structure, layout, and content decisions specifically. Substantial pages get their own file; small/static pages are grouped together (e.g. `static-pages.md`) to avoid clutter.

| #   | Page                                              | Status      | File                                                |
| --- | ------------------------------------------------- | ----------- | --------------------------------------------------- |
| 1   | Landing Page (Home)                               | ✅ Covered  | `home.md`                                           |
| 2   | About Us                                          | ✅ Covered  | `about-us.md`                                       |
| 3   | Contact Us                                        | ✅ Covered  | `static-pages.md`                                   |
| 4   | Sponsors                                          | ✅ Covered  | `static-pages.md`                                   |
| 5   | Events Page                                       | ✅ Covered  | `events-page.md`                                    |
| 6   | Single Event Details                              | ✅ Covered  | `single-event-details.md`                           |
| 7   | Contests Page                                     | ✅ Covered  | `contests-page.md`                                  |
| 8   | Single Contest Details                            | ✅ Covered  | `single-contest-details.md`                         |
| 9   | Case Studies Page                                 | ✅ Covered  | `case-studies-page.md`                              |
| 10  | Single Case Study Details                         | ✅ Covered  | `single-case-study-details.md`                      |
| 11  | Mentorship Page                                   | ✅ Covered  | `mentorship-page.md`                                |
| 12  | Articles Page                                     | ✅ Covered  | `articles-page.md`                                  |
| 13  | Single Article Details                            | ✅ Covered  | `single-article-details.md`                         |
| 14  | Products Listing Page                             | ✅ Covered  | `products-listing-page.md`                          |
| 15  | Single Product Page                               | ✅ Covered  | `single-product-page.md`                            |
| 16  | Join Community Page                               | ✅ Covered  | `static-pages.md`                                   |
| 17  | Single Public Profile Page (`/u/{username}`)      | ✅ Covered  | `public-profiles.md`                                |
| 17b | Single Team Public Profile Page (`/t/{teamSlug}`) | ✅ Covered  | `public-profiles.md`                                |
| 18  | Register Page                                     | ✅ Covered  | `static-pages.md`                                   |
| 19  | Login Page                                        | ✅ Covered  | `static-pages.md`                                   |
| 20  | Terms & Conditions                                | ✅ Covered  | `../shared-features.md` (Static/CMS Pages)          |
| 21  | Privacy Policy                                    | ✅ Covered  | `../shared-features.md` (Static/CMS Pages)          |
| 22  | Global Search Results                             | ⬜ Deferred | Deferred to a future phase — not built this release |

**21 of 22** pages covered (Global Search excluded from the active count since it's deferred).

All inline flags across these pages, including `home.md`'s Stats bar metric set (now 8 metrics, shared with `about-us.md` and Join Community), are resolved — see `open-flags-tracker.md` for the full history.
