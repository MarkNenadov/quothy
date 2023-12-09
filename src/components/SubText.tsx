import React, { ReactNode } from 'react';

interface SubTextProps {
    children: ReactNode;
  }
  
export const SubText = (props: SubTextProps) => {
  return (
    <div className="opacity-70 w-full text-right text-sm italic">
    {
            props.children
        }
    </div>
  );  
}