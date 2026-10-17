import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CopyQuoteButton } from "./CopyQuoteButton";
import { Quote } from "../models/quotes";

const quote: Quote = {
  id: "q1",
  quote: "This is a test quote",
  book: { title: "Test Book", author: "Test Author" },
  tags: ["test"],
};

describe("CopyQuoteButton", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("copies the quote and briefly confirms it was copied", async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    const writeText = jest.spyOn(navigator.clipboard, "writeText").mockResolvedValue();
    render(<CopyQuoteButton quote={quote} />);

    await user.click(screen.getByRole("button", { name: /copy/i }));

    expect(writeText).toHaveBeenCalledWith('"This is a test quote" - Test Author');
    expect(await screen.findByRole("button", { name: /copied/i })).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(screen.getByRole("button", { name: /^📋 copy$/i })).toBeInTheDocument();
  });
});
