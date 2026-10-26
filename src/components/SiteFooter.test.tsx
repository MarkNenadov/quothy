import React from "react";
import { render, screen } from "@testing-library/react";
import { SiteFooter } from "./SiteFooter";
import { Quote } from "../models/quotes";

const quotes: Quote[] = [
  { id: "q1", quote: "Quote one", book: { title: "Book 1", author: "Author A" }, tags: ["test"] },
  { id: "q2", quote: "Quote two", book: { title: "Book 2", author: "Author A" }, tags: ["test"] },
  { id: "q3", quote: "Quote three", book: { title: "Book 3", author: "Author B" }, tags: ["test"] },
];

describe("SiteFooter", () => {
  test("counts distinct authors, not distinct books", () => {
    render(<SiteFooter quotes={quotes} />);

    expect(screen.getByRole("contentinfo")).toHaveTextContent(/^3 quotes from 2 authors\./);
  });

  test("credits the builder and stack", () => {
    render(<SiteFooter quotes={quotes} />);

    expect(screen.getByRole("contentinfo")).toHaveTextContent(
      /Built by Mark Nenadov with Next\.js, TypeScript, and TailwindCSS\.$/,
    );
  });

  test("links Built to the source on GitHub", () => {
    render(<SiteFooter quotes={quotes} />);

    expect(screen.getByRole("link", { name: "Built" })).toHaveAttribute(
      "href",
      "https://github.com/MarkNenadov/quothy",
    );
  });
});
