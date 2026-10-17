import React from "react";
import { render, screen } from "@testing-library/react";
import { SiteFooter } from "./SiteFooter";
import { Quote } from "../models/quotes";

const quotes: Quote[] = [
  { quote: "Quote one", book: { title: "Book 1", author: "Author A" }, tags: ["test"] },
  { quote: "Quote two", book: { title: "Book 2", author: "Author A" }, tags: ["test"] },
  { quote: "Quote three", book: { title: "Book 3", author: "Author B" }, tags: ["test"] },
];

describe("SiteFooter", () => {
  test("counts distinct authors, not distinct books", () => {
    render(<SiteFooter quotes={quotes} />);

    expect(screen.getByText(/3 quotes present from 2 authors/)).toBeInTheDocument();
  });
});
