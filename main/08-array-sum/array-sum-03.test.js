import { sumMinNumber } from "./array-sum-03";

describe('sum min number', () => {
  it('should return 0 if array empty', () => {
    expect(sumMinNumber([])).toBe(0);
    expect(sumMinNumber({})).toBe(0);
    expect(sumMinNumber('')).toBe(0);
    expect(sumMinNumber(true)).toBe(0);
  });

  it('should return 0 if each number has so 0', () => {
    expect(sumMinNumber([102, 9008,-908, -405])).toBe(0);
  })

  it('should return correct total', () => {
    expect(sumMinNumber([102, 8, -908, -405, 6, -7])).toBe(21);
  })
});