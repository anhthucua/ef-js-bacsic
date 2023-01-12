import { addNumberIncrease } from "./array-cd-04";

describe('add num', () => {
  it('should return empty if array empty', () => {
    expect(addNumberIncrease([], 0)).toEqual([]);
    expect(addNumberIncrease({}, -2)).toEqual([]);
  });

  it('should be return empty if array not increasing', () => {
    expect(addNumberIncrease([1, 6,4,5,3,6], 3)).toEqual([]);
  });

  it('should be return correct array if array increasing', () => {
    expect(addNumberIncrease([-2,1,3,5,7,8,12], 2)).toEqual([-2,1,2,3,5,7,8,12]);
    expect(addNumberIncrease([3,4,5], 2)).toEqual([2,3,4,5]);
    expect(addNumberIncrease([3,4,5], 6)).toEqual([3,4,5,6]);
  });
})