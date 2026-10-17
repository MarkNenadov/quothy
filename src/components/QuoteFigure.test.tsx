import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { QuoteFigure } from './QuoteFigure';
import { Quote } from '../models/quotes';

const quote: Quote = {
  quote: "A test quote",
  book: { title: "Test Book", author: "Test Author" },
  tags: ["test"],
};

describe('QuoteFigure', () => {
  test('renders the quote text in a blockquote inside a figure', () => {
    render(<QuoteFigure quote={quote} />);

    const blockquote = within(screen.getByRole('figure')).getByRole('blockquote');
    expect(blockquote).toHaveTextContent('“A test quote”');
  });

  test('captions the quote with the author and cites the book title', () => {
    const { container } = render(<QuoteFigure quote={quote} />);

    expect(container.querySelector('figcaption')).toHaveTextContent('Test Author');
    expect(container.querySelector('figcaption cite')).toHaveTextContent('Test Book');
  });

  test('omits the author when showAuthor is false', () => {
    const { container } = render(<QuoteFigure quote={quote} showAuthor={false} />);

    expect(container.querySelector('figcaption')).not.toHaveTextContent('Test Author');
    expect(container.querySelector('figcaption cite')).toHaveTextContent('Test Book');
  });
});
