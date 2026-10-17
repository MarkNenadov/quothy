import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './page';

// Two books by one author plus one book by another: 3 quotes, 3 books, 2 authors
jest.mock('../data/quoteData', () => ({
  data: [
    {
      quote: "Quote one",
      book: { title: "Book 1", author: "Author A" },
      tags: ["test"],
    },
    {
      quote: "Quote two",
      book: { title: "Book 2", author: "Author A" },
      tags: ["test"],
    },
    {
      quote: "Quote three",
      book: { title: "Book 3", author: "Author B" },
      tags: ["test"],
    },
  ],
}));

describe('Home', () => {
  test('footer counts distinct authors, not distinct books', () => {
    render(<Home />);

    expect(screen.getByText(/3 quotes present from 2 authors/)).toBeInTheDocument();
  });
});
