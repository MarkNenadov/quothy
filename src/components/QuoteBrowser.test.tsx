import React from 'react';
import { render, screen } from '@testing-library/react';
import { QuoteBrowser } from './QuoteBrowser';
import { Quote } from '../models/quotes';

const quotes: Quote[] = [
  { quote: "Quote one", book: { title: "Book 1", author: "Author A" }, tags: ["test"] },
  { quote: "Quote two", book: { title: "Book 2", author: "Author A" }, tags: ["test"] },
  { quote: "Quote three", book: { title: "Book 3", author: "Author B" }, tags: ["test"] },
];

describe('QuoteBrowser', () => {
  test('shows the initial quote on first render', () => {
    render(<QuoteBrowser quotes={quotes} initialQuote={quotes[1]} />);

    expect(screen.getByText(/Quote two/)).toBeInTheDocument();
  });

  test('footer counts distinct authors, not distinct books', () => {
    render(<QuoteBrowser quotes={quotes} initialQuote={quotes[0]} />);

    expect(screen.getByText(/3 quotes present from 2 authors/)).toBeInTheDocument();
  });
});
