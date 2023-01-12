// tinh tong S(n)= 1 + 2 + 3 + ... + n
export function calSum(n) {
  if (n <= 0) return 0;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
};

// console.log(calSum(3));