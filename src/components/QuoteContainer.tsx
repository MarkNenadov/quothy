import React, { ReactNode } from 'react';

interface QuoteContainerProps {
    children: ReactNode;
    textStyle?: string;
  }
  
export const QuoteContainer = (props: QuoteContainerProps) => {

  return (
    <div className={`${props.textStyle}  bg-sky-200 p-4 w-full`}>
        {
            props.children
        }
    </div>
  );  
}