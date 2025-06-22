import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { RandomQuote } from './RandomQuote';
import { Quote } from '../models/quotes';

// Mock the clipboard API
Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(),
  },
});

const mockQuote: Quote = {
  quote: "This is a test quote",
  book: {
    title: "Test Book",
    author: "Test Author"
  },
  tags: ["test", "example"]
};

describe('RandomQuote', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders quote when provided', () => {
    render(<RandomQuote randomQuote={mockQuote} />);
    
    expect(screen.getByText(/This is a test quote/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Author/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Book/i)).toBeInTheDocument();
  });

  test('does not render quote content when no quote provided', () => {
    render(<RandomQuote randomQuote={undefined} />);
    
    expect(screen.queryByText(/This is a test quote/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Test Author/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Test Book/i)).not.toBeInTheDocument();
  });

  test('copies quote to clipboard when clicked', () => {
    render(<RandomQuote randomQuote={mockQuote} />);
    
    const quoteElement = screen.getByText(/This is a test quote/i);
    fireEvent.click(quoteElement);
    
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      '"This is a test quote" - Test Author'
    );
  });

  test('renders quote with proper formatting', () => {
    render(<RandomQuote randomQuote={mockQuote} />);
    
    const quoteText = screen.getByText(/This is a test quote/i);
    expect(quoteText).toBeInTheDocument();
    
    // Check that the quote is wrapped in quotes
    expect(quoteText.textContent).toContain('"This is a test quote"');
  });
}); 