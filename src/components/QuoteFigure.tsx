import React from 'react';
import { Quote } from '../models/quotes';

interface QuoteFigureProps {
  quote: Quote;
  showAuthor?: boolean;
}

export const QuoteFigure = ({ quote: { quote, book }, showAuthor = true }: QuoteFigureProps) => (
  <figure>
    <blockquote className="font-serif leading-relaxed">&ldquo;{quote}&rdquo;</blockquote>
    <figcaption className="mt-3 text-right text-sm opacity-70">
      &mdash; {showAuthor && <>{book.author}, </>}<cite>{book.title}</cite>
    </figcaption>
  </figure>
);
