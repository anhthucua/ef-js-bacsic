// cho 1 mangg da dc sx tang dan. cho 1 so, add so do vao mang nhung van dam bao sx tang dan.

// thuat toan:
// "use strict";
// const arr = [-2, 1, 5, 7, 9];
// const addNumberToArr = (num, numArr) => {
//   if (!arr.length) {
//     return [num];
//   }
//   if (num < numArr[0]) {
//     return [num, ...numArr];
//   }
//   for (let i = 0; i < numArr.length - 1; i++) {
//     if (num >= numArr[i] && num <= numArr[i + 1]) {
//       numArr.splice(i + 1, 0, num);
//       return numArr;
//     }
//   }
//   return [...numArr, num];
// };
// console.log(addNumberToArr(7, arr));


// P1: tu lam hoi lang nhang
export function addNumberIncrease(numberList, n) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number > numberList[i + 1]) {
      return [];
    }

    if (i == 0 && n <= number) {
      numberList.splice(0, 0, n);
      return numberList;
    }

    if (
      i !== 0 &&
      i != numberList.length - 1 &&
      n >= number &&
      n < numberList[i + 1]
    ) {
      numberList.splice(i + 1, 0, n);
      return numberList;
    }

    if (i == numberList.length - 1 && n > numberList[i]) {
      numberList.push(n);
      return numberList;
    }
  }
}

// P2: lam sai
// export function addNumberIncrease(numberList, n) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return [];

//   for (let i = numberList.length; i > 0; i--) {
//     const number = numberList[i];

//     if (n <= number) {
//       console.log('first')
//       numberList.splice(numberList[i] - 1, 0, n);
//       break;
//     } else {
//       numberList.push(n);
//       break;
//     }
//   }

//   return numberList;
// }

// console.log(addNumberIncrease([-2,1,3,5,7,8,12], 2));
