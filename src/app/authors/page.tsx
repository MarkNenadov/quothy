import { ByAuthor } from "../../components/author/ByAuthor";
import { data } from "../../data/quoteData";
import { pageMetadata } from "../../lib/pageMetadata";

export const metadata = pageMetadata("By author", "Every quote from my reading, grouped by author.");

export default function AuthorsPage() {
  return <ByAuthor quoteList={data} />;
}
