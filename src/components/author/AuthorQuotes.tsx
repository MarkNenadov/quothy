import {QuoteContainer} from "../QuoteContainer"
import {SubText} from "../SubText"
import { Quote } from '../../models/quotes';

interface AuthorQuotesProps {
    author: string, 
    quotes: Quote[]
}

export const AuthorQuotes = ({ author, quotes }: AuthorQuotesProps) => (
    <div key={author} className="m-1 md:m-5">
      <h2>{author}</h2>
      {quotes.map((quote, index) => (
        <QuoteContainer key={index}>
          <div>"{quote.quote}"</div>
          <SubText>{quote.book.title}</SubText>
        </QuoteContainer>
      ))}
    </div>
  );