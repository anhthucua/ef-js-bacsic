import { findAllPositiveEvenSubArr } from "./array-subarr-04";

describe('findAllPositiveEvenSubArr', () => {
  it('should return empty if array empty', () => {
    expect(findAllPositiveEvenSubArr([])).toEqual([]);
    expect(findAllPositiveEvenSubArr({})).toEqual([]);
    expect(findAllPositiveEvenSubArr('')).toEqual([]);
    expect(findAllPositiveEvenSubArr(true)).toEqual([]);
    expect(findAllPositiveEvenSubArr(123)).toEqual([]);
  });
  
  it('should return empty if no continouos even sub array', () => {
    expect(findAllPositiveEvenSubArr([1,3,5,7,9])).toEqual([]);
  });

  it('should return correct sub array list if has ev continouos even sub array', () => {
    expect(findAllPositiveEvenSubArr([1,2,4,5,8,4,2])).toEqual([
      [2,4],
      [8,4,2],
    ]);
  });
});