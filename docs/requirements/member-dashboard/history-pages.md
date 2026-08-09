# Member Dashboard: History Pages

> Part of `docs/requirements/member-dashboard/` — see `README.md` in this folder for the full page index. Covers 5 of the 10 indexed pages: Payment History, Participated/Registered Event History, Single Event Registration Details, Participated Contest History, Participated Contest Details — grouped since they share a consistent list+detail pattern.

---

## 1. Payment History

- List of all the Member's payment/transaction records across **Events, Contests, and Mentorship** (per the shared Payment pattern in `shared-features.md`).
- **Filters**: Feature type (Event/Contest/Mentorship), Date range, Status. **Status enum**: `Pending` (Bkash initiated, not yet confirmed) / `Paid` (confirmed — unlocks the booking/registration, per existing spec) / `Failed` (gateway attempt failed or abandoned) / `Refunded` (reserved for the future refund-handling feature, included now so no schema migration is needed later, but not actively used until that feature is built). Applies independently of the existing `manual`/`gateway` method tag per record.
- **Sort**: Date (newest/oldest).
- **Row fields**: Date, Feature title (linking to the relevant Event/Contest/Mentorship item), Amount, Status, Payment method tag (gateway/manual), **Download Invoice** button.

## 2. Participated/Registered Event History

- **Tabs**: Upcoming | Past.
- **Card/row fields**: Banner thumbnail, Title, Event Type, Date, Format, Registration status.
- Links into **Single Event Registration Details** (below) per row.

## 3. Single Event Registration Details

- Event summary: banner, title, type, date/time, format, venue if applicable.
- **Registration details**: submitted Registration Question answers, WhatsApp/phone on file.
- **Payment info** (if `is_premium`): amount, status, Download Invoice.
- **No self-cancel button.** Members cannot cancel an Event registration themselves — same policy as Contests. If a Member wants to cancel, they contact Admin (WhatsApp, Contact Us form, or phone), and Admin cancels it manually from the Admin Dashboard.
- If the event has passed: no attendance-tracking concept exists this phase — this section just shows the registration as historical.

## 4. Participated Contest History

- **Tabs**: Current/Ongoing | Past.
- **Row fields**: Banner thumbnail, Contest title, Team name, Status (Registered / Submitted / Awaiting Results / Results Published), Winner badge if applicable.
- Links into **Participated Contest Details** (below) per row.

## 5. Participated Contest Details

- Contest summary: banner, title, dates.
- **Team info**: team name/logo, current members, Team Leader indicator.
- **Submission**: view/edit submitted assets (Title, Summary, Supporting Document, Prototype, Presentation, Video) — editable only while the contest is still running (before end date/time), per `contests-requirements.md`.
- **Judge Feedback** — shown to the Member if left by a Judge/Admin (private, per-team, per `contests-requirements.md`; visible here since the viewer is a team member).
- **Score / Ranking** — team members always see their own team's score and ranking on this private dashboard page once available, **regardless of** the contest's public score/ranking visibility toggles, since those toggles govern the _public_ contest page, not a team's own private view of their own results.
- **Winner badge** — shown if this team won a tier, once results are published.

## Cross-feature dependencies

- **Payment** (`shared-features.md`) — Payment History source of truth.
- **Events** (`events-requirements.md`) — registration/cancellation logic.
- **Contests** (`contests-requirements.md`) — team, submission, judging, winner logic.

## Deferred / explicitly out of scope for this phase

- Event attendance tracking (no such concept exists yet in `events-requirements.md`).
- Refund handling for cancelled/paid Event or Contest registrations — not defined anywhere yet; flagging as a likely future need once cancellation-after-payment becomes common.
