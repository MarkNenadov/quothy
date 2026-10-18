import { searchQuotes } from "./searchQuotes";
import { Quote } from "../models/quotes";

const quotes: Quote[] = [
  { id: "q1", quote: "Moths fly at night", book: { title: "Much Ado", author: "James Lowen" }, tags: ["moths"] },
  {
    id: "q2",
    quote: "Fungi everywhere",
    book: { title: "Entangled Life", author: "Merlin Sheldrake" },
    tags: ["fungi"],
  },
  { id: "q3", quote: "Le café est prêt", book: { title: "Café Book", author: "Émile Zola" }, tags: ["coffee"] },
];

const idsFor = (query: string) => searchQuotes(quotes, query).map((quote) => quote.id);

describe("searchQuotes", () => {
  test.each([
    ["night", ["q1"]],
    ["NIGHT", ["q1"]],
    ["sheldrake", ["q2"]],
    ["entangled", ["q2"]],
    ["coffee", ["q3"]],
    ["emile", ["q3"]],
    ["cafe pret", ["q3"]],
    ["moths fungi", []],
    ["nothing", []],
  ])("%p finds %p", (query, expectedIds) => {
    expect(idsFor(query)).toEqual(expectedIds);
  });

  test("finds nothing for a blank query", () => {
    expect(idsFor("   ")).toEqual([]);
  });
});
