import React, {useEffect, useState} from 'react';
import {Quote} from '../models/quotes'
import {QuoteContainer} from "../components/QuoteContainer"
import {SubText} from "../components/SubText"

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
          <SubText>{randomQuote.book.author}</SubText>
          <SubText>{randomQuote.book.title}</SubText>
        </div>
      )}
    </QuoteContainer>
  );  
}