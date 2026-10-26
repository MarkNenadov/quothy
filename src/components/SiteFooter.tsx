import React from "react";
import { Quote } from "../models/quotes";

interface SiteFooterProps {
  quotes: Quote[];
}

export const SiteFooter = ({ quotes }: SiteFooterProps) => (
  <footer className="text-sm text-center pt-2">
    <p>
      {quotes.length} quotes from {new Set(quotes.map((quote) => quote.book.author)).size} authors. Built by Mark
      Nenadov with Next.js, TypeScript, and TailwindCSS.
    </p>
    <p>
      You can see the source on{" "}
      <a className="underline text-accent" href="https://github.com/MarkNenadov/quothy">
        GitHub
      </a>
      .
    </p>
  </footer>
);
