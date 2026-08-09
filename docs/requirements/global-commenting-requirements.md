# Feature: Global Commenting System (`packages/comments`)

## Overview

Shared comment/reply system used in two contexts across the platform:

1. **Directly on content** — Articles, Case Studies, Products (a flat comment section attached to the piece of content itself).
2. **Inside Discussion threads** — Events and Contests' Discussion threads (`thread-system-requirements.md`) use this package to power the comments/replies _within_ each thread post.

One comment data model, one UI component set, reused everywhere — not rebuilt per feature. **Thread System has a hard dependency on this package** (a Thread's post is itself a "commentable" entity, per the polymorphic design below) — this is why Global Commenting is being specced first.

---

## 1. Data model

### Polymorphic "commentable" pattern

A Comment attaches to any `commentable_type` + `commentable_id` pair, rather than each feature having its own comments table:

| `commentable_type` | Notes                                                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------- |
| `article`          | Direct comments on a published Article                                                                        |
| `case_study`       | Direct comments on a published Case Study                                                                     |
| `product`          | Direct comments on a published Product                                                                        |
| `thread_post`      | Comments/replies on a Discussion thread's original post (Events/Contests — Thread System, specced separately) |

### Comment entity

| Field                                 | Notes                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `uuid`                                | Public identifier                                                                                                                                                                                                                                                                                                                                  |
| `commentable_type` / `commentable_id` | What this comment is attached to                                                                                                                                                                                                                                                                                                                   |
| `parent_comment_id`                   | `null` = top-level comment; set = a reply. **Only one level deep is ever enforced** — replying to a reply attaches as a sibling reply on the same parent (flattened), not a deeper nesting level.                                                                                                                                                  |
| `author_id`                           | The User who wrote it                                                                                                                                                                                                                                                                                                                              |
| `body`                                | Lightweight Tiptap JSON (see §2 — Bold/Italic/Link/Mention only, not the full editor schema)                                                                                                                                                                                                                                                       |
| `images`                              | Array of Media Library URLs. **Admin-configurable, platform-wide setting** for max images per comment/reply — same pattern as the character-limit and edit-permission toggles above. Default: **1**. Applied uniformly everywhere this package is used, including direct Article/Case Study/Product comments and Thread System's comments/replies. |
| `created_at`                          |                                                                                                                                                                                                                                                                                                                                                    |
| `edited_at`                           | `null` until first edit — drives the "(edited)" UI indicator                                                                                                                                                                                                                                                                                       |
| `deleted_at`                          | Soft delete — see §4                                                                                                                                                                                                                                                                                                                               |

- **Character limit**: **Admin-configurable, platform-wide setting** — same pattern as the edit-permission toggle in §4, not hardcoded. Default value: **2000 characters**.

---

## 2. Comment format

**Lightweight formatting, not the full editor** — confirmed: Bold, Italic, Link, plus **@mention** (a special inline node/mark, not a formatting option) and image attachment via the same Media Library integration pattern as `packages/text-editor`.

- Implemented as a **reduced Tiptap instance**, not a separate content engine — same extension-array-as-single-source-of-truth pattern, same JSON storage convention, same `validateTiptapJSONContent`-style guard at every read site. This keeps the whole platform on one rendering approach instead of maintaining two different content formats (full editor JSON vs. some other comment format).
- Extension set: `Bold`, `Italic`, `Link`, `Mention`, `Image` (attachment only — no resize/align/alt-text UI like the main editor; comment images are simple inline attachments, not part of a formatted document).
- **The underlying lightweight editor component is configurable by extension set**, not hardcoded to this exact list — Thread System (`thread-system-requirements.md`) reuses the same engine for its thread-post composer with `List` and `Blockquote` added on top. One shared lightweight-editor implementation, two configurations, rather than two separate mini-editors.
- No headings, lists, tables, blockquote, code, color/highlight, slash commands, drag handle, or any other block-level feature from the main editor — a comment box, not a document editor.
- **UI**: single-line-growing textarea-style input with an inline mini-toolbar (Bold/Italic/Link buttons) or markdown-shortcut equivalents (`**bold**`, `*italic*`), an image-attach button, and `@` triggering a mention-autocomplete popover — not the full fixed toolbar/bubble-menu/slash-command UI of the main editor.

### @mention

- Typing `@` opens an autocomplete popover, searching against **all platform users** (Member, Admin, Mentor-badge holders alike) by name/username.
- Selecting a user inserts a mention node, rendered as a **highlighted link to that user's `/u/{username}` public profile**.
- **No notification is triggered** — confirmed, since no notification system exists anywhere in the project yet. The mention is purely a rendered link; the tagged user isn't alerted. _(Revisit once a notification system is eventually built — this is the same open item already noted in `member-dashboard/dashboard-overview.md`.)_

---

## 3. Reply structure

- **One level of replies only**, confirmed platform-wide (already established for Discussion threads, now the formal rule for this package generally):
    - Comment One
        - Reply One (to Comment One)
        - Reply Two (to Comment One)
    - Comment Two
        - Reply One (to Comment Two)
- Replying to an existing **reply** doesn't create a third level — it posts as another sibling reply under that same top-level comment. The UI should make this clear (e.g. "Replying to {top-level author}'s comment," not "Replying to {reply author}'s reply"), even if the compose action was triggered from a specific reply.

---

## 4. Edit & Delete

### Edit

- **Admin-configurable, platform-wide setting**: "Allow Members to edit their own comments/replies" — a toggle, not a hardcoded rule. Default: `true`.
- When **enabled**: a Member can edit their own comment/reply freely, no time limit. Edited comments show an "(edited)" indicator.
- When **disabled**: no editing at all — a Member who wants to change something must delete and repost.
- **Admin can always edit any comment/reply**, regardless of this setting (moderation capability, same pattern as Admin's existing Discussion-thread edit/delete rights).

### Delete

- **A Member can always delete their own comment/reply** — not gated by the edit setting above; deletion is treated as lower-risk than editing.
- **Soft delete with a placeholder**: if a top-level comment has replies, deleting it doesn't cascade-remove the replies — it shows a **"[deleted]"** placeholder in place of the original body, and existing replies remain visible underneath (preserves conversation context).
- A reply with no replies-of-its-own (replies can't have replies anyway, per §3) is fully removed, no placeholder needed.
- **Admin can delete any comment/reply**, same placeholder-if-has-replies behavior.

---

## 5. Display & interaction

- **Sort**: **newest-first** for top-level comments (the latest comment appears at the top). Replies _within_ a comment display oldest-first/chronological — a reply conversation reads naturally top-to-bottom even while the top-level list itself is newest-first.
- **Pagination**: Load More, same pattern as other listing pages in this project.
- **Guest visibility**: Guests can **read** comments on public content (published Articles/Case Studies/Products, or a visible Discussion thread post) but must log in to post a comment or reply — consistent with every other authenticated-action pattern already established.
- **No comment-level Like/reaction this phase** — the existing Like feature is content-level only (Article/Case Study/Product), not per-comment.
- **No spam/report flagging on individual comments this phase** — Admin's existing moderation is edit/delete only; a dedicated "report this comment" flow is deferred, not built now.
- **Comment count**: derived by counting non-deleted Comment records for a given `commentable_type` + `commentable_id` — this is what already powers the "Comment count" shown in Article/Case Study/Product engagement bars (per those docs).

---

## 6. Technical structure

Following this project's established package convention — flat `src/`, matching Media Library and Rich Text Editor:

```
packages/comments/
└── src/
    ├── components/
    │   ├── comment-section.tsx     # top-level list + pagination for a commentable
    │   ├── comment-item.tsx        # single comment/reply render, edit/delete controls
    │   ├── comment-composer.tsx    # the lightweight input (mini-toolbar, mention, image attach)
    │   └── mention-autocomplete.tsx
    ├── context/                     # CommentProvider
    ├── hooks/                       # useComments(commentableType, commentableId)
    ├── types/
    ├── utils/                       # lightweight JSON validation (mirrors text-editor's guard)
    ├── api/
    └── index.ts
```

### Public API sketch

```typescript
<CommentSection
  commentableType="article" | "case_study" | "product" | "thread_post"
  commentableId={string}
/>
```

- Internally handles fetching, pagination (Load More), posting, editing, deleting, and the reply-flattening behavior from §3.
- Depends on `packages/media-library` for the image-attach seam (same event-based pattern as `packages/text-editor`'s Media Library integration — not a separate bespoke upload flow).
- Depends on Roles & Auth for the current user's identity (authorship, edit/delete permission checks) and for the @mention autocomplete's user search.

---

## Cross-feature dependencies

- **Media Library** (`media-library-requirements.md`) — image attachments on comments/replies.
- **Rich Text Editor** (`text-editor-requirements.md`) — shared architectural pattern (Tiptap JSON, extension-array-as-source-of-truth, validation-guard-at-every-read-site), not a shared component — this package has its own, much smaller extension set.
- **Roles & Auth** (`roles-and-auth.md`) — authorship, edit/delete permissions, @mention user search, public profile links.
- **Articles & Case Studies** (`articles-and-case-studies-requirements.md`), **Products** (`products-requirements.md`) — direct consumers via `commentable_type`.
- **Thread System** (`thread-system-requirements.md`) — depends on this package for a Thread post's comments/replies layer (`commentable_type = 'thread_post'`); also reuses this package's lightweight editor component with an extended extension set (List, Blockquote).

## Deferred / explicitly out of scope for this phase

- Notification on @mention — no notification system exists yet, platform-wide.
- Comment-level Like/reaction.
- Spam/report flagging on individual comments.
- Any richer formatting beyond Bold/Italic/Link/Mention/Image (no headings, lists, tables, etc. — intentionally a comment box, not a document editor).
