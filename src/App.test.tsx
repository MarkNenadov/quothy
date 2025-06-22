import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Mock the clipboard API
Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(),
  },
});

test('renders Quothy title', () => {
  render(<App />);
  const titleElement = screen.getByText(/✌ Quothy ✌/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders all three tabs', () => {
  render(<App />);
  expect(screen.getByText(/🎲 Random/i)).toBeInTheDocument();
  expect(screen.getByText(/✍️ By Author/i)).toBeInTheDocument();
  expect(screen.getByText(/📚 By Topic/i)).toBeInTheDocument();
});

test('shows random quote by default', () => {
  render(<App />);
  // The random tab should be active by default
  const randomTab = screen.getByText(/🎲 Random/i).closest('div');
  expect(randomTab).toHaveClass('bg-sky-300');
});

test('switches to author tab when clicked', () => {
  render(<App />);
  const authorTab = screen.getByText(/✍️ By Author/i);
  fireEvent.click(authorTab);
  const authorTabElement = authorTab.closest('div');
  expect(authorTabElement).toHaveClass('bg-sky-300');
});

test('switches to topic tab when clicked', () => {
  render(<App />);
  const topicTab = screen.getByText(/📚 By Topic/i);
  fireEvent.click(topicTab);
  const topicTabElement = topicTab.closest('div');
  expect(topicTabElement).toHaveClass('bg-sky-300');
});

test('displays footer information', () => {
  render(<App />);
  expect(screen.getByText(/quotes present from/i)).toBeInTheDocument();
  expect(screen.getByText(/GitHub/i)).toBeInTheDocument();
});
