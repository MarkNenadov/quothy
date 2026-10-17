import { ByTopic } from "../../components/ByTopic";
import { data } from "../../data/quoteData";
import { pageMetadata } from "../../lib/pageMetadata";

export const metadata = pageMetadata("By topic", "Every quote from my reading, grouped by topic.");

export default function TopicsPage() {
  return <ByTopic quoteList={data} />;
}
