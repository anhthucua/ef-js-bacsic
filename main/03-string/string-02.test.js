import { statisticsWords } from './string-02';

describe('statisticsWords', () => {
  it('empty --- str empty', () => {
    expect(statisticsWords('')).toEqual({});
  });

  it('should return corect statistics when str doesn\'t have redundant spaces', () => {
    expect(statisticsWords('tran anh thu tran')).toEqual({
      tran: 2,
      anh: 1,
      thu: 1,
    });
  });

  it('should return correct statistics when str has redundant spaces', () => {
    expect(statisticsWords('tran   anh  thu tran')).toEqual({
      tran: 2,
      anh: 1,
      thu: 1,
    });
  });
})