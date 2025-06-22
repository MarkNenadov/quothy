import React from 'react';
import { Quote } from '../models/quotes';
import { QuoteDisplayComponentProps } from '../baseProps';
import { TopicView } from './TopicView';

export const ByTopic = ({quoteList}: QuoteDisplayComponentProps) => {
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
        <TopicView key={tag} tag={tag} quotes={quotes} />
      ))}
    </div>
  );
};
