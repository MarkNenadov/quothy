import React from "react";
import Link from "next/link";
import { Quote } from "../models/quotes";

interface QuoteFigureProps {
  quote: Quote;
  showAuthor?: boolean;
}

export const QuoteFigure = ({ quote: { id, quote, book }, showAuthor = true }: QuoteFigureProps) => (
  <figure>
    <blockquote className="font-serif leading-relaxed">&ldquo;{quote}&rdquo;</blockquote>
    <figcaption className="mt-3 text-right text-sm opacity-70">
      &mdash; {showAuthor && <>{book.author}, </>}
      <cite>{book.title}</cite>
      <Link href={`/quotes/${id}`} aria-label="Permalink to this quote" className="ml-2 hover:opacity-100">
        🔗
      </Link>
    </figcaption>
  </figure>
);
