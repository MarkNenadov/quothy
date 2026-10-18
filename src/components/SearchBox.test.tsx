import React from "react";
import { render, screen } from "@testing-library/react";
import { usePathname, useSearchParams } from "next/navigation";
import { SearchBox } from "./SearchBox";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}));

const showPage = (pathname: string, search: string) => {
  jest.mocked(usePathname).mockReturnValue(pathname);
  jest
    .mocked(useSearchParams)
    .mockReturnValue(new URLSearchParams(search) as unknown as ReturnType<typeof useSearchParams>);
};

describe("SearchBox", () => {
  test("keeps the current query on the search page", () => {
    showPage("/search", "q=moths");
    render(<SearchBox />);

    expect(screen.getByRole("searchbox", { name: "Search quotes" })).toHaveValue("moths");
  });

  test("is empty on other pages", () => {
    showPage("/topics", "q=moths");
    render(<SearchBox />);

    expect(screen.getByRole("searchbox", { name: "Search quotes" })).toHaveValue("");
  });
});
