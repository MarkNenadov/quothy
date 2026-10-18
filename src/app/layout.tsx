import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Source_Serif_4 } from "next/font/google";
import { Suspense } from "react";
import { NavTabs } from "../components/NavTabs";
import { SearchBox } from "../components/SearchBox";
import { SearchForm } from "../components/SearchForm";
import { SiteFooter } from "../components/SiteFooter";
import { data } from "../data/quoteData";
import { SITE_NAME } from "../lib/pageMetadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quotes.marknenadov.com"),
  title: { default: SITE_NAME, template: `%s · ${SITE_NAME}` },
  description: "Quotes from my reading.",
  openGraph: { siteName: SITE_NAME, type: "website" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${sourceSerif.variable} font-sans antialiased`}>
        <div className="mx-auto max-w-3xl text-2xl p-2 md:p-4">
          <header className="flex flex-wrap items-center justify-between gap-3 p-3">
            <h1 className="font-bold text-5xl">
              <Link href="/">✌ Quothy ✌</Link>
            </h1>
            <Suspense fallback={<SearchForm defaultQuery="" />}>
              <SearchBox />
            </Suspense>
          </header>
          <NavTabs />
          <main>{children}</main>
          <SiteFooter quotes={data} />
        </div>
      </body>
    </html>
  );
}
