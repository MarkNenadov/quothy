import { render, screen } from "@testing-library/react";
import SearchPage from "./page";

jest.mock("../../data/quoteData", () => ({
  data: [
    { id: "q1", quote: "Moths fly at night", book: { title: "Much Ado", author: "James Lowen" }, tags: ["moths"] },
    { id: "q2", quote: "Moths love light", book: { title: "Much Ado", author: "James Lowen" }, tags: ["moths"] },
    {
      id: "q3",
      quote: "Fungi everywhere",
      book: { title: "Entangled Life", author: "Merlin Sheldrake" },
      tags: ["fungi"],
    },
  ],
}));

const searchFor = (q?: string | string[]) => SearchPage({ searchParams: Promise.resolve({ q }) });

describe("SearchPage", () => {
  test("lists matching quotes with a count", async () => {
    render(await searchFor("moths"));

    expect(screen.getByRole("heading", { name: "2 quotes matching “moths”" })).toBeInTheDocument();
    expect(screen.getByText(/Moths fly at night/)).toBeInTheDocument();
    expect(screen.getByText(/Moths love light/)).toBeInTheDocument();
    expect(screen.queryByText(/Fungi everywhere/)).not.toBeInTheDocument();
  });

  test("says when nothing matches", async () => {
    render(await searchFor("unicorns"));

    expect(screen.getByRole("heading", { name: "0 quotes matching “unicorns”" })).toBeInTheDocument();
  });

  test("uses the first query when several are given", async () => {
    render(await searchFor(["fungi", "moths"]));

    expect(screen.getByRole("heading", { name: "1 quote matching “fungi”" })).toBeInTheDocument();
  });

  test.each([undefined, "   "])("prompts for a query when given %p", async (q) => {
    render(await searchFor(q));

    expect(screen.getByText(/type in the search box/i)).toBeInTheDocument();
  });
});
