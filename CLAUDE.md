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
