import React from 'react';

interface TabProps {
    label: string;
    isActive: boolean
    clickHook: () => void
  }
  
export const Tab = ({label, isActive, clickHook}: TabProps) => {
  return (
    <div 
    className={`cursor-pointer mb-2 p-3 ${isActive ? "bg-sky-300" : "bg-sky-200"} w-1/3 text-center border border-1 border-black text-lg md:text-2xl`}
    onClick={clickHook}
  >
    { label }
  </div>
);  
}