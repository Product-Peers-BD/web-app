# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands are run from the monorepo root using `pnpm` and coordinated via Turborepo.

```bash
pnpm dev          # Start all apps in dev mode
pnpm build        # Build all packages and apps
pnpm lint         # Lint all packages
pnpm typecheck    # Type-check all packages
pnpm format       # Format all TypeScript files with Prettier

# Run a command scoped to one workspace
pnpm --filter web dev
pnpm --filter @workspace/ui typecheck
```

## Architecture

This is a **pnpm + Turborepo monorepo** with two workspace groups:

- `apps/web` — Next.js 16 app (React 19, App Router, Tailwind CSS v4)
- `packages/ui` — Shared component library (shadcn/ui, Radix UI, CVA)
- `packages/typescript-config` — Shared `tsconfig` presets
- `packages/eslint-config` — Shared ESLint configs

### Key relationships

- `apps/web` imports components via `@workspace/ui/components/<name>` and global styles via `@workspace/ui/globals.css`.
- `next.config.ts` sets `transpilePackages: ["@workspace/ui"]` — the UI package is not compiled separately.
- The `@workspace/ui` package exports are declared in its `package.json#exports` map (components, hooks, lib, globals.css). New source files must be added there to be importable.

### Adding shadcn/ui components

Run at the repo root, targeting `apps/web` so shadcn places components in `packages/ui/src/components/`:

```bash
pnpm dlx shadcn@latest add <component> -c apps/web
```

Import the installed component in app code:

```tsx
import { Button } from "@workspace/ui/components/button"
```

### Next.js version note

This uses Next.js 16, which has breaking changes from versions in typical training data. Before writing Next.js-specific code, consult `node_modules/next/dist/docs/` for current APIs and conventions.

### Theming

Dark/light mode is handled by `next-themes` via `apps/web/components/theme-provider.tsx`. The `ThemeProvider` wraps the root layout and registers a `d` keypress hotkey to toggle themes. CSS variables for theming live in `packages/ui/src/styles/globals.css`.

### Path aliases

Inside `apps/web`, `@/` maps to the `apps/web` directory root (set in `tsconfig.json`). Shared workspace packages are imported as `@workspace/<package-name>`.
