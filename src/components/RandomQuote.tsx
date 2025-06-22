import React from 'react';
import {Quote} from '../models/quotes'
import {QuoteContainer} from "../components/QuoteContainer"
import {SubText} from "../components/SubText"

interface RandomQuoteProps {
  randomQuote?: Quote
}

export const RandomQuote = ( {randomQuote}: RandomQuoteProps ) => {
  return (
    <QuoteContainer textStyle="text-s md:text-3xl">
            {randomQuote && (
        <div 
          onClick={() => {
            navigator.clipboard.writeText("\"" + randomQuote.quote + "\" - " + randomQuote.book.author)
          }}
          className="m-5"
        >
          <div>
            &ldquo;{randomQuote.quote}&rdquo;
          </div>
          <SubText>{randomQuote.book.author}</SubText>
          <SubText>{randomQuote.book.title}</SubText>
        </div>
      )}
    </QuoteContainer>
  );  
}