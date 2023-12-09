import React from 'react';
import { Quote } from '../models/quotes';

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
    <div className="text-2xl p-4">
      {Object.entries(quotesByAuthor).map(([author, quotes]) => (
        <div key={author} className="m-5">
          <h2>{author}</h2>
          {quotes.map((quote, index) => (
            <div key={index} className=" bg-sky-200 m-4 p-4">
              <div>"{quote.quote}"</div>
              <div className="w-full text-right">
                {quote.book.title}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
