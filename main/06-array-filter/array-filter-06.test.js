import { findAllNumbers } from "./array-filter-06";

describe('find all number', () => {

  it('should return empty array if list is empty', () => {
    expect(findAllNumbers([])).toEqual([]);
    expect(findAllNumbers()).toEqual([]);
    expect(findAllNumbers({})).toEqual([]);
    expect(findAllNumbers('')).toEqual([]);
    expect(findAllNumbers(true)).toEqual([]);
  });

  it('should return empty array if list has no number starts with odd digit', () => {
    expect(findAllNumbers([2, 423, 6847, -6829])).toEqual([]);
  });

  it('should return correct list of numbers starting with odd digit', () => {
    expect(findAllNumbers([2, 423, 123, -56, 7, 6847, -6829])).toEqual([123, -56, 7]);
  });
  
})