import React from "react";

interface TabProps {
  label: string;
  isActive: boolean;
  clickHook: () => void;
}

export const Tab = ({ label, isActive, clickHook }: TabProps) => {
  return (
    <button
      type="button"
      className={`cursor-pointer mb-4 p-3 ${isActive ? "bg-surface-strong font-semibold" : "bg-surface"} w-1/3 text-center border border-line text-lg md:text-2xl`}
      onClick={clickHook}
      aria-pressed={isActive}
    >
      {label}
    </button>
  );
};
