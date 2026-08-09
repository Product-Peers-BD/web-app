# Member Dashboard: Content Library

> Part of `docs/requirements/member-dashboard/` — see `README.md` in this folder for the full page index. Covers 3 of the 10 indexed pages: Library Page, Create/Edit Case Study or Article Page, Draft Preview Page — grouped as one connected authoring workflow.

---

## 1. Library Page

- **Tabs**: My Articles | My Case Studies | My Products | Bookmarks.
- **Sub-filter within My Articles / My Case Studies / My Products**: status — Draft, Pending Review, Published, Rejected (per `progress-report.md`'s existing note that this page needs the fuller status set beyond just Draft/Published). Products additionally surfaces a **Blocked** state (Admin can block a Product from further resubmission, per `products-requirements.md`) with the blocked reason shown inline.
- **Row fields**: Cover/banner thumbnail, Title, Status badge, Last edited date, CTA — "Edit" (Draft/Rejected), "View" (Published), "View Status" (Pending Review, read-only until Admin decides).
- **Rejected items** show the Admin's rejection reason inline (or on hover/expand) so the Member knows what to fix before resubmitting.
- **My Products tab specifically** also surfaces pending **team invitations** the Member has sent to collaborators (accepted/pending/rejected status per collaborator), since that's part of the creator's own product-management view per `products-requirements.md`.
- **Bookmarks tab**: bookmarked Articles/Case Studies only (Products have no Bookmark feature, per `products-requirements.md`).
- Editing a Product from this page links out to the Products feature's own create/edit form, reusing the same field set already defined in `products-requirements.md` — no separate "Create/Edit Product" page doc needed here.

## 2. Create/Edit Case Study or Article Page

- **Type selector** (Article vs Case Study) shown only when creating new; locked once saved (can't convert an Article into a Case Study after creation, consistent with them being separate entities/data models per `articles-and-case-studies-requirements.md`).
- **Shared fields**: Title, Cover Image (Media Library), Content (`packages/text-editor`), Category (the type's own separate Category list).
- **Article-only**: Curated Content checkbox — visible only if the author holds the Mentor badge or is Admin (plain Members never see it).
- **Case Study-only**: Client/Company Name (required), Industry (multi-select autocomplete), Case Study Problem, Tools/Stack (multi-select autocomplete), Associated Products (multi-select), Associated Contests (multi-select), External Link.
- **Save actions**:
    - **Save as Draft** — always available.
    - **Submit for Review** — shown for plain Members on first publish attempt; moves status to `Pending Review`.
    - **Publish** — shown directly (no review step) for Mentor-badge holders and Admin.
    - **Save** (no re-review) — for editing an already-Published piece, regardless of author type, per the one-time-approval rule.
- **Resubmission after Rejection**: same Create/Edit form, pre-filled with prior content plus the rejection reason shown at the top; re-submitting moves it back to `Pending Review`.

## 3. Draft Preview Page

- Private, author-only (and Admin) view — renders the piece using the **same layout as the public Single Article/Case Study Details page** (`landing-pages/single-article-details.md` / `single-case-study-details.md`), so the author sees exactly how it'll look once published.
- **No engagement actions** (Like/Bookmark/Comment/Share) — not applicable to unpublished content.
- A persistent banner: "Draft Preview — not yet published" (or "Pending Review" / "Rejected" as appropriate), with a link back to the Create/Edit page.

## Cross-feature dependencies

- **Articles & Case Studies** (`articles-and-case-studies-requirements.md`) — full source of truth for fields, review workflow, Curated flag.
- **Media Library** — Cover Image.
- **Rich Text Editor** (`packages/text-editor`) — Content field.
- **Landing Pages** (`single-article-details.md`, `single-case-study-details.md`) — layout reused for Draft Preview.

## Deferred / explicitly out of scope for this phase

- A fully separate "Create/Edit Product" page doc — not needed, cross-reference to `products-requirements.md` is sufficient.
- Per-edit re-approval / change history (already deferred platform-wide per `articles-and-case-studies-requirements.md`).
