import { checkArray01 } from "./array-check-01";

describe('array-check-01', () => {
  it('return false for empty array', () => {
    expect(checkArray01('', 9)).toBe(false);
  })

  it('return false when array has not number > n', () => {
    expect(checkArray01([2, 5, 7, 8, 56], 57)).toBe(false);
  })

  it('return true when array has number > n', () => {
    expect(checkArray01([2, 5, 7, 8, 56], 55)).toBe(true);
  })
});