import { challenge1003 } from "../challenges/1003";

describe("Extremamente Básico", () => {
  it.each([
    [30, 10, 40],
    [-30, 10, -20],
    [0, 0, 0]
  ])("should return the sum of two integers like 'SOMA = {expected}'", (a, b, expected) => {
    expect(challenge1003([a, b])).toBe(`SOMA = ${expected}`);
  });
});
