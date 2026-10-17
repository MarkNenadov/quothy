import { render, screen } from "@testing-library/react";
import QuotePage, { generateMetadata, generateStaticParams } from "./page";

jest.mock("../../../data/quoteData", () => ({
  data: [
    { id: "q1", quote: "A short quote", book: { title: "Book 1", author: "Author A" }, tags: ["test"] },
    { id: "q2", quote: "Another quote", book: { title: "Book 2", author: "Author B" }, tags: ["test"] },
  ],
}));

const paramsFor = (id: string) => ({ params: Promise.resolve({ id }) });

describe("QuotePage", () => {
  test("pre-builds a page for every quote", () => {
    expect(generateStaticParams()).toEqual([{ id: "q1" }, { id: "q2" }]);
  });

  test("shows that quote with a copy button and a way to a random quote", async () => {
    render(await QuotePage(paramsFor("q1")));

    expect(screen.getByText(/A short quote/)).toBeInTheDocument();
    expect(screen.queryByText(/Another quote/)).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: /copy/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /random quote/i })).toHaveAttribute("href", "/");
  });

  test("is not found for an unknown id", async () => {
    await expect(QuotePage(paramsFor("nope"))).rejects.toThrow();
  });

  test("titles and describes the page with the quote for sharing", async () => {
    const metadata = await generateMetadata(paramsFor("q1"));

    expect(metadata.title).toBe("“A short quote” — Author A");
    expect(metadata.description).toBe("“A short quote” — Author A, Book 1");
  });
});
