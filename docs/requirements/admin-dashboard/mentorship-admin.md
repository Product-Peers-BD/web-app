# Admin Dashboard: Mentorship

> Part of `docs/requirements/admin-dashboard/` — see `README.md` for the full page index. Covers 4 of the 40 indexed pages. Business logic source of truth: `roles-and-auth.md` (Mentor badge) and `mentorship-requirements.md` (eligibility, bookings, payment).

---

## 1. Mentor Badge Management

- List of all current Mentor-badge holders (Member or Admin accounts), with badge status (active/suspended).
- **Create Mentor from scratch**: First Name, Last Name, Google email — creates a standard Member account with the badge attached. **Duplicate-email check**: if the email already belongs to a registered Member, this redirects into pathway 2 below instead of creating a second account.
- **Attach badge to an existing Member**: search/select an existing registered Member, attach the badge.
- **Attach badge to an Admin** (self or another Admin): same badge, same underlying account — no separate login.
- **Suspend badge**: with an optional internal reason note (Admin-only visibility). If the holder has active Speaker/Judge assignments or Requested/Upcoming Mentorship bookings, a **warning popup** appears before confirming. On confirmed suspension: future assignment/booking blocked immediately; existing scheduled assignments/bookings are **not** auto-cancelled (Admin removes them manually if desired, from the relevant Event/Contest/Mentorship page).

---

## 2. Mentor Badge Applications Queue

- List of pending "Be a Mentor" self-applications (only relevant when the Platform Settings → Mentorship → self-apply toggle is on).
- **Accept** (attaches the badge, same as pathway 2 above) or **Reject** (with a reason, shown to the applicant).

---

## 3. Mentorship Eligibility Management

- List of all Mentor-badge holders, with Mentorship-eligibility status (eligible/not) and **how** eligibility was granted (Admin-direct vs. self-applied-and-approved, for audit purposes per `mentorship-requirements.md`).
- **Mark eligible directly** — any Mentor-badge holder, Admin action.
- **Applications sub-view**: pending self-applications for eligibility (only relevant when that Platform Settings toggle is on) — Accept/Reject with reason.
- **Revoke eligibility** — independent, simpler toggle, separate from suspending the badge entirely.
- **Per-mentor paid-session override**: force-enable or force-disable paid sessions for this specific mentor, regardless of the global Platform Settings toggle. Where the mentor sets their own session price (if paid is enabled for them) is also visible/editable here by Admin if needed.

---

## 4. Mentorship Payment Records

- All Mentorship session payment/transaction records, platform-wide (not per-mentor — this is the Admin-wide view; a mentor's own filtered view lives in their Member Dashboard's Mentorship Sessions page).
- Same underlying Payment/Transaction records as the global Payment Records page (`shared-admin.md`), pre-filtered to Mentorship — kept as its own page rather than just a filter state on the global one, since a Mentorship-specific view benefits from columns the generic view doesn't need (which mentor, session date, per-mentor earnings breakdown).

---

## Cross-feature dependencies

- **Roles & Auth** (`roles-and-auth.md`) — Mentor badge lifecycle.
- **Mentorship** (`mentorship-requirements.md`) — eligibility, bookings, payment.
- **Events**, **Contests** — Speaker/Judge assignment checks during badge suspension.
- **Payment** (`shared-features.md`) — underlying Payment/Transaction records.

## Deferred / explicitly out of scope for this phase

- Rating/feedback moderation (no ratings system exists yet, already deferred per `mentorship-requirements.md`).
