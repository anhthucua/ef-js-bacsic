import { countNumberAB } from "./array-count-05";

describe('count AB', () => {
  it('should return 0 when array A or B empty', () => {
    expect(countNumberAB([],[])).toBe(0);
    expect(countNumberAB([],[1,2,3])).toBe(0);
    expect(countNumberAB([1],[])).toBe(0);
  });

  it('should return 0 when number of A has all of B', () => {
    expect(countNumberAB([1,2,3,3,2], [3,2,1])).toBe(0);
    expect(countNumberAB([23,45,0, -6], [-6,23,0,45])).toBe(0);
  });

  it('should return correct count of number of A has all of B', () => {
    expect(countNumberAB([1,2,3,3,2,7,8,8,9], [3,2,1,5,4])).toBe(3);
    expect(countNumberAB([23,45, 1,-1,0, -6], [-6,23,0,45])).toBe(2);
  });
});