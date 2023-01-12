import { arrayIncrease } from "./array-check-10";

describe('array increase', () => { 
  it('should be false when array empty', () => {
    expect(arrayIncrease([])).toBe(false);
  });

  it('should be false when array no increase', () => {
    expect(arrayIncrease([2 ,5 , 8, 5, 7])).toBe(false);
  });

  it('should be true when array increase', () => {
    expect(arrayIncrease([-5, 0, 2, 2 ,5, 7, 9, 23])).toBe(true);
  });
})