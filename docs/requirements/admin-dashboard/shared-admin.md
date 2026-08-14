# Admin Dashboard: Shared / Cross-feature

> Part of `docs/requirements/admin-dashboard/` — see `README.md` for the full page index. Covers 9 of the 40 indexed pages. Business logic source of truth: `shared-features.md`, `media-library-requirements.md`, `global-commenting-requirements.md` + `thread-system-requirements.md`, `home.md`, `about-us.md`.

---

## 1. Sponsors & Tiers Management

2 tabs:

### Tab: Sponsors

- CRUD list: Brand Logo, Banner, Brand/Company Name, Website URL, Description (≤255), Associated Contact Info (Admin-only), Featured toggle.
- **Delete blocked** if the Sponsor is currently attached to any Event/Contest — Admin must remove it from every attachment first.
- **Editing propagates live** everywhere the Sponsor is used.

### Tab: Tiers

- CRUD list: just a Title/label (Title Sponsor, Gold, Platinum, etc.).
- Same delete-blocked-while-in-use rule.

_(Note: the actual Sponsor↔Tier↔Event/Contest attachment happens on each Event's/Contest's own Create/Edit form, not here — this page manages the two global master lists only.)_

---

## 2. Contact Us Inbox

- List of all submissions: Contact Type, Name, Email, Phone, Message, submitted-by (Guest or linked Member account), Spam flag, Read/Unread, Status.
- **Search**: free-text across Name/Email/Message.
- **Filters**: Spam/Not spam, Read/Unread, Guest/Registered, Status, Contact Type.
- **Sort**: submission date.
- **Actions per submission**: Mark Read/Unread, Mark Spam, change Status (`Pending`/`In Progress`/`Reached`/`Resolved`/`Denied`), Admin note/feedback textarea.
- **View Details** opens a popup with full details and all actions in place.
- **Export** filtered list as CSV.

---

## 3. Payment/Transaction Records

- Global view across Events, Contests, and Mentorship registrations/bookings.
- **Filters**: Feature type, Date range, Status (`Pending`/`Paid`/`Failed`/`Refunded`), method (`manual`/`gateway`).
- **Manual payment entry**: when Admin manually adds a participant beyond capacity or promotes (future) — record payment manually, optionally entering gateway/method details even for a manual entry.
- **Invoice download** access per record.

---

## 4. Static/CMS Pages Management

- CRUD list of Pages: Title, Slug (editable), Content (`packages/text-editor`), Status (Draft/Published, default Draft, no scheduled publishing).
- **Slug collision check** against existing static app routes — validated on create/edit, error shown if it conflicts.
- Terms & Conditions and Privacy Policy are simply two Page records here, not special-cased.

---

## 5. Media Library (Admin view)

- Full library — every file from every uploader, per `media-library-requirements.md`.
- **Filter**: uploader, file type, upload date. **Search**: filename.
- **Bulk operations**: delete, download (available to all users within their own scope, but Admin's scope here is the entire library).
- Same delete-with-generic-warning pattern as everywhere else (no precise usage tracking, per the confirmed URL-based storage decision).

---

## 6. Comments/Threads Moderation Queue

Cross-Event/Contest view — the "find everything pending across every Event and Contest" page that `thread-system-requirements.md` flagged as belonging to the Admin Dashboard discussion.

- List of all Pending-Review threads across every Event/Contest in one place, rather than having to check each Event/Contest Details page individually.
- Same Approve/Reject/Pin/Announcement/Edit/Delete actions as the per-Event/Contest Discussion Moderation tabs — this page is a convenience aggregation, not a different capability.
- Comments/replies moderation (edit/delete any) also accessible from here, filterable by which thread/content they belong to.

---

## 7. Home Page Customizer

Per `home.md` — now covers both Home and About Us pages (extended earlier this session):

- Per-page ordered section list (Home's 12 sections, About's 7 sections).
- Drag-to-reorder within a page.
- Show/Hide per section: Guest only / Member only / Both.
- Data Source Mode selector for Home's Mentorship Spotlight (Featured/Random) and Case Studies Spotlight (Latest/Most Popular/Random) — no other section has a mode selector.
- No content editing here (titles/copy aren't editable from this tool) — only order, visibility, and mode.
- No preview mode, no undo — explicit Save per page.

---

## 8. About Page Content Management

Per `about-us.md`:

- **Mission/Story**: single record, headline + rich-text body.
- **Timeline**: CRUD list (Date/Period label, Title, Description, Icon/Image), Admin-ordered (not auto-sorted).
- **Values**: CRUD list (Icon, Title, Description).
- **Team**: picker of existing platform Users + Designation caption (not standalone entries) — search/select a User, enter their Designation, live Photo/Name/Social-Links pulled from their real profile.
- Stats has nothing to manage here — it's live, shared with Home's Stats bar (per the resolved flag).

---

## 9. Testimonials Management

Per `home.md`:

- CRUD list: Author Name, Author Photo, Author Designation/Company, Testimonial Text (≤250 chars suggested), Screenshot Image, Star Rating.
- Admin-controlled display order (drag-and-reorder).
- Active/Inactive toggle per testimonial (hide without deleting).
- No review workflow — Admin is both author and publisher.

---

## Cross-feature dependencies

- **Sponsors, Contact Us, Payment, Static/CMS Pages** (`shared-features.md`) — full source of truth for those four.
- **Media Library** (`media-library-requirements.md`).
- **Global Commenting**, **Thread System** — moderation queue.
- **Home**, **About Us** (`home.md`, `about-us.md`) — Customizer and content management.

## Deferred / explicitly out of scope for this phase

- Nothing new deferred here beyond what each source doc already defers.
