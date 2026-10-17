import { data } from './quoteData';

describe('quoteData', () => {
  test('each book title is credited to exactly one author', () => {
    const authorsByTitle = Map.groupBy(data, (quote) => quote.book.title);
    const titlesWithMultipleAuthors = [...authorsByTitle]
      .filter(([, quotes]) => new Set(quotes.map((quote) => quote.book.author)).size > 1)
      .map(([title]) => title);

    expect(titlesWithMultipleAuthors).toEqual([]);
  });
});
