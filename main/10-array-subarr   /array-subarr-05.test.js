import { findMaxSumArray } from "./array-subarr-05";

describe('findMaxSumArray', () => {
  it('should return empty if array empty', () => {
    expect(findMaxSumArray([])).toEqual([]);
    expect(findMaxSumArray({})).toEqual([]);
    expect(findMaxSumArray('')).toEqual([]);
    expect(findMaxSumArray(true)).toEqual([]);
    expect(findMaxSumArray(123)).toEqual([]);
  });

  it('should return correct sub array list if has sum max', () => {
    expect(findMaxSumArray([1,2,3,0,10,20])).toEqual([0,10,20]);
  });
});