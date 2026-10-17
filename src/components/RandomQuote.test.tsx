import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RandomQuote } from './RandomQuote';
import { Quote } from '../models/quotes';

const mockQuote: Quote = {
  quote: "This is a test quote",
  book: {
    title: "Test Book",
    author: "Test Author"
  },
  tags: ["test", "example"]
};

describe('RandomQuote', () => {
  const mockAnotherQuote = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders quote when provided', () => {
    render(<RandomQuote randomQuote={mockQuote} onAnotherQuote={mockAnotherQuote} />);

    expect(screen.getByText(/This is a test quote/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Author/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Book/i)).toBeInTheDocument();
  });

  test('does not render quote content when no quote provided', () => {
    render(<RandomQuote randomQuote={undefined} onAnotherQuote={mockAnotherQuote} />);

    expect(screen.queryByText(/This is a test quote/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Test Author/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Test Book/i)).not.toBeInTheDocument();
  });

  test('renders quote with proper formatting', () => {
    render(<RandomQuote randomQuote={mockQuote} onAnotherQuote={mockAnotherQuote} />);

    const quoteText = screen.getByText(/This is a test quote/i);
    expect(quoteText.textContent).toContain('“This is a test quote”');
  });

  test('another quote button calls onAnotherQuote', async () => {
    render(<RandomQuote randomQuote={mockQuote} onAnotherQuote={mockAnotherQuote} />);

    await userEvent.click(screen.getByRole('button', { name: /another quote/i }));

    expect(mockAnotherQuote).toHaveBeenCalledTimes(1);
  });

  describe('copy button', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    test('copies the quote and briefly confirms it was copied', async () => {
      const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
      const writeText = jest.spyOn(navigator.clipboard, 'writeText').mockResolvedValue();
      render(<RandomQuote randomQuote={mockQuote} onAnotherQuote={mockAnotherQuote} />);

      await user.click(screen.getByRole('button', { name: /copy/i }));

      expect(writeText).toHaveBeenCalledWith('"This is a test quote" - Test Author');
      expect(await screen.findByRole('button', { name: /copied/i })).toBeInTheDocument();

      act(() => {
        jest.advanceTimersByTime(2000);
      });

      expect(screen.getByRole('button', { name: /^📋 copy$/i })).toBeInTheDocument();
    });
  });
});
