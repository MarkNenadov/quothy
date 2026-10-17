import { data } from "./quoteData";

describe("quoteData", () => {
  test("each book title is credited to exactly one author", () => {
    const authorsByTitle = Map.groupBy(data, (quote) => quote.book.title);
    const titlesWithMultipleAuthors = [...authorsByTitle]
      .filter(([, quotes]) => new Set(quotes.map((quote) => quote.book.author)).size > 1)
      .map(([title]) => title);

    expect(titlesWithMultipleAuthors).toEqual([]);
  });

  test("tags are kebab-case", () => {
    const kebabCase = /^[a-z0-9]+(-[a-z0-9]+)*$/;
    const invalidTags = [...new Set(data.flatMap((quote) => quote.tags))].filter((tag) => !kebabCase.test(tag));

    expect(invalidTags).toEqual([]);
  });

  test("no quote appears twice", () => {
    const quoteTexts = data.map((quote) => quote.quote);
    const duplicates = quoteTexts.filter((text, index) => quoteTexts.indexOf(text) !== index);

    expect(duplicates).toEqual([]);
  });

  test("every quote has at least one tag", () => {
    const untagged = data.filter((quote) => quote.tags.length === 0).map((quote) => quote.quote);

    expect(untagged).toEqual([]);
  });

  test("no text field has leading or trailing whitespace", () => {
    const textFields = data.flatMap((quote) => [quote.quote, quote.book.title, quote.book.author, ...quote.tags]);
    const untrimmed = textFields.filter((text) => text !== text.trim());

    expect(untrimmed).toEqual([]);
  });
});
