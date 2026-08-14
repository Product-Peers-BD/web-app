# Admin Dashboard: Articles

> Part of `docs/requirements/admin-dashboard/` — see `README.md` for the full page index. Covers 4 of the 40 indexed pages. Business logic source of truth: `articles-and-case-studies-requirements.md`.

---

## 1. Article Category Management

Simple CRUD list — matches Event Category's schema (Name, Description, Banner, Image, slug). Own dedicated page, per the source doc's explicit "two separate dashboard pages" rule (not combined with Case Study Categories).

---

## 2. Articles List

- Table/grid of all Articles, any author, any status.
- **Filters**: Status (Draft/Pending Review/Published/Rejected), Category, Curated (yes/no), Author.
- **Sort**: Latest, Most Popular (view count), Title.
- **Row actions**: View (public page, opens in new tab) / Edit (→ Article Edit Page).
- **Create** button → Article Create Page.
- This list replaces a standalone "Review Queue" — filtering to `Pending Review` here does the same job.

---

## 3. Article Create Page / 4. Article Edit Page

Shared form, two entry points — full field set per `articles-and-case-studies-requirements.md`:

Title, Cover Image, Content (`packages/text-editor`), Excerpt (optional, new field added when Rich Text Editor was specced), Category, Author (always the account creating/editing — no on-behalf-of authoring, same as every other content type), Curated Content checkbox.

**On the Edit Page specifically, when status is `Pending Review`:**

- **Approve** button → status becomes `Published`.
- **Reject** button → required rejection reason textarea, status becomes `Rejected`, reason shown to the author.
- Admin editing **their own or any other author's** Article is always allowed, regardless of status — this is the moderation capability, distinct from the review action itself.

**Curated toggle**: visible and editable by Admin on any Article (published or not), per the existing "Admin can mark or unmark curated status on _any_ article" rule — not gated by status.

---

## Cross-feature dependencies

- **Articles & Case Studies** (`articles-and-case-studies-requirements.md`) — full source of truth.
- **Media Library**, **Rich Text Editor** — Cover Image, Content, Excerpt fallback.
- **Roles & Auth** (`roles-and-auth.md`) — Mentor-badge/Admin review-bypass rule (relevant context even though Admin's own page bypasses review by definition).

## Deferred / explicitly out of scope for this phase

- Author-on-behalf-of-another-user authoring (flagged above, defaulting to no).
- Per-edit re-approval after initial publish (already deferred platform-wide).
