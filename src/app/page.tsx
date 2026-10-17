import { connection } from "next/server";
import { QuoteBrowser } from "../components/QuoteBrowser";
import { data } from "../data/quoteData";
import { pickRandomQuote } from "../lib/pickRandomQuote";

export default async function Home() {
  // Render per request so each visit gets a fresh random quote in the initial HTML
  await connection();

  return <QuoteBrowser quotes={data} initialQuote={pickRandomQuote(data)} />;
}
