import React from "react";
import { render, screen } from "@testing-library/react";
import { MAX_QUOTE_LENGTH, QuoteCardImage } from "./QuoteCardImage";
import { Quote } from "../../models/quotes";

const quoteWithLength = (length: number): Quote => ({
  id: "q1",
  quote: "word ".repeat(length / 5).trim(),
  book: { title: "Test Book", author: "Test Author" },
  tags: ["test"],
});

describe("QuoteCardImage", () => {
  test("shows the quote, author, book and site name", () => {
    render(<QuoteCardImage quote={quoteWithLength(20)} />);

    expect(screen.getByText("“word word word word”")).toBeInTheDocument();
    expect(screen.getByText("— Test Author, Test Book")).toBeInTheDocument();
    expect(screen.getByText("Quothy")).toBeInTheDocument();
  });

  test("shortens long quotes so they fit on the card", () => {
    render(<QuoteCardImage quote={quoteWithLength(1000)} />);

    const quoteText = screen.getByText(/^“word/).textContent ?? "";
    expect(quoteText.length).toBeLessThanOrEqual(MAX_QUOTE_LENGTH + 2);
    expect(quoteText).toMatch(/…”$/);
  });
});
