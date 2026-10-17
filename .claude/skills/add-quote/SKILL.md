---
name: add-quote
description: Add one or more book quotes to Quothy's src/data/quoteData.ts, reusing existing book/author spelling and tags, then run the data validation tests. Use when the user wants to add a quote.
---

# Add a quote

1. **Collect** the quote text, book title and author. Ask for anything missing. Keep the quote verbatim:
   don't fix its wording or typos; mention a suspected typo to the user instead.

2. **Match existing spelling.** Search `src/data/quoteData.ts` for the title and author. If the book is
   already there, copy its exact `title` and `author` strings.

3. **Check for duplicates.** If the quote text is already present, stop and tell the user.

4. **Pick tags.** List the tags already in use, most used first:

   ```bash
   bun -e "import { data } from './src/data/quoteData'; const counts = new Map<string, number>(); data.flatMap((q) => q.tags).forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1)); console.log([...counts].sort((a, b) => b[1] - a[1]).map(([t, n]) => t + ' (' + n + ')').join(', '))"
   ```

   Choose 1–3 tags, preferring existing ones. New tags must be kebab-case. Show the user your choice.

5. **Insert** the entry at the end of the `data` array, in the existing format:

   ```ts
   {
     quote: "…",
     book: {
       author: "…",
       title: "…"
     },
     tags: ["…"]
   },
   ```

   Trim leading and trailing whitespace, including non-breaking spaces from pasted text.

6. **Validate** with `bun run test src/data`. Fix any failure before finishing.

7. **Commit** only if the user asks, as `add quote` (or `add N quotes`).
