import React from 'react';
import { render, screen } from '@testing-library/react';
import { SubText } from './SubText';

describe('SubText', () => {
  test('renders children content', () => {
    render(<SubText>Test subtext</SubText>);
    
    expect(screen.getByText('Test subtext')).toBeInTheDocument();
  });

  test('applies correct styling classes', () => {
    render(<SubText>Styled subtext</SubText>);
    
    const subtextElement = screen.getByText('Styled subtext');
    expect(subtextElement).toHaveClass('opacity-70');
    expect(subtextElement).toHaveClass('w-full');
    expect(subtextElement).toHaveClass('text-right');
    expect(subtextElement).toHaveClass('text-sm');
    expect(subtextElement).toHaveClass('italic');
  });

  test('renders complex content', () => {
    render(
      <SubText>
        <span>Author</span> - <span>Book Title</span>
      </SubText>
    );
    
    expect(screen.getByText('Author')).toBeInTheDocument();
    expect(screen.getByText('Book Title')).toBeInTheDocument();
  });

  test('renders without errors when no content provided', () => {
    render(<SubText>{null}</SubText>);
    
    // Should render without errors - check that the container exists
    const container = screen.getByTestId('subtext-container');
    expect(container).toBeInTheDocument();
  });
}); 