import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { QuoteContainer } from './QuoteContainer';

describe('QuoteContainer', () => {
  test('renders children content', () => {
    render(
      <QuoteContainer>
        <div>Test content</div>
      </QuoteContainer>
    );
    
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  test('applies custom text style when provided', () => {
    render(
      <QuoteContainer textStyle="text-xl font-bold">
        <div>Styled content</div>
      </QuoteContainer>
    );
    
    const container = screen.getByText('Styled content').parentElement;
    expect(container).toHaveClass('text-xl');
    expect(container).toHaveClass('font-bold');
  });

  test('applies default styles when no text style provided', () => {
    render(
      <QuoteContainer>
        <div>Default content</div>
      </QuoteContainer>
    );
    
    const container = screen.getByText('Default content').parentElement;
    expect(container).toHaveClass('bg-sky-200');
    expect(container).toHaveClass('p-4');
    expect(container).toHaveClass('w-full');
  });

  test('calls onClick handler when provided and clicked', () => {
    const mockOnClick = jest.fn();
    
    render(
      <QuoteContainer onClick={mockOnClick}>
        <div>Clickable content</div>
      </QuoteContainer>
    );
    
    const container = screen.getByText('Clickable content').parentElement;
    fireEvent.click(container!);
    
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick when not provided', () => {
    render(
      <QuoteContainer>
        <div>Non-clickable content</div>
      </QuoteContainer>
    );
    
    const container = screen.getByText('Non-clickable content').parentElement;
    fireEvent.click(container!);
    
    // Should not throw any errors
    expect(container).toBeInTheDocument();
  });

  test('renders complex nested content', () => {
    render(
      <QuoteContainer textStyle="text-lg">
        <div>
          <h2>Title</h2>
          <p>Paragraph content</p>
          <span>Inline text</span>
        </div>
      </QuoteContainer>
    );
    
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Paragraph content')).toBeInTheDocument();
    expect(screen.getByText('Inline text')).toBeInTheDocument();
  });
}); 