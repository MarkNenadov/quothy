"use client";

import React, { useState } from "react";
import { Quote } from "../models/quotes";
import { ACTION_BUTTON_CLASSES } from "./actionButtonClasses";

const COPIED_FEEDBACK_MS = 2000;

interface CopyQuoteButtonProps {
  quote: Quote;
}

export const CopyQuoteButton = ({ quote }: CopyQuoteButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyQuote = async () => {
    await navigator.clipboard.writeText('"' + quote.quote + '" - ' + quote.book.author);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), COPIED_FEEDBACK_MS);
  };

  return (
    <button type="button" className={ACTION_BUTTON_CLASSES} onClick={copyQuote}>
      {isCopied ? "✅ Copied!" : "📋 Copy"}
    </button>
  );
};
