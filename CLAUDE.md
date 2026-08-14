# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands are run from the monorepo root using `pnpm` and coordinated via Turborepo.

```bash
pnpm dev          # Start all apps in dev mode (web on :3300, dashboard on :3400, api on :3500)
pnpm build        # Build all packages and apps
pnpm lint         # Lint all packages
pnpm typecheck    # Type-check all packages
pnpm format       # Format staged-scope TS/TSX files per package with Prettier (see note below)

# Run a command scoped to one workspace
pnpm --filter web dev
pnpm --filter dashboard dev
pnpm --filter @workspace/ui typecheck
```

**Format command caveat**: each package's `format` script only runs `prettier --write` over `**/*.{ts,tsx}`. CI's format check (see below) additionally covers `.js`, `.jsx`, `.mjs`, `.cjs`, `.css`, `.json`, and `.md`. Running `pnpm format` locally will not catch everything CI checks — when in doubt, run `pnpm prettier --check "**/*.{ts,tsx,js,jsx,mjs,cjs,css,json,md}"` from the root before pushing.

## Conventions

Coding conventions — naming, folder structure, import order, code style, database naming — are defined in `.claude/rules/conventions.md`. Follow them for all code in `apps/*` and `packages/*`.

## Requirements & Business Logic

Feature requirements and business logic are defined in `docs/requirements/`. Start with `docs/requirements/progress-report.md` — it indexes what's covered/pending and links out to the relevant detailed file.

### Folder structure

```text
docs/requirements/
├── progress-report.md              — master index, start here
├── project-summary.md              — stakeholder-facing summary (rarely needed for implementation)
├── roles-and-auth.md                — foundational: roles, Mentor badge, auth, public profiles
├── shared-features.md               — Sponsors, Contact Us, Payment, Follow System, Static/CMS Pages
├── events-requirements.md           — core feature
├── contests-requirements.md         — core feature
├── articles-and-case-studies-requirements.md
├── mentorship-requirements.md       — core feature
├── products-requirements.md         — core feature
├── media-library-requirements.md    — shared infrastructure, its own file (not in shared-features.md)
├── text-editor-requirements.md      — shared infrastructure, its own file (not in shared-features.md)
├── global-commenting-requirements.md — shared infrastructure, its own file (not in shared-features.md)
├── thread-system-requirements.md    — shared infrastructure, its own file (not in shared-features.md)
├── landing-pages/                   — one file per public page (or small grouped pages)
│   └── README.md                    — index of all 22 pages, status + file per page
├── member-dashboard/                — one file per logged-in Member page
│   └── README.md                    — index of all 12 pages, status + file per page
└── admin-dashboard/                 — 40 pages, fully specced, own README.md index
    └── README.md
```

### Read narrowly, not broadly

Each file covers one feature or one page — nothing is duplicated across files, and cross-references (e.g. "see `roles-and-auth.md`") point to a single source of truth rather than repeating it. Before implementing something, identify which specific file(s) cover it and read only those, rather than scanning the whole folder:

- **Implementing a page** → that page's file in `landing-pages/` or `member-dashboard/`, plus the one or two core feature docs it references (each page file lists its "Cross-feature dependencies" at the bottom).
- **Implementing a feature's backend logic** → that feature's root-level `.md` file only.
- **Unsure which file covers something** → check `progress-report.md`'s index tables rather than grepping/reading every file.
- **Request is vague about which feature/page it concerns** → ask for clarification rather than reading broadly to compensate.

This keeps context usage proportional to the task, not the size of the whole docs folder.

## Architecture

This is a **pnpm + Turborepo monorepo** with two workspace groups:

- `apps/web` — Next.js 16 app (React 19, App Router, Tailwind CSS v4), dev server on port 3300
- `apps/dashboard` — Next.js 16 app, same stack/scaffold as `web`, dev server on port 3400
- `apps/api` — Express 5 + TypeScript backend API, dev server on port 3500 (see `.claude/rules/conventions.md` for its structure and planned stack)
- `packages/ui` — Shared component library (shadcn/ui, Radix UI, CVA)
- `packages/typescript-config` — Shared `tsconfig` presets
- `packages/eslint-config` — Shared ESLint configs

`apps/web` and `apps/dashboard` are currently near-identical scaffolds (same dependencies, same `app/`, `components/`, `hooks/`, `lib/` layout) sharing the same `@workspace/ui` package — treat them as independent Next.js apps that happen to start from the same template, not as one canonical app.

### Key relationships

- Both apps import components via `@workspace/ui/components/<name>` and global styles via `@workspace/ui/globals.css`.
- Each app's `next.config.ts` sets `transpilePackages: ["@workspace/ui"]` — the UI package is not compiled separately.
- The `@workspace/ui` package exports are declared in its `package.json#exports` map (components, hooks, lib, globals.css). New source files must be added there to be importable.

### Adding shadcn/ui components

Run at the repo root, targeting either app (both apps' `components.json` point shadcn at the same shared package) so shadcn places components in `packages/ui/src/components/`:

```bash
pnpm dlx shadcn@latest add <component> -c apps/web
# or: -c apps/dashboard — either works, output location is the same
```

Import the installed component in app code:

```tsx
import { Button } from '@workspace/ui/components/button';
```

### Next.js version note

This uses Next.js 16, which has breaking changes from versions in typical training data. Before writing Next.js-specific code, consult `node_modules/next/dist/docs/` for current APIs and conventions.

### Theming

Dark/light mode is handled by `next-themes` via each app's own `components/theme-provider.tsx` (`apps/web/components/theme-provider.tsx`, `apps/dashboard/components/theme-provider.tsx` — currently identical files). The `ThemeProvider` wraps the root layout and registers a `d` keypress hotkey to toggle themes. CSS variables for theming live in `packages/ui/src/styles/globals.css`.

### Path aliases

Inside each app (`apps/web`, `apps/dashboard`), `@/` maps to that app's own directory root (set in its `tsconfig.json`). Shared workspace packages are imported as `@workspace/<package-name>`.

### Git hooks and branch protection

Husky manages git hooks (installed via the root `prepare` script):

- **pre-commit**: runs `scripts/prevent-git-branch.sh`, then `pnpm lint-staged` (see `lint-staged.config.mjs` — typechecks the whole project, lints staged `.ts/.tsx/.js/.jsx/.mjs/.cjs` files, and Prettier-writes staged `.ts/.tsx/.js/.jsx/.mjs/.cjs/.css/.json/.md` files).
- **pre-push**: runs `scripts/prevent-git-branch.sh`.
- `scripts/prevent-git-branch.sh` blocks commits/pushes made directly on `master` or `dev` — work on a feature branch and go through a PR.

### CI

`.github/workflows/ci.yml` runs on pull requests targeting `dev`, `stg`, or `master`. It runs, in order: `pnpm install --frozen-lockfile`, `pnpm typecheck`, `pnpm lint`, then a Prettier format check (`pnpm prettier --check "**/*.{ts,tsx,js,jsx,mjs,cjs,css,json,md}"`). The format check is broader than the local `pnpm format` script — see the caveat above.
