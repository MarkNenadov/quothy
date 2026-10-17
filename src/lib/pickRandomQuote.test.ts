import { pickRandomQuote } from './pickRandomQuote';
import { Quote } from '../models/quotes';

const quotes: Quote[] = [
  { quote: "First", book: { title: "Book 1", author: "Author A" }, tags: ["test"] },
  { quote: "Second", book: { title: "Book 2", author: "Author B" }, tags: ["test"] },
  { quote: "Third", book: { title: "Book 3", author: "Author C" }, tags: ["test"] },
];

describe('pickRandomQuote', () => {
  test.each([
    [0, "First"],
    [0.5, "Second"],
    [0.99, "Third"],
  ])('random value %p picks %p', (randomValue, expectedQuote) => {
    expect(pickRandomQuote(quotes, () => randomValue).quote).toBe(expectedQuote);
  });
});
