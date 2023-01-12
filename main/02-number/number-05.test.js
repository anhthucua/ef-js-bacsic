import { isSoChinhPhuong } from "./number-05";

describe(('isSoChinhPhuong'), () => {
  it('should return false when n <= 0', () => {
    expect(isSoChinhPhuong(0)).toBe(false);
  })

  it('should return false when n is not so chinh phuong', () => {
    expect(isSoChinhPhuong(71)).toBe(false);
  })

  it('should return true when n is so chinh phuong', () => {
    expect(isSoChinhPhuong(16)).toBe(true);
  })
})