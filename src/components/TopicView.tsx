import { Quote } from '../models/quotes';
import { QuoteContainer } from './QuoteContainer';
import { SubText } from './SubText';

interface TopicViewProps {
    tag: string;
    quotes: Quote[];
}

export const TopicView = (props: TopicViewProps) => {
    const { tag, quotes } = props;

    return (
        <div key={tag} className="m-5">
        <h2>{tag}</h2>
        {quotes.map((quote, index) => (
          <QuoteContainer key={index}>
            <div className="">"{quote.quote}"</div>
            <SubText>
               {quote.book.title}
            </SubText>
            <SubText>
               {quote.book.author}
            </SubText>
         </QuoteContainer>
        ))}
      </div>

    );
}