import React from "react";
import Link from "next/link";

interface SectionHeadingProps {
  text: string;
  href?: string;
}

export const SectionHeading = ({ text, href }: SectionHeadingProps) => (
  <h2 className="font-semibold mb-2">
    {href ? (
      <Link href={href} className="hover:text-accent hover:underline">
        {text}
      </Link>
    ) : (
      text
    )}
  </h2>
);
