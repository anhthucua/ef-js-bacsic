// 03: kiem tra so tang dan deu theo khoang cach cho trc

export function isIncreasingNumber(n) {
  const increase = 2;

  if (n < 10) return false;
  let remaining = n;
  let preDigit = 10;

  while (remaining > 0) {
    const lastDigit = remaining % 10;

    if (lastDigit > preDigit) return false;

    if (preDigit !== 10) {
      if (preDigit - lastDigit !== 2) return false;
    }

    preDigit = lastDigit;

    remaining = Math.trunc(remaining / 10);
  }

  return true;
}