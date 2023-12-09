import React from 'react';
import { Quote } from '../models/quotes';
import { QuoteContainer } from './QuoteContainer';
import { SubText } from './SubText';

export const ByTopic = (props: { quoteList: Quote[] }) => {
  const { quoteList } = props;

  const quotesByTag: { [tag: string]: Quote[] } = {};
  quoteList.forEach((quote) => {
    const tags = quote.tags;
    tags.forEach((tag) => {
      if (!quotesByTag[tag]) {
        quotesByTag[tag] = [];
      }
      quotesByTag[tag].push(quote);
    });
  });

  return (
    <div className="text-2xl p-1 md:p-4">
      {Object.entries(quotesByTag).map(([tag, quotes]) => (
        <div key={tag} className="m-5">
          <h2>{tag}</h2>
          {quotes.map((quote, index) => (
            <QuoteContainer key={index}>
              <div className="">"{quote.quote}"</div>
              <SubText>
                 {quote.book.title}
              </SubText>
              <SubText>
                 {quote.book.author}
              </SubText>
           </QuoteContainer>
          ))}
        </div>
      ))}
    </div>
  );
};
