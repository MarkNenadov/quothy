import React, {useMemo} from 'react';
import { Quote } from '../models/quotes';
import {QuoteContainer} from "../components/QuoteContainer"
import {SubText} from "../components/SubText"
import { QuoteDisplayComponentProps } from '../baseProps';

export const ByAuthor = ({quoteList}: QuoteDisplayComponentProps) => {
  const quotesByAuthor = useMemo(() => {
    const groupedQuotes: { [author: string]: Quote[] } = {};
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
        <div key={author} className="m-1 md:m-5">
          <h2>{author}</h2>
          {quotes.map((quote, index) => (
            <QuoteContainer key={index}>
              <div>"{quote.quote}"</div>
              <SubText>
                {quote.book.title}
              </SubText>
            </QuoteContainer>
          ))}
        </div>
      ))}
    </>
  );
};
