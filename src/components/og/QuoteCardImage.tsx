import React from "react";
import { Quote } from "../../models/quotes";
import { truncate } from "../../lib/truncate";
import { OG_COLORS, OG_SERIF } from "./ogTheme";
import { QuoteMarkIcon } from "./QuoteMarkIcon";

export const MAX_QUOTE_LENGTH = 220;
const MAX_TITLE_LENGTH = 60;
const LONG_QUOTE_LENGTH = 140;

interface QuoteCardImageProps {
  quote: Quote;
}

// Layout for a quote's social preview image (rendered by next/og, so every multi-child div is flex)
export const QuoteCardImage = ({ quote: { quote, book } }: QuoteCardImageProps) => {
  const quoteText = truncate(quote, MAX_QUOTE_LENGTH);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: OG_COLORS.background,
        color: OG_COLORS.foreground,
      }}
    >
      <div
        style={{
          display: "flex",
          fontFamily: OG_SERIF,
          fontSize: quoteText.length > LONG_QUOTE_LENGTH ? 46 : 58,
          lineHeight: 1.35,
        }}
      >
        {`“${quoteText}”`}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 28 }}>
        <div style={{ display: "flex", color: OG_COLORS.muted, maxWidth: 820 }}>
          {`— ${book.author}, ${truncate(book.title, MAX_TITLE_LENGTH)}`}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: OG_SERIF, fontWeight: 600 }}>
          <QuoteMarkIcon size={48} />
          <span>Quothy</span>
        </div>
      </div>
    </div>
  );
};
