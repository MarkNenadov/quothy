import React from 'react';
import { Quote } from '../models/quotes';
import {QuoteContainer} from "../components/QuoteContainer"
import {SubText} from "../components/SubText"

export const ByAuthor = (props: { quoteList: Quote[] }) => {
  const { quoteList } = props;

  const quotesByAuthor: { [author: string]: Quote[] } = {};
  quoteList.forEach((quote) => {
    const author = quote.book.author;
    if (!quotesByAuthor[author]) {
      quotesByAuthor[author] = [];
    }
    quotesByAuthor[author].push(quote);
  });

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
