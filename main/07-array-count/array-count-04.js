// dem so luong cac so khac nhau co trong mang
// P1: them unique number vaof 1 array moi -> length
// P2: using object map --> keys of object
// P2-2: using reduce

// P1: them unique number vaof 1 array moi -> length
// export function countUniqueNumbers(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return 0;

//   const uniqueNumberList = [];
//   for(let i = 0; i < numberList.length; i++) {
//     const number = numberList[i];

//     if (!uniqueNumberList.includes(number)) uniqueNumberList.push(number);
//   }

//   return uniqueNumberList.length;
// }

// P2: using object map --> keys of object
// export function countUniqueNumbers(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return 0;

//   const flag = {};
//   for(let i = 0; i < numberList.length; i++) {
//     const number = numberList[i];

//     flag[number] = true;
//   }

//   return Object.keys(flag).length;
// }

// P2-2: using reduce
export function countUniqueNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  const flag = numberList.reduce((flag, number) => {
    flag[number] = true;
    return flag;
  }, {});

  return Object.keys(flag).length;
}