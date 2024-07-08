import { challenge1001 } from "../challenges/1001";

describe("Extremamente Básico", () => {
  it.each([
    [10, 9, 19],
    [-10, 4, -6],
    [15, -7, 8]
  ])("should return the sum of two numbers as a string like 'X={result}'", (a, b, expected) => {
    expect(challenge1001([a, b])).toBe(`X = ${expected}`);
  });
});
