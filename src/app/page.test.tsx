import { render, screen } from "@testing-library/react";
import Home from "./page";

jest.mock("next/server", () => ({
  connection: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("../data/quoteData", () => ({
  data: [
    {
      id: "q1",
      quote: "The only quote",
      book: { title: "Book 1", author: "Author A" },
      tags: ["test"],
    },
  ],
}));

describe("Home", () => {
  test("server-renders a random quote without waiting for the client", async () => {
    render(await Home());

    expect(screen.getByText(/The only quote/)).toBeInTheDocument();
  });
});
