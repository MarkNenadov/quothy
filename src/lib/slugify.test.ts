import { slugify } from "./slugify";

describe("slugify", () => {
  test.each([
    ["James Lowen", "james-lowen"],
    ["Nicolas Alford and Nicholas Kennicott", "nicolas-alford-and-nicholas-kennicott"],
    ["J.R.R. Tolkien", "j-r-r-tolkien"],
    ["Émile Zola", "emile-zola"],
    ["  Various  ", "various"],
  ])("%p becomes %p", (text, expectedSlug) => {
    expect(slugify(text)).toBe(expectedSlug);
  });
});
