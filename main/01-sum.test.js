import { calSum } from "./01-sum";

describe('sum 1 ... n', () => {
  test('should return 0 when n <= 0', () => {
    expect(calSum(-1)).toBe(0);
    expect(calSum(0)).toBe(0);
  });

  test('should return sum when n > 0', () => {
    expect(calSum(1)).toBe(1);
    expect(calSum(2)).toBe(3);
  })
})