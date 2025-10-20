# Agent Guide (Bazekit UI)
Build: `pnpm build` (tsc + vite); Storybook: `pnpm dev` / `pnpm build-storybook`.
Lint/Format: `pnpm lint` (antfu config, autofix on pre-commit via lefthook).
Test all: `pnpm test`; Watch: `pnpm test:watch`.
Single test file: `pnpm vitest run src/components/button/Button.test.tsx`.
Single test name: `pnpm vitest run -t "renders button"`.
Add new components with 4 files: .tsx, .module.css, .stories.tsx, .test.tsx.
Imports: use type-only imports (`import type { ... }`) for types; group: react, libs, internal.
Types: prefer explicit prop interfaces; extend native element props when suitable.
Naming: PascalCase components, camelCase functions/vars, UPPER_SNAKE for constant literals.
Styling: CSS Modules; use data-* attributes for variants/sizes; prefer logical properties; theme vars.
Accessibility: provide aria-* and `data-testid` on interactive elements; test with a11y addon.
Error handling: fail fast; throw Errors (not strings); avoid silent catch; log only via console.warn/error/info.
No arbitrary console.log (ESLint warns); remove before commit.
Commit messages: Conventional Commits (feat|fix|docs|test|refactor|chore|build etc.).
Pre-commit: lefthook runs lint --fix; commit-msg hook enforces commitlint.
Storybook docs: include overview, props, variants, accessibility notes.
Avoid coupling: components stateless unless state required; export props interface.
Publishing: semantic-release handles versioning; do not manually bump version.
No .cursor or Copilot instruction files present; follow this guide.
