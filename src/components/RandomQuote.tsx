import React, {useEffect, useState} from 'react';
import {Quote} from '../models/quotes'
import {QuoteContainer} from "../components/QuoteContainer"

export const RandomQuote = ( props: { quoteList: Quote[] } ) => {
  const {quoteList} = props
  const [randomQuote, setRandomQuote] = useState<Quote | null>(null);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quoteList.length);
    setRandomQuote(quoteList[randomIndex]);
  };

  useEffect(() => {
    generateRandomQuote();
  }); 

  return (
    <QuoteContainer textStyle="text-s md:text-3xl">
            {randomQuote && (
        <div className="m-5">
          <div>"{randomQuote.quote}"</div>
          <div className="w-full text-right">{randomQuote.book.author}</div>
          <div className="w-full text-right">{randomQuote.book.title}</div>
        </div>
      )}
    </QuoteContainer>
  );  
}