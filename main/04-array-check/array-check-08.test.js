import { arrayCheck08 } from "./array-check-08";

describe('array check 08', () => {
  it('should be false when empty array', () => {
    expect(arrayCheck08([], 8)).toBe(false);
  });

  it('should be false when product > price and freeship', () => {
    const productList = [
      {id: 0, name: 'pen', price: 3000, freeship: false},
      {id: 1, name: 'shit', price: 9000, freeship: false},
      {id: 2, name: 'bottle', price: 5000, freeship: true},
      {id: 3, name: 'can', price: 10000, freeship: true},
    ];
    expect(arrayCheck08(productList, 1000)).toBe(false);
  });

  it('should be true when product < price and  freeship', () => {
    const productList = [
      {id: 0, name: 'pen', price: 3000, freeship: false},
      {id: 1, name: 'shit', price: 9000, freeship: false},
      {id: 2, name: 'bottle', price: 5000, freeship: true},
      {id: 3, name: 'can', price: 10000, freeship: true},
    ];
    expect(arrayCheck08(productList, 6000)).toBe(true);
  });
})