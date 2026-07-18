# Project Conventions

> Referenced from root `CLAUDE.md`. Applies to `apps/web`, `apps/dashboard`, `apps/api`, and shared `packages/*`.

## Apps

- **web** — Next.js app for the public website (landing pages) and user-facing dashboard.
- **dashboard** — Next.js app for admin and team members.
- **api** — Node.js backend (Express 5 + TypeScript, dev server on port 3500).
    - Express.js for routing.
    - PostgreSQL as primary database, via Prisma ORM.
    - Redis for caching and session management.
    - WebSockets for real-time communication.
    - JWT for authentication.
    - Bkash for payments.
    - AWS S3 for file storage.
    - Swagger for API documentation.
    - Sentry for error monitoring.

## Packages

Packages are created per feature/functionality; each has its own `src/` folder with an `index.ts` entry point.

- **`packages/api-services`** _(planned)_ — everything API-related shared across apps:
    - `src/services` — the common `apiService` fetcher function and all API functions (e.g. `getBlogPostService`).
    - `src/models` — API payload, response, and query-param types.
    - `src/enums` — API-related enums and parameter options.
- **`packages/utils`** _(planned)_ — common utility functions shared across apps (debounce, throttle, date helpers, etc.).
- **`packages/media-library`** _(planned)_ — shared file/image upload and picker, backed by S3 with CDN-served URLs. Used wherever any feature needs file/image uploads (Events, Contests, Case Studies, Articles, etc.) — no feature should implement its own upload handling.
- **`packages/editor`** _(planned)_ — shared Tiptap-based rich text editor component, JSON output. Used for all rich text fields (Event/Contest descriptions, Articles, Case Studies, etc.).
- **`packages/threads`** _(planned)_ — discussion-thread system (thread creation, approval, pinning, announcements). Used by Events and Contests discussion features, and later Case Studies.
- **`packages/comments`** _(planned)_ — global commenting/replies system, one level of replies, @mentions, image attachments. Used inside `packages/threads`-powered discussions, and directly on Articles/Case Studies.
- **`packages/payments`** _(planned)_ — payment handling, built as a pluggable provider interface. Bkash is the only implemented gateway for now; the interface should allow adding new gateways later without reworking calling code (Event/Contest registration, etc.).

> When any planned package is scaffolded, also add it to the Architecture section of root `CLAUDE.md`.

## Code style

- Never use `any`.
- Prefer custom hooks/components over large monolithic components.
- Keep all `useEffect` calls grouped together in a component for readability — avoid scattering them.
- Use `memo`, `useMemo`, `useCallback` when it meaningfully helps.
- Avoid hardcoded strings — use enums/constants instead.
- Remove dead/commented-out code; use `// TODO:` for anything intentionally deferred.
- Use Next.js `<Link>` instead of `<a>` for internal routing.
- Use `<Image>` instead of `<img>`.
- Never add a wrapper `<div>` just for grouping or to attach a `key` — use `<></>` for grouping, and `<Fragment key={...}>` when a `key` is needed.
- Server Components by default; add `"use client"` only when the component needs interactivity, browser APIs, or client-side hooks. Landing pages must be server-rendered (SSR/SSG).
- Use dynamic imports to lazy-load components when it helps initial load.
- Named exports everywhere, except where Next.js requires a default export (pages, layouts, route handlers, config files).
- Avoid `!important` in Tailwind/CSS.

## Import order

Enforced by the `import/order` ESLint rule. Groups, separated by a blank line, each sorted alphabetically:

1. External packages (including Node built-ins).
2. `@`-aliased imports (`@workspace/*`, `@/*`).
3. Relative imports (`../`, `./`).

## Types, models & enums

| Content                                     | Location                                    |
| ------------------------------------------- | ------------------------------------------- |
| API payloads, responses, query params       | `packages/api-services/src/models`          |
| API functions & common fetcher              | `packages/api-services/src/services`        |
| API-related enums & param options           | `packages/api-services/src/enums`           |
| Component props / utility / other app types | `<app>/types` (root of `web` / `dashboard`) |
| App-level enums                             | `<app>/enums` (root of `web` / `dashboard`) |

## Folder structure (per app: `web`, `dashboard`)

- `types/` — types & interfaces (app root)
- `enums/` — app-level enums (app root)
- `constants/` — static content as constants (app root)
- `configs/` — static arrays/objects: sidebar menus, top menus, footer menus, site title, social links, contact info
- `hooks/` — custom hooks
- `components/`
    - `features/<feature>` — feature-specific components (e.g. `features/blog`)
    - `snippets/<name>` — reusable components (e.g. `snippets/modal`)
- `contexts/` — app/feature-level contexts and providers
- `schemas/` — Zod validation/transformation schemas
- `utils/` — app-level utility functions

## Folder structure (`apps/api`)

