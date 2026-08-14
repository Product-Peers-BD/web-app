# Feature: Thread System (`packages/threads`)

## Overview

Discussion-thread system powering the "Discussions" tab on **Events and Contests only** — Articles, Case Studies, and Products use Global Commenting directly instead (see `global-commenting-requirements.md`).

A Thread is the original post ("minimalistic Facebook post style," per `events-requirements.md`/`contests-requirements.md`); each Thread's comments/replies are then powered by **Global Commenting** (`commentable_type = 'thread_post'`) — Thread System has a hard dependency on Global Commenting, which is why it was specced second.

---

## 1. Data model

| Field              | Notes                                                                                                                                                                                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `uuid`             | Public identifier                                                                                                                                                                                                                                            |
| `threadable_type`  | `event` \| `contest`                                                                                                                                                                                                                                         |
| `threadable_id`    | Which Event or Contest this thread belongs to                                                                                                                                                                                                                |
| `author_id`        | The User who created it — Admin or any authenticated Member                                                                                                                                                                                                  |
| `body`             | Extended lightweight Tiptap JSON — see §2                                                                                                                                                                                                                    |
| `images`           | Array of Media Library URLs, **max 5** (confirmed, per existing spec — distinct from the max-3 limit on individual comments/replies within the thread)                                                                                                       |
| `status`           | `Pending Review` \| `Approved` \| `Rejected`                                                                                                                                                                                                                 |
| `rejection_reason` | Set when `Rejected`, shown to the author — same pattern as Article/Case Study/Product rejection                                                                                                                                                              |
| `is_pinned`        | Admin-only toggle, independent of `is_announcement`                                                                                                                                                                                                          |
| `is_announcement`  | Admin-only toggle, independent of `is_pinned` — **can be set on any approved thread, not just Admin-created ones** (a small clarification versus the original wording in `events-requirements.md`, confirmed)                                                |
| `created_at`       |                                                                                                                                                                                                                                                              |
| `edited_at`        | `null` until first edit. When set, displayed as a full formatted timestamp — **"Last updated at 30 August, 2026 at 12:30 PM"** style, not just an "(edited)" tag (a deliberately more explicit indicator than Global Commenting's comment-level edit marker) |

---

## 2. Thread post format

**Extended lightweight editor** — same underlying architecture as Global Commenting's comment editor (reduced Tiptap, JSON storage, same validation-guard pattern), but with a **larger extension set**:

- Everything Global Commenting's comment editor has: Bold, Italic, Link, Mention, Image.
- **Plus**: Bullet List, Ordered List, Blockquote.
- Still **not** the full `packages/text-editor` — no headings, tables, code blocks, video embed, color/highlight, slash commands, or drag handle. A thread post is a richer post than a comment, but still not a document.

**Technical note**: this means Global Commenting's lightweight editor component needs to be **configurable by extension set**, not hardcoded to its own fixed list — Thread System reuses the same underlying engine with `List` and `Blockquote` added, rather than building a second, separate mini-editor from scratch. _(This is a small addendum to `global-commenting-requirements.md`'s §2 — the comment editor component should accept an extension-set configuration rather than assuming its own fixed set is the only consumer.)_

---

## 3. Publishing & moderation

Mirrors the review pattern already established for Articles/Case Studies/Products, adapted for threads:

- **Admin-created threads**: publish directly, no review step — same bypass pattern as every other content type.
- **Member-created threads**: default status `Pending Review`. Not publicly visible until Admin approves. The author can still see their own pending thread (marked "Pending Review") from wherever they view it.
- **Mentor-badge holders**: follow the same `Pending Review` flow as plain Members **by default** — but Admin can independently override this **per Event/Contest** via a new setting (see `events-requirements.md` / `contests-requirements.md`, updated) allowing Mentor-badge holders to publish threads on that specific Event/Contest without review, same bypass as Admin. Default: off (Mentors still require approval, same as Members) unless Admin turns it on for that Event/Contest.
- **Admin decision**: `Approved` (thread becomes visible) or `Rejected` (with a required reason, shown to the author — matches the Article/Case Study/Product rejection pattern). No limit on resubmission attempts after rejection, consistent with the rest of the platform.
- **Unapprove**: Admin can revert a previously-`Approved` thread back to not-publicly-visible at any time (doesn't delete it — same as the existing spec's "Admin can unapprove a previously-approved thread").
- **One-time approval, then free editing**: once a Member's thread is `Approved`, they can edit it afterward with no further review — same "initial approval only" rule already established for Articles/Case Studies/Products. Editing doesn't reset status back to Pending Review.
- **Admin can edit or delete any thread**, same as existing spec.

