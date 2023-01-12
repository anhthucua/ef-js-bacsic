import { characters } from './string-03';

describe('characters', () => {
  it('empty --- str empty', () => {
    expect(characters('')).toEqual({});
  });

  it('should return correct statistics when str doesn\'t have redundant spaces', () => {
    expect(characters('tran anh thu tran')).toEqual({
      ' ': 3,
      t: 3,
      r: 2,
      a: 3,
      n: 3,
      h: 2,
      u: 1
    });
  });

  it('should return correct statistics when str has redundant spaces', () => {
    expect(characters('tran anh  thu tran')).toEqual({
      ' ': 4,
      t: 3,
      r: 2,
      a: 3,
      n: 3,
      h: 2,
      u: 1
    });
  });
})