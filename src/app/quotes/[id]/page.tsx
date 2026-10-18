import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ACTION_BUTTON_CLASSES } from "../../../components/actionButtonClasses";
import { CopyQuoteButton } from "../../../components/CopyQuoteButton";
import { QuoteContainer } from "../../../components/QuoteContainer";
import { QuoteFigure } from "../../../components/QuoteFigure";
import { data } from "../../../data/quoteData";
import { pageMetadata } from "../../../lib/pageMetadata";
import { findQuoteById } from "../../../lib/quoteQueries";
import { truncate } from "../../../lib/truncate";

interface QuotePageProps {
  params: Promise<{ id: string }>;
}

export const dynamicParams = false;

export const generateStaticParams = () => data.map(({ id }) => ({ id }));

const findQuote = async (params: QuotePageProps["params"]) => {
  const { id } = await params;
  const quote = findQuoteById(data, id);
  if (!quote) {
    notFound();
  }
  return quote;
};

export async function generateMetadata({ params }: QuotePageProps): Promise<Metadata> {
  const { id, quote, book } = await findQuote(params);
  return pageMetadata(
    `“${truncate(quote, 60)}” — ${book.author}`,
    `“${truncate(quote, 200)}” — ${book.author}, ${book.title}`,
    `/quotes/${id}/opengraph-image`,
  );
}

export default async function QuotePage({ params }: QuotePageProps) {
  const quote = await findQuote(params);
  return (
    <QuoteContainer textStyle="text-xl md:text-2xl">
      <div className="m-5">
        <QuoteFigure quote={quote} />
        <div className="flex justify-end gap-2 mt-4">
          <CopyQuoteButton quote={quote} />
          <Link href="/" className={ACTION_BUTTON_CLASSES}>
            🎲 Random quote
          </Link>
        </div>
      </div>
    </QuoteContainer>
  );
}
