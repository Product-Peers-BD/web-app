# Admin Dashboard: Products

> Part of `docs/requirements/admin-dashboard/` — see `README.md` for the full page index. Covers 4 of the 40 indexed pages. Business logic source of truth: `products-requirements.md`.

---

## 1. Product Tag Management

Simple CRUD list — matches Event Tag's schema (Name, Description ≤255, Icon/Image, no `is_active`, delete detaches without blocking).

---

## 2. Products List

- Table/grid of all Products, any creator, any status.
- **Filters**: Status (Draft/Pending Review/Published/Rejected/**Blocked**), Industry, Stage, Tag, Featured (yes/no).
- **Sort**: Latest, Most Popular.
- **Row actions**: View / Edit.
- **Create** button → Product Create Page.
- **Blocked products** are visible here too (with the block reason shown) — this list is the creator-facing equivalent of the "filter to blocked products" view mentioned in `products-requirements.md`, now available to Admin as well.

---

## 3. Product Create Page / 4. Product Edit Page

Shared form — full field set per `products-requirements.md`:

Product Name, Banner, Industry (multi-select), Description, Excerpt (optional), Gallery, Product URL, Stage (`IDEA`/`MVP`/`BETA`/`LIVE`/`PAUSED`/`SUNSET`), Tags (multi-select or create inline), Problem it solves, Company/Team Name, Team members (creator's designation + invited collaborators — Admin can view invite status but the accept/reject action itself belongs to the invited Member, not Admin), Related Case Studies (creator-curated selection; Admin can also edit this on the creator's behalf, consistent with Admin's general edit-any-content capability).

**On the Edit Page, when status is `Pending Review`:**

- **Approve** / **Reject** (required reason).
- **Block resubmission** (required reason) — Products-specific, no equivalent on Articles/Case Studies. Sets status to `Blocked`; the creator sees the reason on their own dashboard-side product page.

**Featured toggle**: Admin-only, no author self-mark (unlike Curated on Articles) — available here on any Published product.

---

## Cross-feature dependencies

- **Products** (`products-requirements.md`) — full source of truth.
- **Media Library**, **Rich Text Editor** — Banner, Gallery, Description, Excerpt fallback.
- **Case Studies** — Related Case Studies field references Case Studies that link back to this Product.

## Deferred / explicitly out of scope for this phase

- Admin acting on behalf of a Member for team-invite accept/reject (that stays the invited Member's own action).
- Per-edit re-approval, creator delegating edit permission (already deferred platform-wide per `products-requirements.md`).
