import React, {useEffect, useState} from 'react';
import {Quote} from '../models/quotes'

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
    <div className="text-3xl bg-sky-200 p-4">
            {randomQuote && (
        <div className="m-5">
          <div>"{randomQuote.quote}"</div>
          <div className="w-full text-right">{randomQuote.book.author}</div>
          <div className="w-full text-right">{randomQuote.book.title}</div>
        </div>
      )}
    </div>
  );  
}