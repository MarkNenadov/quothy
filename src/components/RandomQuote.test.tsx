import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/navigation";
import { RandomQuote } from "./RandomQuote";
import { Quote } from "../models/quotes";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const mockQuote: Quote = {
  id: "q1",
  quote: "This is a test quote",
  book: {
    title: "Test Book",
    author: "Test Author",
  },
  tags: ["test", "example"],
};

describe("RandomQuote", () => {
  const refresh = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    jest.mocked(useRouter).mockReturnValue({ refresh } as unknown as ReturnType<typeof useRouter>);
  });

  test("renders the quote, author and book", () => {
    render(<RandomQuote quote={mockQuote} />);

    expect(screen.getByText(/This is a test quote/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Author/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Book/i)).toBeInTheDocument();
  });

  test("another quote button asks the server for a fresh random quote", async () => {
    render(<RandomQuote quote={mockQuote} />);

    await userEvent.click(screen.getByRole("button", { name: /another quote/i }));

    expect(refresh).toHaveBeenCalledTimes(1);
  });

  test("offers a copy button", () => {
    render(<RandomQuote quote={mockQuote} />);

    expect(screen.getByRole("button", { name: /copy/i })).toBeInTheDocument();
  });
});
