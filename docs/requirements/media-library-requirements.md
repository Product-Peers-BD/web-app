# Feature: Media Library

## Overview

Shared file/image upload, browse, and selection system — used by every feature that needs uploads (Events' Banner/Gallery, Articles/Case Studies' Cover Image, Products' Banner/Gallery, Sponsor logos, About Page Values/Timeline icons, Testimonials, etc.). No feature implements its own one-off upload handling.

Originally scoped as a `shared-features.md` entry; broken out into its own file once the technical UI/interaction spec made it comparable in depth to a core feature (component props, hooks, keyboard shortcuts, bulk operations, drag-reorder persistence).

---

## Scope: file types & validation

- **Accepted types**: JPEG, JPG, PNG, GIF, WEBP, and **PDF**.
- **Size limits, per type, controlled via environment variable** on both frontend and backend (e.g. `MEDIA_MAX_IMAGE_SIZE_KB`, `MEDIA_MAX_PDF_SIZE_MB`) — not hardcoded, so limits can be adjusted per environment without a code change. Backend enforcement is the source of truth; frontend reads the same values to fail fast with a client-side message before upload.
    - Defaults: **500KB for images, 2MB for PDFs.**
- No video upload this phase — Video fields (Events, Contests) remain plain YouTube URL fields, unrelated to Media Library.
- No total per-Member storage quota this phase — only the per-file size limit above.
- Type and size are validated both client-side (fast feedback) and server-side (never trust client validation alone).

## Storage backend

- **Local disk this phase** — a directory on the hosting server/VPS (exact host not yet decided), not S3. Built as a **pluggable storage-provider interface** (same pattern as `packages/payments`), so S3 can be added later as a second/replacement provider without reworking calling code in any feature.
- **Directory structure**: organized by upload date, e.g. `/uploads/{year}/{month}/{uuid}-{original-filename}` — avoids one giant flat directory, keeps filenames collision-proof via the UUID prefix while still being human-readable.
- **Serving**: files are served via a static-file route on `apps/api` (or a reverse-proxy static path). No signed/private URLs this phase — anyone with the direct URL can view the file, consistent with media being public-facing content (banners, galleries, logos) by default.

## File entity

| Field                        | Type           | Notes                                                                                                                       |
| ---------------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `uuid`                       | `string`       | Public identifier (real UUID, not the internal integer PK — per project-wide convention), also used in the storage filename |
| `name`                       | `string`       | **Editable display label** — user can rename after upload, independent of the original filename                             |
| `file_name`                  | `string`       | Original uploaded filename, preserved as-is (download name, alt-text fallback)                                              |
| `size`                       | `number`       | Bytes                                                                                                                       |
| `meta.width` / `meta.height` | `number`       | Images only                                                                                                                 |
| `meta.file_type`             | `string`       | e.g. `image`, `pdf`                                                                                                         |
| `url`                        | `string`       | Public URL                                                                                                                  |
| `dimensions`                 | `string`       | Display-formatted, e.g. `"1920x1080"`                                                                                       |
| `uploaded_by`                | User reference | Drives Member-scoped library filtering (see Permissions below)                                                              |
| `created_at` / `updated_at`  | timestamp      |                                                                                                                             |

**Usage tracking**: features store the Media Library **URL directly** (not a foreign key) — confirmed permanent, not a temporary default. This keeps every feature's Banner/Gallery/Cover Image fields as simple URL strings, at the cost of Media Library not automatically knowing which content references a given file via the database. See Deferred section for the "Used" indicator, which would need separate bookkeeping if built later.

---

## Permissions & scoping

- **Admin**: full dashboard page showing the **entire library** — every file, from every uploader. Filter by uploader, file type, upload date; search by filename.
- **Member**: sees only **their own previously uploaded files** — enforced **server-side** via an `uploaded_by` filter on the query, not a UI toggle. A Member never sees or browses another Member's uploads, whether in the picker or anywhere else.
- **Bulk operations (delete, download) are available to both Admin and Member** — each scoped to what they can already see: Admin can bulk-act on any files across the whole library, a Member can bulk-act only within their own uploads.

---

## Components

### `MediaUploader`

Drop-in uploader for a form field (Cover Image, Banner, Gallery, etc.).

- **Interaction**: click-to-upload, drag & drop into the upload zone, or a button to "Choose from existing."
- **Any of these three entry points open the same Media Library modal** — upload and select-from-existing happen in one unified modal, not separate flows.
- **On upload inside the modal**: the newly uploaded file appears at the **top** of the list and is **auto-selected**, added to whatever was already selected (does not clear/replace prior selection), up to `maxFiles`.
- **Insert button**: closes the modal, returns the selected media to the calling form.
- **Upload zone**: shows thumbnails of currently selected media (generic file-type icon for PDFs, since PDFs don't render as image thumbnails); supports removing an individual item or clearing all; supports **drag-to-reorder**, with the **saved order persisted in the database** — applies to **every multi-select field**, not just Gallery-type fields.
- **Real-time upload progress indicator** during upload.
- **`defaultValue`** pre-populates the uploader for edit pages (existing Banner/Gallery already on the record).

| Prop           | Type                           | Required | Default                         | Notes                                                                        |
| -------------- | ------------------------------ | -------- | ------------------------------- | ---------------------------------------------------------------------------- |
| `onChange`     | `(files: MediaFile[]) => void` | Yes      | —                               | Callback with selected media                                                 |
| `mode`         | `'single' \| 'multiple'`       | No       | `'multiple'`                    |                                                                              |
| `maxFiles`     | `number`                       | No       | **`5`** (platform-wide default) | Individual features may override (e.g. a Gallery field wanting a higher cap) |
| `defaultValue` | `MediaFile[]`                  | No       | `[]`                            | Pre-selected media, for edit pages                                           |
| `accept`       | `string`                       | No       | `'image/*,application/pdf'`     |                                                                              |
| `disabled`     | `boolean`                      | No       | `false`                         |                                                                              |
| `className`    | `string`                       | No       | `''`                            |                                                                              |

### `MediaLibrary`

The full browse/select modal — also usable standalone as the Admin dashboard page.

- **Browse**: paginated grid, with a grid/list view toggle.
- **Search**: by name, debounced.
- **Sort**: by name or date, ascending/descending.
- **Upload new media** from within the library (feeds the same "appears at top, auto-selected" behavior above).
- **Grid view**: multi-select.
- **Single preview view**: full media details + metadata (dimensions, size, upload date, etc.), with **Next/Previous navigation** and keyboard shortcuts:
    - **←** previous, **→** next, **Esc** close preview / return to grid.
- **Delete**: with confirmation. Warning copy is generic ("this file may currently be in use — deleting it could break where it's displayed"), not precise, per the URL-based (not FK-based) storage decision above.
- **Download**: single file or bulk-selected files.
- **Bulk operations**: delete, download — available to Admin (whole library) and Member (their own uploads), per Permissions above.

| Prop            | Type                           | Required | Default                                                      | Notes |
| --------------- | ------------------------------ | -------- | ------------------------------------------------------------ | ----- |
| `isOpen`        | `boolean`                      | Yes      | —                                                            |       |
| `onClose`       | `() => void`                   | Yes      | —                                                            |       |
| `selectedMedia` | `MediaFile[]`                  | Yes      | —                                                            |       |
| `onSelect`      | `(files: MediaFile[]) => void` | Yes      | —                                                            |       |
| `mode`          | `'single' \| 'multiple'`       | No       | `'multiple'`                                                 |       |
| `maxFiles`      | `number`                       | No       | `undefined` (uses the calling `MediaUploader`'s cap, if any) |       |
| `allowUpload`   | `boolean`                      | No       | `true`                                                       |       |

---

## Types

```typescript
interface MediaFile {
	uuid: string; // real UUID, per project-wide convention — never the internal integer PK
	url: string;
	name: string;
}

interface Media {
	uuid: string;
	name: string; // editable display label
	file_name: string; // original uploaded filename
	size: number;
	meta: {
		width: number;
		height: number;
		file_type: 'image' | 'pdf';
	};
	url: string;
	dimensions: string;
	uploaded_by: string; // uuid of the uploading User — drives Member-scoped filtering
	created_at: string;
	updated_at: string;
}
```

## API functions

```typescript
uploadMediaFiles(files);

getMediaFiles({
	search: string,
	sort_by: 'name' | 'created_at',
	sort_order: 'asc' | 'desc',
	page: number,
	per_page: number
	// uploaded_by is applied automatically server-side for Member callers,
	// not passed as a client-controlled param
});

deleteMediaFile(mediaUuid);
bulkDeleteMediaFiles(mediaUuids);
bulkDownloadMediaFiles(mediaUuids); // exact mechanism (zip vs sequential) is an implementation detail, not decided here
```

## State management

React Context internally (`MediaProvider`). `MediaUploader` provides its own context automatically; `MediaLibrary` used standalone must be wrapped in `MediaProvider` explicitly.

## Package structure

Flat `src/`, matching every other package in `conventions.md` — no extra nesting layer:

```
packages/media-library/
└── src/
    ├── components/   # MediaLibrary, MediaUploader, MediaProvider
    ├── context/
    ├── hooks/        # useMedia
    ├── types/
    ├── utils/
    ├── api/
    └── index.ts      # public exports
```

---

## Cross-feature dependencies

- **Payments** (`packages/payments`) — same pluggable-provider architectural pattern reused for the storage backend.
- Referenced by nearly every feature doc: Events, Contests, Articles/Case Studies, Products, Sponsors, About Page, Testimonials.

## Deferred / explicitly out of scope for this phase

- **"Used" indicator on each media item** (a simple boolean-style badge — not naming which feature/content, just flagging that _something_ references it) — considered, but deferred: it requires ongoing bookkeeping (a usage table every feature would need to write to/clean up on create/edit/delete) beyond the URL-based storage pattern already committed to. Revisit if precise-enough usage awareness becomes a real pain point.
- S3 (or any cloud storage) backend — local disk only, pluggable interface ready for it later.
- Video file support.
- Image editing (crop, resize).
- Media tagging.
- Advanced filters beyond search/sort/type/date.
- Virtual scrolling for large libraries.
- Image resizing, thumbnails, format conversion (e.g. auto-WebP) — files stored/served as-uploaded.
- Private/signed/access-controlled file URLs — everything is public-by-URL this phase.
- Per-Member total storage quota (only a per-file size limit exists).
