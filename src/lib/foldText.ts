// Lowercases and strips accents so "Émile" and "emile" compare equal
export const foldText = (text: string): string => text.normalize("NFKD").replace(/[̀-ͯ]/g, "").toLowerCase();
