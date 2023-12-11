import React, { ReactNode } from 'react';

interface QuoteContainerProps {
    children: ReactNode;
    textStyle?: string;
  }
  
export const QuoteContainer = ({children, textStyle}: QuoteContainerProps) => {

  return (
    <div className={`${textStyle}  bg-sky-200 p-4 w-full`}>
        { children }
    </div>
  );  
}