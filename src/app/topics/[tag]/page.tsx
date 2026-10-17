import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopicView } from "../../../components/TopicView";
import { data } from "../../../data/quoteData";
import { pageMetadata, quoteCount } from "../../../lib/pageMetadata";
import { findQuotesByTag, listTags } from "../../../lib/quoteQueries";

interface TopicPageProps {
  params: Promise<{ tag: string }>;
}

export const dynamicParams = false;

export const generateStaticParams = () => listTags(data).map((tag) => ({ tag }));

const findTopicQuotes = async (params: TopicPageProps["params"]) => {
  const { tag } = await params;
  const quotes = findQuotesByTag(data, tag);
  if (quotes.length === 0) {
    notFound();
  }
  return { tag, quotes };
};

export async function generateMetadata({ params }: TopicPageProps): Promise<Metadata> {
  const { tag, quotes } = await findTopicQuotes(params);
  return pageMetadata(`Quotes about ${tag}`, `${quoteCount(quotes.length)} about ${tag} from my reading.`);
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { tag, quotes } = await findTopicQuotes(params);
  return <TopicView tag={tag} quotes={quotes} />;
}
