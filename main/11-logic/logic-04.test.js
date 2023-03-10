import { findMostFrequentNumber } from "./logic-04";

describe('findAllPositiveEvenSubArr', () => {
  it('should return empty if array empty', () => {
    expect(findMostFrequentNumber([])).toBeUndefined();
    expect(findMostFrequentNumber({})).toBeUndefined();
  });
  
  it('should return correct most frequent number', () => {
    expect(findMostFrequentNumber([1])).toBe(1);
    expect(findMostFrequentNumber([1, 2])).toBe(1);
    expect(findMostFrequentNumber([1, 2, 2])).toBe(2);
    expect(findMostFrequentNumber([1, 2, 2, 1, 1])).toBe(1);
  });
});