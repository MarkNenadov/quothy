import { Quote } from '../models/quotes';

export const pickRandomQuote = (quotes: Quote[], random: () => number = Math.random): Quote =>
  quotes[Math.floor(random() * quotes.length)];
