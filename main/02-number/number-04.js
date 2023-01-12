// 04 - kiem tra so nguyen to

export function isPrime(n) {
  if (n <= 0) return false;

  for (let i = 2; i< n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}