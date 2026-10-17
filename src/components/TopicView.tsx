import { Quote } from "../models/quotes";
import { QuoteContainer } from "./QuoteContainer";
import { QuoteFigure } from "./QuoteFigure";
import { SectionHeading } from "./SectionHeading";

interface TopicViewProps {
  tag: string;
  quotes: Quote[];
  headingHref?: string;
}

export const TopicView = ({ tag, quotes, headingHref }: TopicViewProps) => (
  <div className="m-5">
    <SectionHeading text={tag} href={headingHref} />
    {quotes.map((quote, index) => (
      <QuoteContainer key={index}>
        <QuoteFigure quote={quote} />
      </QuoteContainer>
    ))}
  </div>
);
