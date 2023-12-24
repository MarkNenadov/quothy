import React, { ReactNode } from 'react';

interface QuoteContainerProps {
    children: ReactNode;
    textStyle?: string;
    onClick?: () => void;
  }
  
export const QuoteContainer = (
  {children, textStyle, onClick}: QuoteContainerProps
) => {

  return (
    <div 
      className={`${textStyle}  bg-sky-200 p-4 w-full`}
      onClick={ onClick || undefined }
    >
        { children }
    </div>
  );  
}