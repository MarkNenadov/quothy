import { QuoteContainer } from "../QuoteContainer";
import { QuoteFigure } from "../QuoteFigure";
import { SectionHeading } from "../SectionHeading";
import { Quote } from "../../models/quotes";

interface AuthorQuotesProps {
  author: string;
  quotes: Quote[];
  headingHref?: string;
}

export const AuthorQuotes = ({ quotes, author, headingHref }: AuthorQuotesProps) => (
  <div className="m-1 md:m-5">
    <SectionHeading text={author} href={headingHref} />
    {!quotes || quotes.length === 0 ? <p>No quotes available.</p> : null}
    {quotes.map((quote, index) => (
      <QuoteContainer key={index}>
        <QuoteFigure quote={quote} showAuthor={false} />
      </QuoteContainer>
    ))}
  </div>
);
