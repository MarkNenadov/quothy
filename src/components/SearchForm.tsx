import React from "react";
import { ACTION_BUTTON_CLASSES } from "./actionButtonClasses";

interface SearchFormProps {
  defaultQuery: string;
}

// A plain GET form, so search works before (or without) JavaScript
export const SearchForm = ({ defaultQuery }: SearchFormProps) => (
  <form action="/search" role="search" className="flex gap-2">
    <label htmlFor="site-search" className="sr-only">
      Search quotes
    </label>
    <input
      id="site-search"
      name="q"
      type="search"
      defaultValue={defaultQuery}
      placeholder="Search quotes…"
      className="w-44 md:w-56 px-3 py-1 text-base bg-surface border border-line rounded-md"
    />
    <button type="submit" className={ACTION_BUTTON_CLASSES}>
      Search
    </button>
  </form>
);
