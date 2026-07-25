# Feature: Products

## Overview

A directory of products built/submitted by community members — proof that PPBD members are actually building things. Admin-reviewed before publishing (with a bypass for Admin's own submissions).

---

## Creation fields

| Field              | Required      | Notes                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------ | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Product Name       | Yes           |                                                                                                                                                                                                                                                                                                                                                                                          |
| Banner             | Yes (assumed) | Via **Media Library**                                                                                                                                                                                                                                                                                                                                                                    |
| Industry           | No            | Multi-select. Same shared, organically-growing autocomplete master list as Case Studies' Industry field.                                                                                                                                                                                                                                                                                 |
| Description        | Yes (assumed) | Rich text via `packages/editor` (Tiptap, JSON), consistent with Articles/Case Studies                                                                                                                                                                                                                                                                                                    |
| Gallery            | No            | Multiple image upload, via **Media Library**                                                                                                                                                                                                                                                                                                                                             |
| Product URL / Link | No            | Live product link                                                                                                                                                                                                                                                                                                                                                                        |
| Stage              | Yes           | Fixed enum: `MVP` / `BETA` / `LIVE` (suggested additions: `IDEA` and a terminal `PAUSED`/`SUNSET` state — your call whether to add now or keep the 3-value set)                                                                                                                                                                                                                          |
| Tags               | No            | Multi-select. Same lightweight schema/behavior as Event Tag (name, backend-generated slug, optional description ≤255 chars, optional icon; no `is_active`; deleting a tag in use just removes it from referencing products, doesn't block deletion). Own dedicated Product Tag list, managed on its own dashboard page — or created inline during product creation, mirroring Event Tag. |
| Problem it solves  | No            | Free text                                                                                                                                                                                                                                                                                                                                                                                |
| Company/Team Name  | No            |                                                                                                                                                                                                                                                                                                                                                                                          |

### Team / Company section

- **Team members**: creator searches and adds one or more existing platform-registered users, each with a designation/role (e.g. Founder, Product Manager, CEO).
- **Creator's own designation/role**: also set by the creator for themselves on the product.
- **Invitation, not automatic membership**: an added member does **not** appear on the Product's public detail page until they **accept** the invite from their own Member Dashboard. They can also **reject** it. Until accepted, they're invisible on the product.
- **Edit permissions**: for this phase, **only the creator** can edit the product. _(Future phase: creator will be able to delegate edit permission to accepted team members — not built now.)_

---

## Review workflow

- **Member and Mentor-badge holders**: submissions require Admin review (`Draft` → `Pending Review` → `Published`/`Rejected`).
- **Admin**: bypasses review entirely — this is the **opposite** of the Articles/Case Studies pattern, where Mentor-badge holders (including Admin-with-badge) also bypass. For Products, **only Admin bypasses**; holding the Mentor badge does **not** grant a Products review bypass.
- **Rejection**: same pattern as Articles/Case Studies — Admin leaves a required rejection reason, shown to the creator; unlimited resubmission attempts.
- **Blocking resubmission** (Products-specific, no equivalent elsewhere): Admin can additionally **block** a specific Product from further resubmission entirely, with a required reason.
    - The creator can find their blocked product(s) via a filter in their dashboard.
    - The blocked reason is visible to the creator on that product's details page (dashboard side, not public).
- **Post-publish edits**: same "initial approval only" rule as Articles/Case Studies — once approved and published, the creator can edit freely with no further review this phase. _(Future phase: per-edit re-approval, plus a change-history/audit log — not built now.)_

---

## Featured

- 100% Admin-initiated — there is **no author-side toggle** to request/self-mark Featured status (unlike Curated Content on Articles, where Mentor-badge authors could self-mark).
- Suggested API filter param, consistent with existing boolean-flag naming: `?is_featured=true`.

---

## Landing Pages (public)

### Product Listing page

- Filterable grid.
- Filters: Industry, Stage, Tag.
- Card contents: product name, industry badge, product thumbnail.

### Product Detail page

- Name, banner, full description, gallery, industry, stage, product URL.
- **Company/Team info** section — company/team name, and each accepted (not just invited) team member with their designation/role.
- **Related Case Studies** section — see below.
- Engagement actions (see below).

---

## Related Case Studies (reverse link — creator-curated, not automatic)

- The Case Study → Product link (defined in `articles-and-case-studies-requirements.md`) is **one-directional at the data level** — nothing shows automatically on the Product side.
- However, the Product's **creator** can, from their edit panel, **manually select which of the Case Studies that already reference this Product** should be surfaced in a **"Related Case Studies"** section on the Product's public detail page.
- This is opt-in curation, not a full automatic reverse listing — creator chooses which ones to feature, not required to show all of them.
- Those Case Studies can be authored by **anyone** (the product creator or any other platform member) — authorship of the Case Study is irrelevant to whether the Product creator can feature it here.

---

## Engagement (Product Detail page)

Any authenticated Member can:

- **Like** the product (single reaction, consistent with Articles/Case Studies — no dislike/other reactions).
- **Comment and reply** — via `packages/comments` (Global Commenting), same as Articles/Case Studies.
- **Share** to any external platform — requires proper OG image/title/description metadata.
- **View count** — increments on every visit to the product's detail page, guest or authenticated, consistent with Articles/Case Studies.
- No **Bookmark** feature for Products (unlike Articles/Case Studies, which do support it).

**Deferred to a future phase (explicitly not built now):**

- Submit a query to the Product owner.
- Submit a review/rating.

---

## Cross-feature dependencies

- **Rich Text Editor** (`packages/editor`) — Description field.
- **Media Library** (`packages/media-library`) — Banner, Gallery.
- **Global Commenting** (`packages/comments`) — comments/replies on the product.
- **Roles & Auth** (`roles-and-auth.md`) — review-bypass rule for Products diverges from Articles/Case Studies (Admin-only bypass here, not Mentor-badge-based) — worth a cross-reference note there so the difference isn't missed later.
- **Case Studies** (`articles-and-case-studies-requirements.md`) — source of the Associated Products link that powers Related Case Studies here.

## Deferred / explicitly out of scope for this phase

- Submit query to Product owner.
- Submit review/rating.
- Per-edit re-approval + change history/audit log for post-publish edits.
- Creator delegating edit permission to accepted team members.
