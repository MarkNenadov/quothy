import React from 'react';
import { render, screen } from '@testing-library/react';
import { ByTopic } from './ByTopic';
import { Quote } from '../models/quotes';

// Mock the TopicView component
jest.mock('./TopicView', () => ({
  TopicView: ({ tag, quotes }: { tag: string; quotes: Quote[] }) => (
    <div data-testid={`topic-${tag}`}>
      {tag} ({quotes.length} quotes)
    </div>
  ),
}));

describe('ByTopic', () => {
  const mockQuotes: Quote[] = [
    {
      quote: "Quote about love",
      book: { title: "Book 1", author: "Author A" },
      tags: ["love", "romance"]
    },
    {
      quote: "Quote about life",
      book: { title: "Book 2", author: "Author B" },
      tags: ["life", "philosophy"]
    },
    {
      quote: "Another quote about love",
      book: { title: "Book 3", author: "Author C" },
      tags: ["love", "emotion"]
    }
  ];

  test('renders topics grouped by tags', () => {
    render(<ByTopic quoteList={mockQuotes} />);
    
    expect(screen.getByTestId('topic-love')).toBeInTheDocument();
    expect(screen.getByTestId('topic-romance')).toBeInTheDocument();
    expect(screen.getByTestId('topic-life')).toBeInTheDocument();
    expect(screen.getByTestId('topic-philosophy')).toBeInTheDocument();
    expect(screen.getByTestId('topic-emotion')).toBeInTheDocument();
  });

  test('displays correct quote counts for each topic', () => {
    render(<ByTopic quoteList={mockQuotes} />);
    
    expect(screen.getByText('love (2 quotes)')).toBeInTheDocument();
    expect(screen.getByText('romance (1 quotes)')).toBeInTheDocument();
    expect(screen.getByText('life (1 quotes)')).toBeInTheDocument();
    expect(screen.getByText('philosophy (1 quotes)')).toBeInTheDocument();
    expect(screen.getByText('emotion (1 quotes)')).toBeInTheDocument();
  });

  test('handles empty quote list', () => {
    render(<ByTopic quoteList={[]} />);
    
    // Should render without errors, but no topics
    expect(screen.queryByTestId(/topic-/)).not.toBeInTheDocument();
  });

  test('handles quotes with single tags', () => {
    const singleTagQuotes: Quote[] = [
      {
        quote: "Quote with single tag",
        book: { title: "Book 1", author: "Author A" },
        tags: ["single"]
      }
    ];

    render(<ByTopic quoteList={singleTagQuotes} />);
    
    expect(screen.getByTestId('topic-single')).toBeInTheDocument();
    expect(screen.getByText('single (1 quotes)')).toBeInTheDocument();
  });

  test('handles quotes with multiple tags', () => {
    const multiTagQuotes: Quote[] = [
      {
        quote: "Quote with multiple tags",
        book: { title: "Book 1", author: "Author A" },
        tags: ["tag1", "tag2", "tag3"]
      }
    ];

    render(<ByTopic quoteList={multiTagQuotes} />);
    
    expect(screen.getByTestId('topic-tag1')).toBeInTheDocument();
    expect(screen.getByTestId('topic-tag2')).toBeInTheDocument();
    expect(screen.getByTestId('topic-tag3')).toBeInTheDocument();
    
    expect(screen.getByText('tag1 (1 quotes)')).toBeInTheDocument();
    expect(screen.getByText('tag2 (1 quotes)')).toBeInTheDocument();
    expect(screen.getByText('tag3 (1 quotes)')).toBeInTheDocument();
  });

  test('applies correct container styling', () => {
    render(<ByTopic quoteList={mockQuotes} />);
    
    const container = screen.getByTestId('topic-love').parentElement;
    expect(container).toHaveClass('text-2xl');
    expect(container).toHaveClass('p-1');
    expect(container).toHaveClass('md:p-4');
  });
}); 