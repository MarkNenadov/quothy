import { pageMetadata, quoteCount } from "./pageMetadata";

describe("pageMetadata", () => {
  test("uses a given preview image instead of the site-wide one", () => {
    expect(pageMetadata("Title", "Description", "/quotes/q1/opengraph-image").openGraph).toMatchObject({
      images: "/quotes/q1/opengraph-image",
    });
  });

  test("restates the site-wide preview image, which page-level openGraph would otherwise drop", () => {
    expect(pageMetadata("Title", "Description").openGraph).toMatchObject({
      title: "Title",
      description: "Description",
      images: "/opengraph-image",
    });
  });
});

describe("quoteCount", () => {
  test.each([
    [1, "1 quote"],
    [2, "2 quotes"],
  ])("%p is %p", (count, label) => {
    expect(quoteCount(count)).toBe(label);
  });
});
