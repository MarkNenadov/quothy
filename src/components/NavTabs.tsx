"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Tab } from "./Tab";

const TABS = [
  { label: "🎲 Random", href: "/", isActiveFor: (pathname: string) => pathname === "/" },
  { label: "✍️ By Author", href: "/authors", isActiveFor: (pathname: string) => pathname.startsWith("/authors") },
  { label: "📚 By Topic", href: "/topics", isActiveFor: (pathname: string) => pathname.startsWith("/topics") },
];

export const NavTabs = () => {
  const pathname = usePathname();

  return (
    <nav aria-label="Views" className="flex flex-row justify-between">
      {TABS.map(({ label, href, isActiveFor }) => (
        <Tab key={href} label={label} href={href} isActive={isActiveFor(pathname)} />
      ))}
    </nav>
  );
};
