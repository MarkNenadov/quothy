import { truncate } from "./truncate";

describe("truncate", () => {
  test("leaves text within the limit unchanged", () => {
    expect(truncate("Short text", 20)).toBe("Short text");
  });

  test("cuts at the last word boundary and adds an ellipsis", () => {
    expect(truncate("The quick brown fox jumps", 18)).toBe("The quick brown…");
  });

  test("drops trailing punctuation before the ellipsis", () => {
    expect(truncate("First clause, second clause", 16)).toBe("First clause…");
  });
});
