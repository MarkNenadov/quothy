"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Quote } from "../models/quotes";
import { QuoteContainer } from "./QuoteContainer";
import { QuoteFigure } from "./QuoteFigure";

const COPIED_FEEDBACK_MS = 2000;

interface RandomQuoteProps {
  quote: Quote;
}

interface ActionButtonProps {
  label: string;
  clickHook: () => void;
}

const ActionButton = ({ label, clickHook }: ActionButtonProps) => (
  <button
    type="button"
    className="cursor-pointer px-3 py-1 text-sm md:text-base bg-surface-strong border border-line rounded-md"
    onClick={clickHook}
  >
    {label}
  </button>
);

export const RandomQuote = ({ quote }: RandomQuoteProps) => {
  const router = useRouter();
  const [isCopied, setIsCopied] = useState(false);

  const copyQuote = async () => {
    await navigator.clipboard.writeText('"' + quote.quote + '" - ' + quote.book.author);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), COPIED_FEEDBACK_MS);
  };

  return (
    <QuoteContainer textStyle="text-xl md:text-2xl">
      <div className="m-5">
        <QuoteFigure quote={quote} />
        <div className="flex justify-end gap-2 mt-4">
          <ActionButton label={isCopied ? "✅ Copied!" : "📋 Copy"} clickHook={copyQuote} />
          <ActionButton label="🎲 Another quote" clickHook={() => router.refresh()} />
        </div>
      </div>
    </QuoteContainer>
  );
};
