import { foldText } from "./foldText";

export const slugify = (text: string): string =>
  foldText(text)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
