import { Quote } from "../models/quotes";
import { foldText } from "./foldText";

const searchableText = ({ quote, book, tags }: Quote): string =>
  foldText([quote, book.author, book.title, ...tags].join(" "));

// Every word of the query must appear somewhere in the quote, author, title or tags
export const searchQuotes = (quotes: Quote[], query: string): Quote[] => {
  const terms = foldText(query).split(/\s+/).filter(Boolean);
  if (terms.length === 0) {
    return [];
  }
  return quotes.filter((quote) => {
    const text = searchableText(quote);
    return terms.every((term) => text.includes(term));
  });
};
