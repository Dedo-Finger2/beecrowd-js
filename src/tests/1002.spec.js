import { challenge1002 } from "../challenges/1002";

describe("Extremamente Básico", () => {
  it.each([
    [2.00, 12.5664],
    [100.64, 31819.3103],
    [150.00, 70685.7750]
  ])("should return the circle area like 'A={result}'", (r, expected) => {
    expect(challenge1002([r])).toBe(`A=${expected.toFixed(4)}`);
  });
});
