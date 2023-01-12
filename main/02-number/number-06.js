// 05 - kiem tra so hoan hao

export function isPerfectNumber(n) {
  if (n <= 0) return false;
  let sum = 0;

  for (let i = 1; i < n; i++) {
    if (Number.isInteger(n/i)) {
      sum += i;
    }
  }

  if (sum !== n) return false;

  return true;
}