import { isIncreasingNumber } from "./number-01";

describe('isIncreasingNumber', () => {
  it('should return false when n < 10', () => {
    // expect(isIncreasingNumber(1)).toBe(false);

    Array.from({ lenght: 10 }, (x, idx) => idx ).forEach((x) => {
      expect(isIncreasingNumber(x)).toBe(false);
    })
  });

  it('should return false when n is not an increasing number', () => {
    // expect(isIncreasingNumber(1343)).toBe(false);

    [11, 2341, 4234, 213, 999129, 123456781].forEach((x) => {
      expect(isIncreasingNumber(x)).toBe(false);
    })
  });

  it('should return true when n is an increasing number', () => {
    // expect(isIncreasingNumber(123)).toBe(false);

    [12, 2345, 12345, 123459].forEach((x) => {
      expect(isIncreasingNumber(x)).toBe(true);
    })
  });
})

describe('isIncreasingNumber2', () => {
  it('should return false when n < 10', () => {
    // expect(isIncreasingNumber(1)).toBe(false);

    Array.from({ lenght: 10 }, (x, idx) => idx ).forEach((x) => {
      expect(isIncreasingNumber(x)).toBe(false);
    })
  });

  it('should return false when n is not an increasing number', () => {
    // expect(isIncreasingNumber(1343)).toBe(false);

    [11, 2341, 4234, 213, 999129, 123456781].forEach((x) => {
      expect(isIncreasingNumber(x)).toBe(false);
    })
  });

  it('should return true when n is an increasing number', () => {
    // expect(isIncreasingNumber(123)).toBe(false);

    [12, 2345, 12345, 123459].forEach((x) => {
      expect(isIncreasingNumber(x)).toBe(true);
    })
  });
})