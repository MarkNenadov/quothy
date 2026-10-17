import React from "react";
import { Quote } from "../models/quotes";
import { TopicView } from "./TopicView";

interface ByTopicProps {
  quoteList: Quote[];
}

export const ByTopic = ({ quoteList }: ByTopicProps) => {
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
        <TopicView key={tag} tag={tag} quotes={quotes} headingHref={`/topics/${tag}`} />
      ))}
    </div>
  );
};
