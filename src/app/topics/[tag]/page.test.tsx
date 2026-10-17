import { render, screen } from "@testing-library/react";
import TopicPage, { generateMetadata, generateStaticParams } from "./page";

jest.mock("../../../data/quoteData", () => ({
  data: [
    { id: "q1", quote: "About moths", book: { title: "Book 1", author: "Author A" }, tags: ["moths", "nature"] },
    { id: "q2", quote: "About nature", book: { title: "Book 2", author: "Author B" }, tags: ["nature"] },
  ],
}));

const paramsFor = (tag: string) => ({ params: Promise.resolve({ tag }) });

describe("TopicPage", () => {
  test("pre-builds a page for every topic", () => {
    expect(generateStaticParams()).toEqual([{ tag: "moths" }, { tag: "nature" }]);
  });

  test("shows only quotes with that topic", async () => {
    render(await TopicPage(paramsFor("moths")));

    expect(screen.getByRole("heading", { name: "moths" })).toBeInTheDocument();
    expect(screen.getByText(/About moths/)).toBeInTheDocument();
    expect(screen.queryByText(/About nature/)).not.toBeInTheDocument();
  });

  test("is not found for an unknown topic", async () => {
    await expect(TopicPage(paramsFor("nothing"))).rejects.toThrow();
  });

  test("titles and describes the page for sharing", async () => {
    const metadata = await generateMetadata(paramsFor("nature"));

    expect(metadata.title).toBe("Quotes about nature");
    expect(metadata.description).toBe("2 quotes about nature from my reading.");
  });
});
