# Feature: Events

## Overview

Events cover 4 recurring formats — **Mentor Sessions, Panel Discussions, Community Adda, Meetups** — each created manually by Admin (no auto-recurrence engine). All event types share **one data model**; "type" is just a field on the Event, not a separate schema per format.

Purpose: prove PPBD is active (upcoming/past events, recaps) and run actual RSVP/booking operations.

---

## Related entities

### Event Type

Defines the 4 formats (and any future ones) as admin-managed records, not hardcoded enums.

| Field       | Required | Notes                                     |
| ----------- | -------- | ----------------------------------------- |
| Name        | Yes      |                                           |
| Description | No       |                                           |
| Banner      | No       |                                           |
| Image       | No       |                                           |
| is_active   | No       | Default `true`                            |
| slug        | auto     | Backend-generated, unique, editable later |

**Rules:**

- An Event selects exactly **one** Type.
- `is_active = false` → type disappears from the type-picker when creating new events (existing events keep their type).
- If an active type is later set inactive **and events already exist under it**: those events, the type's single-type page, and each event's single-event page all stop appearing on the site.
- Admin can delete a Type only if **zero** events reference it (confirmation required). If events exist under it, deletion is blocked.

### Event Category

| Field       | Required | Notes                                     |
| ----------- | -------- | ----------------------------------------- |
| Name        | Yes      |                                           |
| Description | No       | Textarea, max 255 chars                   |
| Banner      | No       |                                           |
| Image       | No       |                                           |
| slug        | auto     | Backend-generated, unique, editable later |

Managed on its own dashboard page. Represents **audience** (e.g. Product Manager, BA, Marketer) rather than format.

**Rules:**

- An Event can select **one or more** Categories.
- No `is_active` field and no deletion-blocking logic — unlike Event Type, a Category can be deleted regardless of whether events currently reference it. On deletion, the category is simply removed from any events' category list — same behavior as Tag deletion.

### Event Tag

Represents **topic** (e.g. AI, Soft Skills), lighter-weight than Type/Category.

| Field       | Required | Notes                                     |
| ----------- | -------- | ----------------------------------------- |
| Name        | Yes      |                                           |
| slug        | auto     | Backend-generated, unique, editable later |
| Description | No       | Max 255 chars                             |
| Icon/Image  | No       |                                           |

**Rules:**

- No `is_active` concept.
- Managed on its own dashboard page, or created inline during event creation.
- An event can have one or more tags.
- Deleting a tag that's in use is allowed — it's simply removed from any events referencing it. Admin sees a warning first ("this tag is used in N event(s)") but deletion is not blocked.

---

## Event — fields & logic

| #   | Field                             | Required | Notes                                                                                                                                                                                       |
| --- | --------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Title                             | Yes      |                                                                                                                                                                                             |
| 2   | Banner                            | No       | Event banner image                                                                                                                                                                          |
| 3   | Description                       | Yes      | Rich text (Tiptap-based editor, JSON output) — shared editor component across Events/Articles/Case Studies/Contests. **Separate feature, discussed later.**                                 |
| 4   | Type                              | Yes      | Single select                                                                                                                                                                               |
| 5   | Category                          | Yes      | Multi-select                                                                                                                                                                                |
| 6   | Tag                               | No       | Multi-select                                                                                                                                                                                |
| 7   | Admin Notes                       | No       | Textarea, admin-only visibility                                                                                                                                                             |
| 8   | Speakers                          | Yes      | One or more mentors; each has: role (default "Speaker"; also Host, Mentor, etc.), Session Topic (optional), Session Duration (optional), Session Start/End Time (optional)                  |
| 9   | Event Start Date/Time             | Yes      |                                                                                                                                                                                             |
| 10  | Event End Date/Time               | Yes      |                                                                                                                                                                                             |
| 11  | Format                            | Yes      | Online / Physical / Hybrid                                                                                                                                                                  |
| 12  | Venue details                     | No       | Address + map link. Relevant when Format is Physical/Hybrid                                                                                                                                 |
| 13  | Activities Schedule               | No       | Mainly for Meetups/Community Adda. Ordered list of activities, each with: activity title (required), description (optional), start/end time (optional). Admin can drag-and-drop to reorder. |
| 14  | Videos                            | No       | One or more URLs (YouTube). Further logic TBD later.                                                                                                                                        |
| 15  | FAQ                               | No       | Multiple Q&A pairs                                                                                                                                                                          |
| 16  | Discussions                       | No       | See **Discussions** below                                                                                                                                                                   |
| 17  | Sponsors                          | No       | Add one or more Tiers, and one or more Sponsors under each Tier. See `shared-features.md` → Sponsors.                                                                                       |
| 18  | Image Gallery                     | No       | Add/remove multiple images, selected via the shared **Media Library** — separate feature, discussed later                                                                                   |
| 19  | Past Recap / After Note / Summary | No       | Admin-only to add, after event completion. Visible to all (logged-in + guest) on the event details page.                                                                                    |
| 20  | Publishing Status                 | —        | See **Publishing** below                                                                                                                                                                    |
| 21  | has_registration                  | No       | Default `false`                                                                                                                                                                             |
| 22  | is_premium                        | No       | Default `false`; only meaningful if `has_registration = true`                                                                                                                               |
| 23  | Seats/Capacity                    | No       | See **Capacity** below                                                                                                                                                                      |
| 24  | Waitlist                          | —        | **Deferred to Phase 2/3** — not in initial release                                                                                                                                          |
| 25  | Registration Questions            | No       | See **Registration Questions** below                                                                                                                                                        |

