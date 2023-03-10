import { countUniqueNumbers } from "./array-count-04";

describe('countUniqueNumbers', () => {
  it('should return 0 if empty', () => {
    expect(countUniqueNumbers([])).toBe(0);
  });

  it('should return length if list is unique', () => {
    expect(countUniqueNumbers([1])).toBe(1);
    expect(countUniqueNumbers([1,5,6])).toBe(3);
  });

  it('should return correct count of unique numbers', () => {
    expect(countUniqueNumbers([1,1,1])).toBe(1);
    expect(countUniqueNumbers([1, 2, 2, 1, 5, 6])).toBe(4);
  });
});