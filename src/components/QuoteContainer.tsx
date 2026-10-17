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
      className={`${textStyle ?? ""} bg-surface p-4 mb-4 w-full rounded-lg`}
      onClick={ onClick || undefined }
    >
        { children }
    </div>
  );  
}