# Admin Dashboard: Case Studies

> Part of `docs/requirements/admin-dashboard/` — see `README.md` for the full page index. Covers 4 of the 40 indexed pages. Business logic source of truth: `articles-and-case-studies-requirements.md`. Structurally identical to `articles-admin.md`, kept as a separate file/section per the explicit "two separate dashboard pages" rule for categories, and to match the Landing Pages split of Articles vs. Case Studies.

---

## 1. Case Study Category Management

Simple CRUD list — own dedicated page, separate from Article Category Management.

---

## 2. Case Studies List

- Table/grid of all Case Studies, any author, any status.
- **Filters**: Status (Draft/Pending Review/Published/Rejected), Category, Industry, Author.
- **Sort**: Latest, Most Popular.
- **Row actions**: View / Edit.
- **Create** button → Case Study Create Page.
- Same "list replaces Review Queue" logic as Articles.

---

## 3. Case Study Create Page / 4. Case Study Edit Page

Shared form — full field set per `articles-and-case-studies-requirements.md`:

Title, Cover Image, Content, Excerpt (optional), Category (Case Study's own list), Author, Client/Company Name (required), Industry (multi-select, shared autocomplete), Case Study Problem, Tools/Stack (multi-select, shared autocomplete), Associated Products (multi-select), Associated Contests (multi-select), External Link.

**On the Edit Page, when status is `Pending Review`:**

- **Approve** / **Reject** (required reason) — same pattern as Articles.
- No Curated toggle — that's Articles-only, per the source doc.

- Admin can also proactively add new Industry and Tools/Stack entries directly from this form (or a small management affordance near the multi-selects), per the source doc's "Admin can also proactively add ... entries from the Dashboard at any time."

---

## Cross-feature dependencies

- **Articles & Case Studies** (`articles-and-case-studies-requirements.md`) — full source of truth.
- **Products**, **Contests** — Associated Products/Contests reference these directly.
- **Media Library**, **Rich Text Editor** — Cover Image, Content, Excerpt fallback.

## Deferred / explicitly out of scope for this phase

- Rigid structured Problem/Solution/Result template (already deferred, free-form Content stands).
- Per-edit re-approval after initial publish (already deferred platform-wide).
