import React from "react";
import { Quote } from "../../models/quotes";
import { AuthorQuotes } from "./AuthorQuotes";
import { slugify } from "../../lib/slugify";

interface QuotesByAuthor {
  [author: string]: Quote[];
}

interface ByAuthorProps {
  quoteList: Quote[];
}

export const ByAuthor = ({ quoteList }: ByAuthorProps) => {
  const quotesByAuthor: QuotesByAuthor = {};
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
        <AuthorQuotes key={author} author={author} quotes={quotes} headingHref={`/authors/${slugify(author)}`} />
      ))}
    </>
  );
};
