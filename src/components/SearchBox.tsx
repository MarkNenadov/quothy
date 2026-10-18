"use client";

import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { SearchForm } from "./SearchForm";

export const SearchBox = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = pathname === "/search" ? (searchParams.get("q") ?? "") : "";

  // Keyed by query so the box updates when a new search is submitted
  return <SearchForm key={query} defaultQuery={query} />;
};
