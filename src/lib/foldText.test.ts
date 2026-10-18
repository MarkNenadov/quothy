import { foldText } from "./foldText";

describe("foldText", () => {
  test("lowercases and strips accents", () => {
    expect(foldText("Émile Zola, Café")).toBe("emile zola, cafe");
  });
});
