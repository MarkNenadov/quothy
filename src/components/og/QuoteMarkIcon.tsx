import React from "react";
import { OG_COLORS } from "./ogTheme";

interface QuoteMarkIconProps {
  size: number;
}

// Same artwork as src/app/icon.svg
export const QuoteMarkIcon = ({ size }: QuoteMarkIconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <rect width="64" height="64" rx="14" fill={OG_COLORS.accent} />
    <circle cx="21" cy="38" r="9" fill={OG_COLORS.background} />
    <path d="M12 38C12 25 18 17 29 13l2 4c-6 3-10 8-10 15z" fill={OG_COLORS.background} />
    <circle cx="43" cy="38" r="9" fill={OG_COLORS.background} />
    <path d="M34 38C34 25 40 17 51 13l2 4c-6 3-10 8-10 15z" fill={OG_COLORS.background} />
  </svg>
);
