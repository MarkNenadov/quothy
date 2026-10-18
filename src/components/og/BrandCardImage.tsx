import React from "react";
import { OG_COLORS, OG_SERIF } from "./ogTheme";
import { QuoteMarkIcon } from "./QuoteMarkIcon";

interface BrandCardImageProps {
  quoteCount: number;
  authorCount: number;
}

// Layout for the site-wide social preview image (rendered by next/og, so every multi-child div is flex)
export const BrandCardImage = ({ quoteCount, authorCount }: BrandCardImageProps) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 28,
      background: OG_COLORS.background,
      color: OG_COLORS.foreground,
    }}
  >
    <QuoteMarkIcon size={140} />
    <div style={{ display: "flex", fontFamily: OG_SERIF, fontWeight: 600, fontSize: 112 }}>Quothy</div>
    <div style={{ display: "flex", fontFamily: OG_SERIF, fontSize: 44 }}>Quotes from my reading</div>
    <div style={{ display: "flex", fontSize: 30, color: OG_COLORS.muted }}>
      {`${quoteCount} quotes from ${authorCount} authors`}
    </div>
  </div>
);
