import React from "react";
import { render, screen } from "@testing-library/react";
import { SearchForm } from "./SearchForm";

describe("SearchForm", () => {
  test("submits the query to /search as q", () => {
    render(<SearchForm defaultQuery="" />);

    const form = screen.getByRole("search");
    expect(form).toHaveAttribute("action", "/search");
    expect(screen.getByRole("searchbox", { name: "Search quotes" })).toHaveAttribute("name", "q");
  });

  test("starts with the given query", () => {
    render(<SearchForm defaultQuery="moths" />);

    expect(screen.getByRole("searchbox", { name: "Search quotes" })).toHaveValue("moths");
  });
});
