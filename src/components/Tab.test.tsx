import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tab } from "./Tab";

describe("Tab", () => {
  const mockClickHook = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders as a button named by its label", () => {
    render(<Tab label="Test Tab" isActive={false} clickHook={mockClickHook} />);

    expect(screen.getByRole("button", { name: "Test Tab" })).toBeInTheDocument();
  });

  test.each([
    [true, "true", "bg-surface-strong"],
    [false, "false", "bg-surface"],
  ])("isActive=%p sets aria-pressed=%p and %p", (isActive, ariaPressed, backgroundClass) => {
    render(<Tab label="Tab" isActive={isActive} clickHook={mockClickHook} />);

    const tab = screen.getByRole("button", { name: "Tab" });
    expect(tab).toHaveAttribute("aria-pressed", ariaPressed);
    expect(tab).toHaveClass(backgroundClass);
  });

  test("calls clickHook when clicked", async () => {
    render(<Tab label="Clickable Tab" isActive={false} clickHook={mockClickHook} />);

    await userEvent.click(screen.getByRole("button", { name: "Clickable Tab" }));

    expect(mockClickHook).toHaveBeenCalledTimes(1);
  });

  test.each(["{Enter}", " "])("calls clickHook when %p is pressed while focused", async (key) => {
    render(<Tab label="Keyboard Tab" isActive={false} clickHook={mockClickHook} />);

    await userEvent.tab();
    expect(screen.getByRole("button", { name: "Keyboard Tab" })).toHaveFocus();
    await userEvent.keyboard(key);

    expect(mockClickHook).toHaveBeenCalledTimes(1);
  });
});
