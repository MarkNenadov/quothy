import React, { ReactNode } from 'react';

interface SubTextProps {
    children: ReactNode;
  }
  
export const SubText = ({children}: SubTextProps) => {
  return (
    <div className="opacity-70 w-full text-right text-sm italic">
      { children }
    </div>
  );  
}