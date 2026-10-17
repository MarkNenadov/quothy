import { Quote } from "../models/quotes";
import { slugify } from "./slugify";

export const listAuthorSlugs = (quotes: Quote[]): string[] => [
  ...new Set(quotes.map((quote) => slugify(quote.book.author))),
];

export const findQuotesByAuthorSlug = (quotes: Quote[], slug: string): Quote[] =>
  quotes.filter((quote) => slugify(quote.book.author) === slug);

export const listTags = (quotes: Quote[]): string[] => [...new Set(quotes.flatMap((quote) => quote.tags))];

export const findQuotesByTag = (quotes: Quote[], tag: string): Quote[] =>
  quotes.filter((quote) => quote.tags.includes(tag));
