import { isPrime } from "./number-04";

describe(('isPrime'), () => {
  it('should return false when n <= 0', () => {
    expect(isPrime(0)).toBe(false);
  })

  it('should return false when n is not prime', () => {
    expect(isPrime(86)).toBe(false);
  })

  it('should return true when n is prime', () => {
    expect(isPrime(97)).toBe(true);
  })
})