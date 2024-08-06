import React, {useMemo} from 'react';
import { Quote } from '../../models/quotes';
import { QuoteDisplayComponentProps } from '../../baseProps';
import { AuthorQuotes } from './AuthorQuotes';

interface QuotesByAuthor { 
  [author: string]: Quote[]
}

export const ByAuthor = ({quoteList}: QuoteDisplayComponentProps) => {
  const quotesByAuthor = useMemo(() => {
    const groupedQuotes: QuotesByAuthor = {};
    quoteList.forEach((quote) => {
      const author = quote.book.author;
      if (!groupedQuotes[author]) {
        groupedQuotes[author] = [];
      }
      groupedQuotes[author].push(quote);
    });
    return groupedQuotes;
  }, [quoteList]);

  return (
    <>
      {Object.entries(quotesByAuthor).map(([author, quotes]) => (
        <AuthorQuotes
          author={author}
          quotes={quotes}
        />
      ))}
    </>
  );
};
