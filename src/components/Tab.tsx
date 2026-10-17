import React from "react";
import Link from "next/link";

interface TabProps {
  label: string;
  href: string;
  isActive: boolean;
}

export const Tab = ({ label, href, isActive }: TabProps) => (
  <Link
    href={href}
    className={`block mb-4 p-3 ${isActive ? "bg-surface-strong font-semibold" : "bg-surface"} w-1/3 text-center border border-line text-lg md:text-2xl`}
    aria-current={isActive ? "page" : undefined}
  >
    {label}
  </Link>
);
