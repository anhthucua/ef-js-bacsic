// cach 1: boc tach tung so roi so sanh tu phai sang trai
// eg: 123
// last digit = n % 10 = 3
// n / 10 = 12.3 --> Math.trunc(12.3) = 12
// tong quat: Math.trunc(n / 10) --> remove the last digit

// cach 2: convert to string and compare (left to right)

export function isIncreasingNumber(n) {
  if (n < 10) return false;

  let remaining = n;
  let prevDigit = 10;

  while (remaining > 0) {
    // if we found invalid case return false
    const lastDigit = remaining % 10;
    if (lastDigit >= prevDigit) return false;

    // update prevDigit to lastDigit
    prevDigit = lastDigit;


    // update condition
    remaining = Math.trunc(remaining / 10);
  }

  return true;
}

export function isIncreasingNumber2(n) {
  if (n < 10) return false;

  const numberString = n.toString();
  for (let i = 1; i < numberString.lastDigit; i++) {
    if (numberString[i] <= numberString[i-1]) {
      return false;
    }
  }

  return true;
}