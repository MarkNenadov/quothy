import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { QuoteCardImage } from "../../../components/og/QuoteCardImage";
import { loadOgFonts } from "../../../components/og/ogFonts";
import { OG_SIZE } from "../../../components/og/ogTheme";
import { data } from "../../../data/quoteData";
import { findQuoteById } from "../../../lib/quoteQueries";

export const alt = "A quote from Quothy";
export const size = OG_SIZE;
export const contentType = "image/png";

export const generateStaticParams = () => data.map(({ id }) => ({ id }));

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const quote = findQuoteById(data, id);
  if (!quote) {
    notFound();
  }
  return new ImageResponse(<QuoteCardImage quote={quote} />, { ...OG_SIZE, fonts: await loadOgFonts() });
}
