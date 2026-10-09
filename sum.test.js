import { sum } from "./sum.js";

describe("test for sum function", () => {
  test("adds 2 + 2 equals to 4", () => {
    expect(sum(2, 2)).toBe(4);
  });
  test("adds 55 + 65 equals to 120",() => {
    expect(sum(55,65)).toBe(120)
  })
});
