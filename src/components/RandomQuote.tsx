import React, { useState } from 'react';
import {Quote} from '../models/quotes'
import {QuoteContainer} from "../components/QuoteContainer"
import {SubText} from "../components/SubText"

const COPIED_FEEDBACK_MS = 2000;

interface RandomQuoteProps {
  randomQuote?: Quote
  onAnotherQuote: () => void
}

interface ActionButtonProps {
  label: string
  clickHook: () => void
}

const ActionButton = ({label, clickHook}: ActionButtonProps) => (
  <button
    type="button"
    className="cursor-pointer px-3 py-1 text-sm md:text-base bg-sky-300 border border-black"
    onClick={clickHook}
  >
    { label }
  </button>
);

export const RandomQuote = ( {randomQuote, onAnotherQuote}: RandomQuoteProps ) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyQuote = async (quote: Quote) => {
    await navigator.clipboard.writeText("\"" + quote.quote + "\" - " + quote.book.author);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), COPIED_FEEDBACK_MS);
  };

  return (
    <QuoteContainer textStyle="text-s md:text-3xl">
            {randomQuote && (
        <div className="m-5">
          <div>
            &ldquo;{randomQuote.quote}&rdquo;
          </div>
          <SubText>{randomQuote.book.author}</SubText>
          <SubText>{randomQuote.book.title}</SubText>
          <div className="flex justify-end gap-2 mt-4">
            <ActionButton label={isCopied ? "✅ Copied!" : "📋 Copy"} clickHook={() => copyQuote(randomQuote)} />
            <ActionButton label="🎲 Another quote" clickHook={onAnotherQuote} />
          </div>
        </div>
      )}
    </QuoteContainer>
  );
}
