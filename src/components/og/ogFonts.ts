import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { OG_SERIF } from "./ogTheme";

const fontFile = (weight: 400 | 600) =>
  readFile(
    join(process.cwd(), "node_modules/@fontsource/source-serif-4/files", `source-serif-4-latin-${weight}-normal.woff`),
  );

export const loadOgFonts = async () => [
  { name: OG_SERIF, data: await fontFile(400), weight: 400 as const, style: "normal" as const },
  { name: OG_SERIF, data: await fontFile(600), weight: 600 as const, style: "normal" as const },
];
