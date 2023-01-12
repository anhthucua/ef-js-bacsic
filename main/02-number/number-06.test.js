import { isPerfectNumber } from "./number-06";

describe('isPerfectNumber', () => {
  it('false --- n<= 0', () => {
    expect(isPerfectNumber(0)).toBe(false);
  });

  it('false --- n is not a perfect number', () => {
    expect(isPerfectNumber(10)).toBe(false);
  });

  it('false --- n is a perfect number', () => {
    expect(isPerfectNumber(6)).toBe(true);
  });
})