All source lives in `src/` — entry point `src/index.ts`, Express app setup in `src/app.ts`:

- `configs/` — env loading and app configuration
- `constants/` — static content as constants
- `controllers/` — request handlers (thin — delegate to services)
- `enums/` — backend enums
- `middlewares/` — Express middleware (auth, error handling, validation)
- `routes/` — route definitions, mounted under `/api`
- `schemas/` — Zod validation schemas
- `services/` — business logic
- `sockets/` — WebSocket handlers
- `types/` — types & interfaces
- `utils/` — utility functions

The Prisma schema (`prisma/` at the app root) will be added when the database layer is set up.

## Shared UI package (`packages/ui`)

- Components → `packages/ui/src/components`
- Hooks → `packages/ui/src/hooks`
- Utils → `packages/ui/src/lib`

## Naming conventions

| Type                    | Convention                 | Example                                     |
| ----------------------- | -------------------------- | ------------------------------------------- |
| Folders                 | lowercase, hyphenated      | `blog-details`, `user-profile`              |
| Files                   | lowercase, hyphenated      | `blog-details.tsx`, `user-profile.tsx`      |
| Components              | PascalCase                 | `BlogDetails`, `UserProfile`                |
| Hooks                   | camelCase, `use` prefix    | `useBlogDetails`, `useUserProfile`          |
| Contexts & Providers    | PascalCase                 | `BlogDetailsContext`, `UserProfileProvider` |
| Schemas                 | camelCase, `Schema` suffix | `blogDetailsSchema`, `userProfileSchema`    |
| Utils & functions       | camelCase                  | `formatBlogDate`, `getUserInitials`         |
| Types & interfaces      | PascalCase                 | `BlogDetails`, `UserProfileProps`           |
| Enum name               | PascalCase, singular       | `PostStatus`, `UserRole`                    |
| Enum keys               | UPPER_SNAKE_CASE           | `DRAFT`, `PUBLISHED`                        |
| Constants / static data | camelCase                  | `socialLinks`, `footerMenuItems`            |

TypeScript enums that mirror a database enum must use the same keys/values as the database (e.g. `PostStatus.DRAFT = 'DRAFT'`).

## Environment variables

- UPPER_SNAKE_CASE names.
- Client-exposed variables must use the `NEXT_PUBLIC_` prefix; secrets must never have it.
- Every variable is documented in the app's `.env.example`.

## Database naming conventions

Use snake_case only — no hyphens (PostgreSQL identifiers with hyphens require quoting and break Prisma codegen).

- Table names: lowercase snake_case, plural — e.g. `blogs`, `user_profiles`.
- Column names: lowercase snake_case — e.g. `blog_details`, `user_profile`.
- Relationship (foreign key) columns: `<singular_table>_id` — e.g. `blog_id`, `user_profile_id`.
- Enum values: UPPER_SNAKE_CASE — e.g. `DRAFT`, `PUBLISHED`.

## Cross-feature architectural conventions

These apply project-wide, surfaced while defining feature requirements in `docs/requirements/`:

- **Never expose internal integer primary keys.** Every table gets an internal auto-increment integer PK (for fast joins/index performance) plus a separate indexed `uuid` column (consider UUIDv7 for better index locality than random UUIDv4), generated on insert. Only the `uuid` is ever exposed in API responses or URLs.
- **Every publicly addressable entity gets a slug.** Backend-generated, unique, editable later (Events, Event Type/Category/Tag, Contests, Sponsors, Articles, Case Studies, etc.).
- **No background jobs for scheduled visibility.** Prefer computing visibility at read time — e.g. `status == PUBLISHED AND (scheduled_at IS NULL OR scheduled_at <= now())` — over cron/worker jobs, for scheduled publish, registration-open countdowns, and similar timing logic. Only introduce an actual job/worker when a real side effect is required (e.g. sending a notification email at that moment).
- **Snapshot associations that must preserve history.** When an association can change over time but past state must remain accurate (e.g. which members represented a given team in a specific past contest), model it as a dedicated snapshot/junction record tied to that point in time — not a live foreign key that silently rewrites history when the underlying data changes.
- **All file/image uploads go through `packages/media-library`.** No feature implements its own one-off upload handling.
- **All rich text fields use `packages/editor`.** Content is persisted as JSON (Tiptap's format), never raw HTML.
- **Entity deletion policy is feature-specific — don't assume one universal rule.** For example, Sponsors/Tiers block deletion while in use; Event Category/Tag allow deletion and simply detach from referencing records instead. Check the specific feature's file under `docs/requirements/` before implementing delete behavior for a new entity.

## Git conventions

- Work on feature branches; never commit directly to `master` or `dev` (enforced by git hooks).
- Commit messages follow Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `style:`, `test:` — a short single-line summary.

## Testing

Not set up yet — conventions will be defined when a test framework is added.
