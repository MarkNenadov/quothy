import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AuthorQuotes } from "../../../components/author/AuthorQuotes";
import { data } from "../../../data/quoteData";
import { pageMetadata, quoteCount } from "../../../lib/pageMetadata";
import { findQuotesByAuthorSlug, listAuthorSlugs } from "../../../lib/quoteQueries";

interface AuthorPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export const generateStaticParams = () => listAuthorSlugs(data).map((slug) => ({ slug }));

const findAuthorQuotes = async (params: AuthorPageProps["params"]) => {
  const { slug } = await params;
  const quotes = findQuotesByAuthorSlug(data, slug);
  if (quotes.length === 0) {
    notFound();
  }
  return { author: quotes[0].book.author, quotes };
};

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const { author, quotes } = await findAuthorQuotes(params);
  return pageMetadata(`Quotes by ${author}`, `${quoteCount(quotes.length)} by ${author} from my reading.`);
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { author, quotes } = await findAuthorQuotes(params);
  return <AuthorQuotes author={author} quotes={quotes} />;
}
