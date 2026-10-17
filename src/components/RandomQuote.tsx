"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Quote } from "../models/quotes";
import { QuoteContainer } from "./QuoteContainer";
import { QuoteFigure } from "./QuoteFigure";
import { CopyQuoteButton } from "./CopyQuoteButton";
import { ACTION_BUTTON_CLASSES } from "./actionButtonClasses";

interface RandomQuoteProps {
  quote: Quote;
}

export const RandomQuote = ({ quote }: RandomQuoteProps) => {
  const router = useRouter();

  return (
    <QuoteContainer textStyle="text-xl md:text-2xl">
      <div className="m-5">
        <QuoteFigure quote={quote} />
        <div className="flex justify-end gap-2 mt-4">
          <CopyQuoteButton quote={quote} />
          <button type="button" className={ACTION_BUTTON_CLASSES} onClick={() => router.refresh()}>
            🎲 Another quote
          </button>
        </div>
      </div>
    </QuoteContainer>
  );
};
