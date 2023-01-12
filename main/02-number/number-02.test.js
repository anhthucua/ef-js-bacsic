import { isDescreasingNumber } from "./number-02";

describe('isDescreasingNumber', () => {
  it('should return false when n < 10', () => {
    Array.from({ length: 10 }, (x, idx) => idx).forEach((x) => {
      expect(isDescreasingNumber(x)).toBe(false);
    })
  });

  it('should return false when n is not a descreasing', () => {
    [123, 7645, 876578].forEach((x) => {
      expect(isDescreasingNumber(x)).toBe(false);
    })
  });

  it('should return true when n is a descreasing', () => {
    [321, 7643, 876543].forEach((x) => {
      expect(isDescreasingNumber(x)).toBe(true);
    })
  });
})