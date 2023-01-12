import { countEmail } from "./string-04";

describe('count Email', () => {
  it('empty => str empty', () => {
    expect(countEmail('')).toBe(0);
  });

  it('should be return 0 when str doesn\'t have email', () => {
    expect(countEmail('aa bb dfn df cc')).toBe(0);
  });

  it('should be return correct', () => {
    expect(countEmail('a@a b@b dfn df c@c @e rf@ 3@ yiu@@34')).toBe(3);
  });
})