// 02 - kiem tra so giam dan

// convert to string and compare
// export function isDescreasingNumber(n) {
//   if (n < 10) return false;

//   const numberString = n.toString();
//   for (let i = 1; i < numberString.length; i++) {
//     if (numberString[i] > numberString[i-1]) return false;
//   }

//   return true;
// }

// cal to split number and compare
export function isDescreasingNumber(n) {
  if (n < 10) return false;

  let remaining = n; //321
  let preDigit = 0;

  while (remaining > 0) { 
    const lastDigit = remaining % 10;

    if (lastDigit < preDigit) return false;

    preDigit = lastDigit; 

    remaining = Math.trunc(remaining / 10);
  }

  return true;
}