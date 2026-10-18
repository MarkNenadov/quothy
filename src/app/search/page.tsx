import type { Metadata } from "next";
import { QuoteContainer } from "../../components/QuoteContainer";
import { QuoteFigure } from "../../components/QuoteFigure";
import { data } from "../../data/quoteData";
import { pageMetadata, quoteCount } from "../../lib/pageMetadata";
import { searchQuotes } from "../../lib/searchQuotes";

interface SearchPageProps {
  searchParams: Promise<{ q?: string | string[] }>;
}

export const metadata: Metadata = {
  ...pageMetadata("Search", "Search the quotes from my reading."),
  robots: { index: false },
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = (Array.isArray(q) ? q[0] : (q ?? "")).trim();

  if (!query) {
    return <p className="m-5 text-lg">Type in the search box to find quotes by text, author, book or topic.</p>;
  }

  const results = searchQuotes(data, query);
  return (
    <div className="m-1 md:m-5">
      <h2 className="font-semibold mb-2 text-lg">
        {quoteCount(results.length)} matching “{query}”
      </h2>
      {results.map((quote) => (
        <QuoteContainer key={quote.id}>
          <QuoteFigure quote={quote} />
        </QuoteContainer>
      ))}
    </div>
  );
}
