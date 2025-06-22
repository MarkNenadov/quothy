import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tab } from './Tab';

describe('Tab', () => {
  const mockClickHook = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders with correct label', () => {
    render(
      <Tab 
        label="Test Tab" 
        isActive={false} 
        clickHook={mockClickHook} 
        tabIndex={0} 
      />
    );
    
    expect(screen.getByText('Test Tab')).toBeInTheDocument();
  });

  test('applies active styles when isActive is true', () => {
    render(
      <Tab 
        label="Active Tab" 
        isActive={true} 
        clickHook={mockClickHook} 
        tabIndex={0} 
      />
    );
    
    const tabElement = screen.getByText('Active Tab').closest('div');
    expect(tabElement).toHaveClass('bg-sky-300');
  });

  test('applies inactive styles when isActive is false', () => {
    render(
      <Tab 
        label="Inactive Tab" 
        isActive={false} 
        clickHook={mockClickHook} 
        tabIndex={0} 
      />
    );
    
    const tabElement = screen.getByText('Inactive Tab').closest('div');
    expect(tabElement).toHaveClass('bg-sky-200');
  });

  test('calls clickHook when clicked', () => {
    render(
      <Tab 
        label="Clickable Tab" 
        isActive={false} 
        clickHook={mockClickHook} 
        tabIndex={0} 
      />
    );
    
    const tabElement = screen.getByText('Clickable Tab');
    fireEvent.click(tabElement);
    
    expect(mockClickHook).toHaveBeenCalledTimes(1);
  });

  test('has correct accessibility attributes', () => {
    render(
      <Tab 
        label="Accessible Tab" 
        isActive={false} 
        clickHook={mockClickHook} 
        tabIndex={1} 
      />
    );
    
    const tabElement = screen.getByText('Accessible Tab').closest('div');
    
    expect(tabElement).toHaveAttribute('role', 'button');
    expect(tabElement).toHaveAttribute('aria-label', 'Accessible Tab');
    expect(tabElement).toHaveAttribute('tabIndex', '1');
  });

  test('has correct base classes', () => {
    render(
      <Tab 
        label="Styled Tab" 
        isActive={false} 
        clickHook={mockClickHook} 
        tabIndex={0} 
      />
    );
    
    const tabElement = screen.getByText('Styled Tab').closest('div');
    
    expect(tabElement).toHaveClass('cursor-pointer');
    expect(tabElement).toHaveClass('mb-2');
    expect(tabElement).toHaveClass('p-3');
    expect(tabElement).toHaveClass('w-1/3');
    expect(tabElement).toHaveClass('text-center');
    expect(tabElement).toHaveClass('border');
    expect(tabElement).toHaveClass('border-1');
    expect(tabElement).toHaveClass('border-black');
    expect(tabElement).toHaveClass('text-lg');
    expect(tabElement).toHaveClass('md:text-2xl');
  });
}); 