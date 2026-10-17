import { data } from './quoteData';

describe('quoteData', () => {
  test('each book title is credited to exactly one author', () => {
    const authorsByTitle = Map.groupBy(data, (quote) => quote.book.title);
    const titlesWithMultipleAuthors = [...authorsByTitle]
      .filter(([, quotes]) => new Set(quotes.map((quote) => quote.book.author)).size > 1)
      .map(([title]) => title);

    expect(titlesWithMultipleAuthors).toEqual([]);
  });

  test('tags are kebab-case', () => {
    const kebabCase = /^[a-z0-9]+(-[a-z0-9]+)*$/;
    const invalidTags = [...new Set(data.flatMap((quote) => quote.tags))]
      .filter((tag) => !kebabCase.test(tag));

    expect(invalidTags).toEqual([]);
  });
});
