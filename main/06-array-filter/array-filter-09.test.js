import { findProduct } from "./array-filter-09";

describe('find product is iPhone and con hang', () => {
  it('should return empty array if list is empty', () => {
    expect(findProduct([])).toEqual([]);
    expect(findProduct('')).toEqual([]);
    expect(findProduct(true)).toEqual([]);
  });

  it('should return empty array if list has no iphone and con hang', () => {
    const productList = [
      { id: 1, name: 'sam sung s9', brand: 'samsung', amount: 4},
      { id: 2, name: 'sam sung s8', brand: 'samsung', amount: 0},
      { id: 3, name: 'iPhone 13', brand: 'apple', amount: 0},
      { id: 4, name: 'iPhone 12', brand: 'apple', amount: 0},
      { id: 5, name: 'iPhone 14', brand: 'appleold', amount: 12},
    ];
    expect(findProduct(productList)).toEqual([]);
  });

  it('should return correct list if list has iphone and con hang', () => {
    const productList = [
      { id: 1, name: 'sam sung s9', brand: 'samsung', amount: 4},
      { id: 2, name: 'sam sung s8', brand: 'samsung', amount: 0},
      { id: 3, name: 'iPhone 13', brand: 'apple', amount: 4},
      { id: 4, name: 'iPhone 12', brand: 'apple', amount: 0},
      { id: 5, name: 'iPhone 14', brand: 'apple', amount: 12},
    ];
    expect(findProduct(productList)).toEqual([
        { id: 3, name: 'iPhone 13', brand: 'apple', amount: 4},
        { id: 5, name: 'iPhone 14', brand: 'apple', amount: 12},
    ])
  });
});