### Discussions (per event)

- Admin or any authenticated platform user can start a thread (lightweight, "minimalistic Facebook post" style).
- User-created threads require **admin approval** before appearing.
- **Per-Event setting**: Admin can independently allow **Mentor-badge holders to publish threads without approval** on this specific Event (default: off — Mentor-badge holders require approval same as plain Members, unless Admin enables this override for the event). Full behavior specced in `thread-system-requirements.md` § Publishing & moderation.
- Admin-created threads can be marked **Announcement**.
- Admin can **pin** any thread.
- Admin can **unapprove** a previously-approved thread, and can **edit or delete** any thread.
- Threads support **top-level comments**, each of which can have **one level of replies** (no nested replies-to-replies). E.g.:
    - Comment One
        - Reply One (to Comment One)
        - Reply Two (to Comment One)
    - Comment Two
        - Reply One (to Comment Two)
        - Reply Two (to Comment Two)
- Users can **@mention** other users by username within a comment or reply.
- A comment or reply can have an **Admin-configurable number of images** attached (default **1** — see `global-commenting-requirements.md`); a Discussion thread (the original post) can have **up to 5 images** attached (fixed, not configurable).
- Discussion threads themselves are powered by a shared **Thread system** package (`thread-system-requirements.md`); each thread's comments/replies are powered by the separate **Global Commenting system** package (`global-commenting-requirements.md`) — both shared Turborepo packages.

### Publishing

- Default status: **Draft** (not visible on site).
- Admin sets status to **Published** to make it visible.
- **Scheduled publish**: admin may set a future `scheduled_publish_at`, which cannot exceed the event's start date/time.
    - **Implementation note:** no background job needed. Visibility is computed at read time:
      `visible = (status == Published) AND (scheduled_publish_at IS NULL OR scheduled_publish_at <= now())`
    - A job/worker would only become necessary if publishing needs a side effect (e.g. notification email) — not required for MVP; revisit if that requirement appears later.

### Registration flow

- Controlled by `has_registration` (default `false`). If `false`, the event has no RSVP/booking — informational only.
- If `true`:
    - Registering requires an **authenticated member account**.
    - Registration requires a **WhatsApp/phone number** — if missing from the user's profile, it's requested during the registration flow. Backend rejects registration without it.
    - **Registration Questions** (optional): admin can define zero or more questions; each question can individually be marked required or optional (default: not required). Admin can view all members' answers from the dashboard.
    - **Registration open timing** (optional, independent field): admin may set `registration_start_at`.
        - If unset → registration opens immediately once the event is published.
        - If set → cannot exceed the event's start date/time. Until that moment, the frontend shows the opening date and a countdown; opens automatically once `now >= registration_start_at` (same read-time computation as publish scheduling — no job needed).
    - Admin can **manually and permanently close** registration at any time, independent of the above timing logic.

### Payment (is_premium)

- Only relevant when `has_registration = true`.
- `is_premium = false` (default) → free event.
- `is_premium = true` → paid:
    - Admin sets a payment amount.
    - Payment via **Bkash** during the registration flow; successful payment confirms the booking.
    - Invoice generated and downloadable by the member.
    - Both Admin and Member can view/track all payment + registration records, and download invoices, from their respective dashboards.

