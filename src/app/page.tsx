import { connection } from "next/server";
import { RandomQuote } from "../components/RandomQuote";
import { data } from "../data/quoteData";
import { pickRandomQuote } from "../lib/pickRandomQuote";

export default async function Home() {
  // Render per request so each visit (and each "Another quote") gets a fresh random quote
  await connection();

  return <RandomQuote quote={pickRandomQuote(data)} />;
}
