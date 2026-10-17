import { data } from "./quoteData";
import { slugify } from "../lib/slugify";

describe("quoteData", () => {
  test("each book title is credited to exactly one author", () => {
    const authorsByTitle = Map.groupBy(data, (quote) => quote.book.title);
    const titlesWithMultipleAuthors = [...authorsByTitle]
      .filter(([, quotes]) => new Set(quotes.map((quote) => quote.book.author)).size > 1)
      .map(([title]) => title);

    expect(titlesWithMultipleAuthors).toStrictEqual([]);
  });

  test("each author has a URL slug no other author shares", () => {
    const authorsBySlug = Map.groupBy(new Set(data.map((quote) => quote.book.author)), slugify);
    const collidingSlugs = [...authorsBySlug].filter(([, authors]) => authors.length > 1).map(([slug]) => slug);

    expect(collidingSlugs).toStrictEqual([]);
  });

  test("tags are kebab-case", () => {
    const kebabCase = /^[a-z0-9]+(-[a-z0-9]+)*$/;
    const invalidTags = [...new Set(data.flatMap((quote) => quote.tags))].filter((tag) => !kebabCase.test(tag));

    expect(invalidTags).toStrictEqual([]);
  });

  test("every quote has a six-character lowercase id", () => {
    const invalidIds = data.map((quote) => quote.id).filter((id) => !/^[a-z0-9]{6}$/.test(id));

    expect(invalidIds).toStrictEqual([]);
  });

  test("quote ids are unique", () => {
    const ids = data.map((quote) => quote.id);
    const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);

    expect(duplicates).toStrictEqual([]);
  });

  test("no quote appears twice", () => {
    const quoteTexts = data.map((quote) => quote.quote);
    const duplicates = quoteTexts.filter((text, index) => quoteTexts.indexOf(text) !== index);

    expect(duplicates).toStrictEqual([]);
  });

  test("every quote has at least one tag", () => {
    const untagged = data.filter((quote) => quote.tags.length === 0).map((quote) => quote.quote);

    expect(untagged).toStrictEqual([]);
  });

  test("no text field has leading or trailing whitespace", () => {
    const textFields = data.flatMap((quote) => [quote.quote, quote.book.title, quote.book.author, ...quote.tags]);
    const untrimmed = textFields.filter((text) => text !== text.trim());

    expect(untrimmed).toStrictEqual([]);
  });
});
