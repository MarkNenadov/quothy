import { findQuotesByAuthorSlug, findQuotesByTag, listAuthorSlugs, listTags } from "./quoteQueries";
import { Quote } from "../models/quotes";

const quotes: Quote[] = [
  { quote: "One", book: { title: "Book 1", author: "Author A" }, tags: ["love", "life"] },
  { quote: "Two", book: { title: "Book 2", author: "Author A" }, tags: ["life"] },
  { quote: "Three", book: { title: "Book 3", author: "Author B" }, tags: ["death"] },
];

describe("quoteQueries", () => {
  test("listAuthorSlugs returns each author's slug once", () => {
    expect(listAuthorSlugs(quotes)).toEqual(["author-a", "author-b"]);
  });

  test("findQuotesByAuthorSlug returns that author's quotes", () => {
    expect(findQuotesByAuthorSlug(quotes, "author-a").map((quote) => quote.quote)).toEqual(["One", "Two"]);
  });

  test("findQuotesByAuthorSlug returns nothing for an unknown slug", () => {
    expect(findQuotesByAuthorSlug(quotes, "nobody")).toEqual([]);
  });

  test("listTags returns each tag once", () => {
    expect(listTags(quotes)).toEqual(["love", "life", "death"]);
  });

  test("findQuotesByTag returns quotes carrying that tag", () => {
    expect(findQuotesByTag(quotes, "life").map((quote) => quote.quote)).toEqual(["One", "Two"]);
  });
});
