# CLAUDE.md

Quothy is a small Next.js site of quotes from books, live at https://quotes.marknenadov.com/.

## Commands

- `bun run test`: Jest suite (components and data validation)
- `bun run typecheck`: `tsc --noEmit`
- `bun run lint`: ESLint
- `bun run build`: production build
- `bun run format`: Prettier (CI runs `format:check`)

CI (`.github/workflows/ci.yml`) runs all of these; run them before calling a change done.

## Layout

- `src/app/page.tsx`: Server Component; picks the first random quote per request
- `src/components/QuoteBrowser.tsx`: client component holding tab state
- `src/components/QuoteFigure.tsx`: the one place a quote is rendered (figure/blockquote/cite)
- `src/data/quoteData.ts`: all quotes, as a flat `Quote[]`
- `src/data/quoteData.test.ts`: data invariants (one author per title, kebab-case tags, no duplicates,
  no untagged quotes, no untrimmed text)
- `src/app/globals.css`: colour tokens (`surface`, `surface-strong`, `line`, `accent`) with dark values

## Conventions

- Tests first: new behaviour and bug fixes start with a failing test, colocated as `*.test.ts(x)`.
- Use the colour tokens, not raw Tailwind colours.
- One commit per change; don't push unless asked.
- Use bun, not npm or yarn. `bun.lock` is the only lockfile.

## Adding quotes

Use the `/add-quote` skill. Keep quote text verbatim, even when it looks like it has a typo; flag
suspected typos instead of fixing them.
