import { ImageResponse } from "next/og";
import { BrandCardImage } from "../components/og/BrandCardImage";
import { loadOgFonts } from "../components/og/ogFonts";
import { OG_SIZE } from "../components/og/ogTheme";
import { data } from "../data/quoteData";

export const alt = "Quothy: quotes from my reading";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  const authorCount = new Set(data.map((quote) => quote.book.author)).size;
  return new ImageResponse(<BrandCardImage quoteCount={data.length} authorCount={authorCount} />, {
    ...OG_SIZE,
    fonts: await loadOgFonts(),
  });
}
