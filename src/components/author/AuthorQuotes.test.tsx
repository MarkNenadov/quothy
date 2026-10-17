import React from "react";
import { render, screen } from "@testing-library/react";
import { AuthorQuotes } from "./AuthorQuotes";
import { Quote } from "../../models/quotes";

const quotes: Quote[] = [
  { id: "q1", quote: "Quote one", book: { title: "Book 1", author: "Author A" }, tags: ["test"] },
];

describe("AuthorQuotes", () => {
  test("links the author heading when given a heading href", () => {
    render(<AuthorQuotes author="Author A" quotes={quotes} headingHref="/authors/author-a" />);

    expect(screen.getByRole("link", { name: "Author A" })).toHaveAttribute("href", "/authors/author-a");
  });

  test("renders a plain heading without a heading href", () => {
    render(<AuthorQuotes author="Author A" quotes={quotes} />);

    expect(screen.getByRole("heading", { name: "Author A" })).toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  test("renders each quote", () => {
    render(<AuthorQuotes author="Author A" quotes={quotes} />);

    expect(screen.getByText(/Quote one/)).toBeInTheDocument();
  });
});
