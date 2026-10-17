import { render, screen } from "@testing-library/react";
import AuthorPage, { generateMetadata, generateStaticParams } from "./page";

jest.mock("../../../data/quoteData", () => ({
  data: [
    { id: "q1", quote: "Quote by A", book: { title: "Book 1", author: "Author A" }, tags: ["test"] },
    { id: "q2", quote: "Another by A", book: { title: "Book 2", author: "Author A" }, tags: ["test"] },
    { id: "q3", quote: "Quote by B", book: { title: "Book 3", author: "Author B" }, tags: ["test"] },
  ],
}));

const paramsFor = (slug: string) => ({ params: Promise.resolve({ slug }) });

describe("AuthorPage", () => {
  test("pre-builds a page for every author", () => {
    expect(generateStaticParams()).toEqual([{ slug: "author-a" }, { slug: "author-b" }]);
  });

  test("shows only that author's quotes", async () => {
    render(await AuthorPage(paramsFor("author-a")));

    expect(screen.getByRole("heading", { name: "Author A" })).toBeInTheDocument();
    expect(screen.getByText(/Quote by A/)).toBeInTheDocument();
    expect(screen.getByText(/Another by A/)).toBeInTheDocument();
    expect(screen.queryByText(/Quote by B/)).not.toBeInTheDocument();
  });

  test("is not found for an unknown author", async () => {
    await expect(AuthorPage(paramsFor("nobody"))).rejects.toThrow();
  });

  test("titles and describes the page for sharing", async () => {
    const metadata = await generateMetadata(paramsFor("author-a"));

    expect(metadata.title).toBe("Quotes by Author A");
    expect(metadata.description).toBe("2 quotes by Author A from my reading.");
  });
});
