// Shortens text to at most maxLength characters (ellipsis included), breaking at a word boundary
export const truncate = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  }
  const cut = text.slice(0, maxLength - 1);
  const lastSpace = cut.lastIndexOf(" ");
  const wholeWords = lastSpace > 0 ? cut.slice(0, lastSpace) : cut;
  return `${wholeWords.replace(/[\s,;:.!?—-]+$/, "")}…`;
};
