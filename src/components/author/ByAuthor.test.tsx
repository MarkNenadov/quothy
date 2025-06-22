import React from 'react';
import { render, screen } from '@testing-library/react';
import { ByAuthor } from './ByAuthor';
import { Quote } from '../../models/quotes';

// Mock the AuthorQuotes component
jest.mock('./AuthorQuotes', () => ({
  AuthorQuotes: ({ author, quotes }: { author: string; quotes: Quote[] }) => (
    <div data-testid={`author-${author}`}>
      {author} ({quotes.length} quotes)
    </div>
  ),
}));

describe('ByAuthor', () => {
  const mockQuotes: Quote[] = [
    {
      quote: "First quote by Author A",
      book: { title: "Book 1", author: "Author A" },
      tags: ["test"]
    },
    {
      quote: "Second quote by Author A",
      book: { title: "Book 2", author: "Author A" },
      tags: ["test"]
    },
    {
      quote: "Quote by Author B",
      book: { title: "Book 3", author: "Author B" },
      tags: ["test"]
    }
  ];

  test('renders authors grouped by name', () => {
    render(<ByAuthor quoteList={mockQuotes} />);
    
    expect(screen.getByTestId('author-Author A')).toBeInTheDocument();
    expect(screen.getByTestId('author-Author B')).toBeInTheDocument();
  });

  test('displays correct quote counts for each author', () => {
    render(<ByAuthor quoteList={mockQuotes} />);
    
    expect(screen.getByText('Author A (2 quotes)')).toBeInTheDocument();
    expect(screen.getByText('Author B (1 quotes)')).toBeInTheDocument();
  });

  test('handles empty quote list', () => {
    render(<ByAuthor quoteList={[]} />);
    
    // Should render without errors, but no authors
    expect(screen.queryByTestId(/author-/)).not.toBeInTheDocument();
  });

  test('handles single author with multiple quotes', () => {
    const singleAuthorQuotes: Quote[] = [
      {
        quote: "Quote 1",
        book: { title: "Book 1", author: "Single Author" },
        tags: ["test"]
      },
      {
        quote: "Quote 2",
        book: { title: "Book 2", author: "Single Author" },
        tags: ["test"]
      }
    ];

    render(<ByAuthor quoteList={singleAuthorQuotes} />);
    
    expect(screen.getByTestId('author-Single Author')).toBeInTheDocument();
    expect(screen.getByText('Single Author (2 quotes)')).toBeInTheDocument();
  });

  test('handles quotes with same author but different books', () => {
    const sameAuthorQuotes: Quote[] = [
      {
        quote: "Quote from Book 1",
        book: { title: "Book 1", author: "Same Author" },
        tags: ["test"]
      },
      {
        quote: "Quote from Book 2",
        book: { title: "Book 2", author: "Same Author" },
        tags: ["test"]
      }
    ];

    render(<ByAuthor quoteList={sameAuthorQuotes} />);
    
    expect(screen.getByTestId('author-Same Author')).toBeInTheDocument();
    expect(screen.getByText('Same Author (2 quotes)')).toBeInTheDocument();
  });
}); 