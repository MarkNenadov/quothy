import React from "react";
import { render, screen } from "@testing-library/react";
import { TopicView } from "./TopicView";
import { Quote } from "../models/quotes";

const quotes: Quote[] = [
  { id: "q1", quote: "Quote one", book: { title: "Book 1", author: "Author A" }, tags: ["moths"] },
];

describe("TopicView", () => {
  test("links the topic heading when given a heading href", () => {
    render(<TopicView tag="moths" quotes={quotes} headingHref="/topics/moths" />);

    expect(screen.getByRole("link", { name: "moths" })).toHaveAttribute("href", "/topics/moths");
  });

  test("renders a plain heading without a heading href", () => {
    render(<TopicView tag="moths" quotes={quotes} />);

    expect(screen.getByRole("heading", { name: "moths" })).toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  test("renders each quote with its author", () => {
    render(<TopicView tag="moths" quotes={quotes} />);

    expect(screen.getByText(/Quote one/)).toBeInTheDocument();
    expect(screen.getByText(/Author A/)).toBeInTheDocument();
  });
});
