# Feature: Articles & Case Studies

## Overview

**Articles** (renamed from "Resources" in the original brief) and **Case Studies** are two separate entities/data models — not one entity with a type field — but they share almost all of their logic. This doc defines the shared model once, then covers what's actually different about Case Studies.

---

## Shared model (both entities)

| Field                | Notes                                                                                                                                                                          |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Title                |                                                                                                                                                                                |
| Slug                 | Backend-generated (kebab-case) based on title, unique, editable later                                                                                                          |
| Cover Image / Banner | Via **Media Library** (`packages/media-library`)                                                                                                                               |
| Content              | Shared rich text editor (`packages/editor`, Tiptap-based), JSON output                                                                                                         |
| Category             | Same schema as Event Type (name, description, banner, image, is_active, slug) — but **Articles and Case Studies each have their own separate Category list**, not a shared one |
| Tags                 | Not planned for either, for now                                                                                                                                                |
| Author               | A Member, or anyone holding the **Mentor badge** (Member or Admin account) — see Authorship below. Admin can also author regardless of holding the badge.                      |
| Publishing Status    | `Draft` → `Pending Review` → `Published` / `Rejected` — same chain for both                                                                                                    |

**Co-authorship**: not supported. Exactly one author per Article/Case Study, for now.

### Category management

Admin manages Article Categories and Case Study Categories via **two separate dashboard pages**, each under its own feature area — not a shared/combined category management screen.

---

## Authorship & Review workflow

- **Plain Members** (no Mentor badge): submissions go to `Pending Review`. Admin-only review.
- **Mentor-badge holders** (Member or Admin account) and **Admin accounts generally** (regardless of whether they hold the badge): publish directly — no review step at all.
- **Rejection**: Admin leaves a rejection reason every time a submission is rejected; shown to the author to inform their next attempt.
- **Resubmission**: author can edit and resubmit after rejection, with no limit on the number of attempts.

### Post-publish edits

- **This phase**: Member submissions require **initial approval only**. Once a Member's Article/Case Study is approved and published, the Member can **edit it freely afterward with no further review** — the approval gate applies once, at first publish, not to every subsequent edit.
- **Mentor-badge holders and Admin**: edits are always live immediately, consistent with never needing review in the first place.
- **Future phase (not built now)**: per-edit re-approval for Member-authored content — i.e. requiring Admin to re-review each edit to a previously-published piece. Deferred; this phase only requires the one-time initial approval.

---

## Engagement (both entities)

- **Comments** — via `packages/comments` (Global Commenting), directly on the content — not via the Thread system.
- **Bookmarks** — any Member can bookmark a published Article/Case Study.
- **Like** — single reaction type only (no dislike or other reactions).
- **Share** — sharing to any external platform; requires proper OG image, title, description, and metadata for clean social-media previews.
- **Related content** — related Articles/Case Studies are surfaced (algorithm/logic TBD).
- **View count** — increments on every visit to the published piece, by guest or authenticated users alike.
- **Read time** — calculated via a read-time estimation algorithm (Medium-style), shown alongside the content.
- **Follow the author** — already covered by the **Follow System** in `shared-features.md`; not redefined here.

---

## Case Study–specific fields

Structure is **free-form** for this phase — no rigid enforced Problem/Solution/Result template. The main `Content` field (rich text) is where the author writes freely; the fields below are additional structured metadata alongside it.

| Field               | Required | Notes                                                                                                                                                                                                                                                                               |
| ------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Client/Company Name | Yes      |                                                                                                                                                                                                                                                                                     |
| Industry            | No       | **Multi-select.** Shared, organically-growing autocomplete master list (same pattern as Skills in `roles-and-auth.md`) — author types and gets suggestions from existing entries, can add new ones. Admin can also proactively add Industry entries from the Dashboard at any time. |
| Case Study Problem  | No       | Free text, separate from the main Content body                                                                                                                                                                                                                                      |
| Tools/Stack         | No       | **Multiple entries.** Same shared-autocomplete pattern as Industry — author-driven growth plus Admin can add entries anytime from the Dashboard.                                                                                                                                    |
| Associated Products | No       | Multi-select. Hard reference to existing, already-on-platform Products. Can select multiple.                                                                                                                                                                                        |
| Associated Contests | No       | Multi-select. Hard reference to existing, already-on-platform Contests. Can select multiple.                                                                                                                                                                                        |
| External Link       | No       | E.g. if the author wrote about this product/contest outside the platform                                                                                                                                                                                                            |

Note: **Associated Products** and **Associated Contests** are independent fields — a Case Study can reference any combination of both simultaneously (multiple Products _and_ multiple Contests), not an either/or choice.

> _(Note: the Industry/Tools-Stack shared-autocomplete pattern is intentionally documented per-feature rather than as a general `conventions.md` entry — per your call, not adding it as a standalone project-wide convention.)_

---

## Cross-feature dependencies

- **Rich Text Editor** (`packages/editor`) — Content field, both entities.
- **Media Library** (`packages/media-library`) — Cover Image/Banner, both entities.
- **Global Commenting** (`packages/comments`) — comments on both entities.
- **Follow System** (`shared-features.md`) — following an author.
- **Roles & Auth** (`roles-and-auth.md`) — Mentor badge determines review-bypass eligibility; Admin bypasses regardless of badge.
- **Products** and **Contests** features — Case Study's Associated Products/Contests fields reference these directly; full integration details TBD when those features (Products still pending) are further specced.

## Deferred / explicitly out of scope for this phase

- Tags — not planned for either entity.
- Co-authorship / multiple authors.
- Per-edit re-approval for Member-authored content after initial publish (future phase).
- Rigid structured Problem/Solution/Result template for Case Studies (using free-form for now).