---

## 4. Author permissions

- **A Member-author can edit or delete their own thread post freely**, no time limit — confirmed. Edits show the full "Last updated at {date} at {time}" indicator (§1).
- **Deleting a thread removes it entirely, along with all its comments/replies** (hard delete, cascading) — this is a container being removed, not a single node within a conversation, so it doesn't follow Global Commenting's soft-delete-with-placeholder pattern (that pattern is for individual comments _within_ a still-existing thread).

---

## 5. Pinning & Announcements

Two independent Admin-only toggles, confirmed:

- **`is_pinned`**: any thread, regardless of author or Announcement status.
- **`is_announcement`**: any approved thread, regardless of author or pinned status. A thread can be both pinned _and_ an announcement at once — they're independent badges, not mutually exclusive states.

### Sort order (Discussion tab on an Event/Contest page)

1. **Pinned threads first** (regardless of Announcement status).
2. **Everything else, newest-first.**

Announcement is a visual badge on the thread card, not a separate sort tier — an Announcement that isn't pinned sits wherever it falls in the newest-first ordering among non-pinned threads.

---

## 6. Comments & replies

Fully delegated to Global Commenting (`global-commenting-requirements.md`) with `commentable_type = 'thread_post'`:

- One level of replies (flattened), newest-first top-level / oldest-first within replies, @mention (profile link only, no notification), Admin-configurable image limit per comment/reply (default 1), Admin-configurable edit toggle, soft-delete-with-placeholder, Admin-configurable character limit (default 2000) — all inherited as-is, nothing thread-specific to redefine here.

---

## 7. Technical structure

Following the established package convention:

```
packages/threads/
└── src/
    ├── components/
    │   ├── thread-list.tsx          # sort logic (pinned-first, newest-first), pagination
    │   ├── thread-card.tsx          # pinned/announcement badges, status badge
    │   ├── thread-composer.tsx      # extended lightweight editor (§2)
    │   └── thread-detail.tsx        # full post + embedded <CommentSection commentableType="thread_post" .../>
    ├── context/
    ├── hooks/                        # useThreads(threadableType, threadableId)
    ├── types/
    ├── utils/
    ├── api/
    └── index.ts
```

- **Pagination**: Load More, same pattern as everywhere else.
- Depends on `packages/comments` for the comments/replies layer (not reimplemented).
- Depends on `packages/media-library` for image attachment (thread post images and, transitively, comment images).
- The **Admin moderation queue** (reviewing all Pending threads across every Event/Contest in one place) is a Admin Dashboard concern — this doc specs the moderation _actions_ (approve/reject/pin/announce/edit/delete), but exactly where in the Admin Dashboard's navigation this queue lives is deferred to that upcoming discussion.

---

## Cross-feature dependencies

- **Global Commenting** (`global-commenting-requirements.md`) — comments/replies within every thread; also needs a small extension-set-configurability addendum (§2).
- **Media Library** (`media-library-requirements.md`) — thread post images (max 5, fixed) and comment images (Admin-configurable, default 1, inherited from Global Commenting).
- **Roles & Auth** (`roles-and-auth.md`) — authorship, Admin moderation permissions, Mentor badge determines eligibility for the per-Event/Contest approval-bypass setting.
- **Events** (`events-requirements.md`), **Contests** (`contests-requirements.md`) — the two (and only two) features that embed a Discussions tab; each also owns the per-Event/Contest "allow Mentors to publish without approval" setting referenced in §3.

## Deferred / explicitly out of scope for this phase

- Extending Thread System to Case Studies or any other content type (Global Commenting covers those directly instead — see the corrected scope note in `events-requirements.md`).
- Exact Admin Dashboard placement of the cross-Event/Contest moderation queue (belongs to the Admin Dashboard discussion).
