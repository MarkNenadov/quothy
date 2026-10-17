import React from "react";
import { render, screen } from "@testing-library/react";
import { usePathname } from "next/navigation";
import { NavTabs } from "./NavTabs";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("NavTabs", () => {
  test.each([
    ["/", "🎲 Random"],
    ["/authors", "✍️ By Author"],
    ["/authors/james-lowen", "✍️ By Author"],
    ["/topics", "📚 By Topic"],
    ["/topics/moths", "📚 By Topic"],
  ])("on %p only %p is the current page", (pathname, currentLabel) => {
    jest.mocked(usePathname).mockReturnValue(pathname);
    render(<NavTabs />);

    const currentTabs = screen.getAllByRole("link").filter((link) => link.getAttribute("aria-current") === "page");
    expect(currentTabs.map((link) => link.textContent)).toEqual([currentLabel]);
  });
});
