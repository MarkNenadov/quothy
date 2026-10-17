import React from "react";
import { Quote } from "../models/quotes";

interface SiteFooterProps {
  quotes: Quote[];
}

export const SiteFooter = ({ quotes }: SiteFooterProps) => (
  <footer className="text-sm text-center pt-2">
    {quotes.length} quotes present from {new Set(quotes.map((quote) => quote.book.author)).size} authors. Quothy uses
    Next.js, Typescript, and TailwindCSS. You can see the source on{" "}
    <a className="underline text-accent" href="https://github.com/MarkNenadov/quothy">
      GitHub
    </a>
    .
  </footer>
);
