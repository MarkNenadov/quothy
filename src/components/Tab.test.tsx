import React from "react";
import { render, screen } from "@testing-library/react";
import { Tab } from "./Tab";

describe("Tab", () => {
  test("renders as a link named by its label", () => {
    render(<Tab label="Test Tab" href="/test" isActive={false} />);

    expect(screen.getByRole("link", { name: "Test Tab" })).toHaveAttribute("href", "/test");
  });

  test("marks the active tab as the current page", () => {
    render(<Tab label="Tab" href="/" isActive={true} />);

    const tab = screen.getByRole("link", { name: "Tab" });
    expect(tab).toHaveAttribute("aria-current", "page");
    expect(tab).toHaveClass("bg-surface-strong");
  });

  test("does not mark an inactive tab as the current page", () => {
    render(<Tab label="Tab" href="/" isActive={false} />);

    const tab = screen.getByRole("link", { name: "Tab" });
    expect(tab).not.toHaveAttribute("aria-current");
    expect(tab).toHaveClass("bg-surface");
  });
});
