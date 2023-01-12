import { replaceValue } from "./string-07";

describe('replace param => value', () => {
  it('should return empty when str is empty', () => {
    expect(replaceValue('', 'hj', 'fg')).toEqual({});
  });

  // it('should return new Str when replace a => b', () => {
  //   expect(replaceValue('tran anh thu', 'hieu', 'thom')).toEqual({});
  // });

  // it('should return new Str when replace a => b', () => {
  //   expect(replaceValue('tran anh thu', 'thu', 'thoi')).toBe('tran anh thoi');
  // });
})