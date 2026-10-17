'use client';

import { useState } from 'react';
import { RandomQuote } from './RandomQuote';
import { ByAuthor } from './author/ByAuthor';
import { Tab } from './Tab';
import { ByTopic } from './ByTopic';
import { Quote } from '../models/quotes';
import { pickRandomQuote } from '../lib/pickRandomQuote';

interface QuoteBrowserProps {
  quotes: Quote[];
  initialQuote: Quote;
}

export const QuoteBrowser = ({ quotes, initialQuote }: QuoteBrowserProps) => {
  const [currentTab, setCurrentTab] = useState("random")
  const [randomQuote, setRandomQuote] = useState(initialQuote);

  return (
    <div className="mx-auto max-w-3xl text-2xl p-2 md:p-4">
      <h1 className="font-bold text-5xl p-3">✌ Quothy ✌</h1>
      <div className="flex flex-row justify-between">
        <Tab
          label="🎲 Random"
          clickHook={() => setCurrentTab("random")}
          isActive={currentTab === "random"}
        />
        <Tab
          label="✍️ By Author"
          clickHook={() => setCurrentTab("author")}
          isActive={currentTab === "author"}
        />
        <Tab
          label="📚 By Topic"
          clickHook={() => setCurrentTab("topic")}
          isActive={currentTab === "topic"}
        />
      </div>
      {
        currentTab === "random" && (
          <RandomQuote
            randomQuote={randomQuote}
            onAnotherQuote={() => setRandomQuote(pickRandomQuote(quotes))}
          />
        )
      }
      {
        currentTab === "author" && <ByAuthor quoteList={quotes} />
      }
      {
        currentTab === "topic" && <ByTopic quoteList={quotes} />
      }
      <div className="text-sm text-center pt-2">
        {quotes.length} quotes present from {new Set(quotes.map( d => d.book.author)).size} authors. Quothy uses Next.js, Typescript, and TailwindCSS. You can see the source on
        &nbsp;<a
          className="underline text-blue-800"
          href={"https://github.com/MarkNenadov/quothy"}
          aria-label='"GitHub Source Link'
        >
          GitHub
        </a>.
      </div>
    </div>
  );
}
