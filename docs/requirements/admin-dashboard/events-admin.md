# Admin Dashboard: Events

> Part of `docs/requirements/admin-dashboard/` — see `README.md` for the full page index. Covers 5 of the 40 indexed pages. Business logic source of truth: `events-requirements.md`.

---

## 1. Events List

- Table/grid of all Events, any status (Draft/Published), any Type.
- **Filters**: Event Type, Date range, Format, Category, Free vs Paid, Tags, Has-registration, Publishing Status.
- **Sort**: Title, Date (created or start — Admin likely wants start-date sort as default).
- **Row actions**: View (→ Event Details), Edit (→ Event Edit Page), Delete (blocked if events exist under a referenced Type per the deletion rule, but that's Type-level — an individual Event itself has no stated delete-restriction, so allowed with confirmation).
- **Create** button → Event Create Page.

---

## 2. Event Create Page / 3. Event Edit Page

Shared form component, two entry points — full Event field set per `events-requirements.md`:

Title, Banner, Description (`packages/text-editor`), Type (single-select), Category (multi-select), Tag (multi-select, or create inline), Admin Notes, Speakers (one or more Mentors, each with role/topic/duration/times), Event Start/End Date-Time, Format, Venue details, Activities Schedule (ordered, drag-to-reorder), Videos (YouTube URLs), FAQ, Sponsors (Tier→Sponsor picker), Image Gallery (Media Library), Past Recap (only shown/editable once the event has ended), Publishing Status.

- **Registration-related fields** (`has_registration`, `is_premium` + amount, Capacity, `registration_start_at`, Registration Questions) live in the **Event Details Settings drawer only**, not this Create/Edit form — the Create/Edit form covers the event's own content/info; registration mechanics are configuration, which is exactly what the Settings drawer pattern was for.
- Save as Draft / Publish, per the existing scheduled-publish logic (`scheduled_publish_at`, read-time visibility computation, no background job).
- **Post-creation reminder**: after saving a new Event for the first time, show Admin a message reminding them that registration/capacity/Registration Questions settings haven't been configured yet (since those live in the Settings drawer, not this form — see the split above), with an option to jump straight into the Event Details page with the Settings drawer already open. Reduces the risk of Admin forgetting to configure registration before publishing.

---

## 4. Event Details

3 tabs, no page-level actions besides the Settings icon.

### Tab: Details

Read-focused recap of the event's info (same fields as Create/Edit, display-only here — editing happens via the separate Edit Page, linked from this tab).

### Tab: Attendees

- List of all registrations: member name/profile link, registration date, answers to Registration Questions, payment status (if `is_premium`), invoice link.
- **Manually add an attendee** beyond capacity (per `events-requirements.md`) — payment handled manually if premium, logged as a `manual` Payment record.
- Export list (CSV).

### Tab: Discussion Moderation

- List of all Discussion threads on this event: status (Pending Review/Approved/Rejected), pinned/announcement badges.
- **Actions**: Approve / Reject (required reason) / Unapprove / Pin / Mark Announcement / Edit / Delete — per `thread-system-requirements.md`.
- Comments/replies within each thread are visible here too (read + moderate via the same Global Commenting edit/delete admin rights), not a separate page.

### Settings drawer (page-level, not a tab)

Per-event configuration: `has_registration`, `is_premium` + amount, `registration_start_at`, Capacity, Registration Questions (add/edit/remove, mark required/optional), manual registration-close toggle, and the "allow Mentors to publish threads without approval on this event" setting (`events-requirements.md`).

---

## 5. Event Taxonomy

3 tabs: **Type**, **Category**, **Tag** — each a simple CRUD list matching its entity's field set from `events-requirements.md`:

- **Type**: Name, Description, Banner, Image, `is_active` toggle. Delete blocked if any Event references it.
- **Category**: Name, Description (max 255), Banner, Image. Delete always allowed, detaches from referencing Events.
- **Tag**: Name, Description (max 255), Icon/Image. Delete always allowed (with a warning showing usage count), detaches from referencing Events.

---

## Cross-feature dependencies

- **Events** (`events-requirements.md`) — full source of truth.
- **Media Library**, **Rich Text Editor** — Banner/Gallery, Description.
- **Thread System**, **Global Commenting** — Discussion Moderation tab.
- **Sponsors** (`shared-features.md`, managed via `shared-admin.md`) — Sponsors field on the Create/Edit form references the global Sponsor/Tier lists.

## Deferred / explicitly out of scope for this phase

- Attendee list CSV export (flagged above as a new addition, not confirmed).
