import React from "react";
import { render, screen } from "@testing-library/react";
import { BrandCardImage } from "./BrandCardImage";

describe("BrandCardImage", () => {
  test("shows the site name, tagline and collection size", () => {
    render(<BrandCardImage quoteCount={107} authorCount={53} />);

    expect(screen.getByText("Quothy")).toBeInTheDocument();
    expect(screen.getByText("Quotes from my reading")).toBeInTheDocument();
    expect(screen.getByText("107 quotes from 53 authors")).toBeInTheDocument();
  });
});
