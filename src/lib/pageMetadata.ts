import type { Metadata } from "next";

export const SITE_NAME = "Quothy";

export const quoteCount = (count: number): string => `${count} ${count === 1 ? "quote" : "quotes"}`;

// openGraph is replaced, not merged, by child pages, so each page restates siteName
export const pageMetadata = (title: string, description: string): Metadata => ({
  title,
  description,
  openGraph: { title, description, siteName: SITE_NAME, type: "website" },
});
