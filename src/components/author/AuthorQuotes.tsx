import {QuoteContainer} from "../QuoteContainer"
import {QuoteFigure} from "../QuoteFigure"
import { Quote } from '../../models/quotes';

interface AuthorQuotesProps {
    author: string,
    quotes: Quote[]
}

export const AuthorQuotes = ({quotes, author }: AuthorQuotesProps) => (
    <div className="m-1 md:m-5">
        <h2>{author}</h2>
        { (!quotes || quotes.length === 0 ) ? <p>No quotes available.</p> : null }
        {quotes.map((quote, index) => (
            <QuoteContainer key={index}>
            <QuoteFigure quote={quote} showAuthor={false} />
            </QuoteContainer>
        ))}
    </div>
)
