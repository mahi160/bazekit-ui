# Bazekit UI

A modern, accessible React component library built on top of Base UI, focused on clarity, strong accessibility defaults, and a minimal, themeable design system (CSS variables inspired by Shadcn UI) without a Tailwind dependency.

## Features
- Accessible, headless-first patterns powered by Base UI primitives
- TypeScript-first API with explicit prop interfaces
- Themed via CSS custom properties; dark/light ready
- Lightweight styles (CSS Modules) and no runtime styling engine
- Consistent variants via `data-*` attributes (size, variant, state)

## Getting Started
Install (peer deps required):
```bash
pnpm add @bazekit/ui react react-dom @base-ui-components/react
```
Import global styles once (e.g. in your app root):
```ts
import '@bazekit/ui/dist/index.css'
```
Use a component:
```tsx
import { Button } from '@bazekit/ui'
<Button variant="primary">Click</Button>
```

## Development
Commands: `pnpm dev` (Storybook), `pnpm build`, `pnpm test`, `pnpm test:watch`, `pnpm lint`.
Add a component (folder): `Name.tsx`, `Name.module.css`, `Name.stories.tsx`, `Name.test.tsx`.
Tests use Vitest + Testing Library (jsdom). Include `data-testid` on interactive elements.

## Contributing Guidelines
- Imports grouped: react, external libs, internal modules; type-only imports for types
- Props: explicit interfaces; extend intrinsic element props when sensible
- Styling: prefer logical properties, theme vars, data attributes for variants
- Error handling: throw `Error`; no silent catches; only `console.warn|error|info` allowed
- Commit messages: Conventional Commits; pre-commit runs ESLint (antfu config) via lefthook
- Storybook stories must document overview, props, variants, accessibility

## Roadmap
- More complex composite components
- Theming tokens expansion & design tokens export
- Accessibility auditing automation

## License
Apache 2.0 © Bazekit Contributors. See `LICENSE` for details.
