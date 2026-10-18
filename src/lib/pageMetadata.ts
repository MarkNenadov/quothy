import type { Metadata } from "next";

export const SITE_NAME = "Quothy";

export const quoteCount = (count: number): string => `${count} ${count === 1 ? "quote" : "quotes"}`;

// openGraph is replaced, not merged, by child pages, and an explicit image overrides a route's own
// opengraph-image file, so each page restates siteName and names its preview image
export const pageMetadata = (title: string, description: string, image = "/opengraph-image"): Metadata => ({
  title,
  description,
  openGraph: { title, description, siteName: SITE_NAME, type: "website", images: image },
});