### Capacity

- Optional (remains optional for MVP even for premium events — no forced-required rule yet; revisit in Phase 2).
- Relevant mainly for premium and physical events.
- Once seats fill: registration UI shows **"Registration Closed / Sold Out"** — no waitlist or further visitor action in MVP.
- Admin can still manually add attendees beyond capacity from the dashboard; payment for those is handled manually (outside the automated Bkash flow) if the event is premium.

### Waitlist — **Phase 2/3, not building now**

Two documented variants for later: (1) waitlist activated once seats fill, admin manually promotes waitlisted members and handles payment manually; (2) "early waitlist" as pre-booking before registration opens, treated as priority attendees, admin manually onboards + collects payment before/during the event.

---

## Filtering & sorting

**Public event list + Admin dashboard**, both need:

- Filter: Event Type
- Filter: Date range
- Filter: Format (Online/Physical/Hybrid)
- Filter: Category
- Filter: Free vs Paid
- Filter: Tags
- Filter: Has-registration (yes/no)
- Sort: Title (A–Z / Z–A), Date (newest→oldest / oldest→newest)

---

## Roles & permissions

- **Admin**: full CRUD on Events, Types, Categories, Tags; approves/moderates Discussion threads; adds Past Recap; views all registrations, answers, and payments.
- **Mentor** (as Speaker): assigned to events, not an event-management role in this feature.
- **Member (authenticated)**: registers for events (if enabled), starts Discussion threads (pending approval), comments/replies.
- **Guest (unauthenticated)**: can view published events, recaps, and (presumably) approved discussion threads; cannot register or post.

---

## Cross-feature dependencies (defined elsewhere, referenced here)

- **Rich text editor** (Tiptap, JSON output) — shared with Articles, Case Studies, Contests.
- **Media Library** — dedicated feature for uploading/selecting any file type (images, PDFs, etc.) via a shared popup. **Storage backend: local disk this phase** (directory on the hosting server/VPS, not yet decided which host) — served via app-generated URLs; AWS S3 (with CDN-served URLs) is a planned future addition, not built now. Built as a pluggable storage-provider interface so swapping to S3 later doesn't require reworking calling code. Selecting one or more files returns an array of URLs, stored against whichever feature used it (Events' Image Gallery, Articles, Case Studies, etc.). Admin gets a dedicated dashboard menu to browse the full library; members writing Articles/Case Studies can browse their own uploaded files from the same picker. Planned as its own package in the Turborepo. Full logic TBD in a dedicated discussion.
- **Global Commenting system** (`global-commenting-requirements.md`) — a shared package (own directory under `packages/` in the Turborepo), used across Articles, Case Studies, Products, and Events' Discussion threads (and anywhere else comments are needed).
- **Thread system** — a separate shared package (its own `packages/` directory), distinct from Global Commenting. Used by **Events and Contests Discussion threads only** — Articles, Case Studies, and Products use Global Commenting directly, not Thread System (see `articles-and-case-studies-requirements.md`, `products-requirements.md`). Each Discussion thread's comments/replies are then powered by the Global Commenting package.
- **Sponsors** — Tier + Sponsor master lists managed globally by Admin; attached per-Event via Tier→Sponsors association. See `shared-features.md` → Sponsors.
- **Mentor Session 1:1 booking** — mentor sets availability/duration; can cancel or deny requests. Full logic TBD in the Mentorship feature discussion.
- **Bkash payment + invoicing** — likely reused by Mentorship (if paid sessions exist there); confirm overlap when discussing Mentorship.
- **Users, Roles & Auth** — not yet a defined feature area; Events already assumes Admin/Member/Mentor roles, phone/WhatsApp on profile, and authentication. Recommend defining this as its own foundational feature before or alongside the remaining ones.

## Project-wide conventions surfaced here (apply beyond Events)

- Every entity needing a public identifier gets a backend-generated, editable, **unique slug** (Event, Event Type, Event Category, Event Tag — and later Articles, Contests, Case Studies, etc.).
- API responses/URLs expose only a generated **UUID**, never the internal integer primary key. Suggested pattern: keep an internal auto-increment int PK for joins/index performance, add an indexed `uuid` column (consider UUIDv7 for index locality) generated on insert, expose only that externally.

---

## Deferred / explicitly out of scope for MVP

- Waitlist (both variants)
- Required capacity enforcement rules
- Notification-triggered background jobs
