import { isIncreasingNumber } from "./number-03";

describe('isIncreasingNumber spacing', () => {
  it('should return false when n < 10', ()=> {
    Array.from({length: 10}, (x, idx) => idx).forEach((x) => {
      expect(isIncreasingNumber(x)).toBe(false);
    })
  });

  it('should return false when n is not an increasing', ()=> {
    [132, 123564, 3421].forEach((x) => {
      expect(isIncreasingNumber(x)).toBe(false);
    })
  });

  it('should return false when n is an increasing but not spacing x', ()=> {
    [125, 256, 13679].forEach((x) => {
      expect(isIncreasingNumber(x)).toBe(false);
    })
  });

  it('should return true when n is an increasing and spacing x', ()=> {
    [135, 246, 13579].forEach((x) => {
      expect(isIncreasingNumber(x)).toBe(true);
    })
  });
})