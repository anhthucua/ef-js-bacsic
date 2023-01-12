// tim tat ca cac so ma bat dau bang chu so le
// for ... i
// filter
// delegate: uy thac, uy quyen


// c2: chuyen ve string de lay so dau tien, truowc do can chuyen so am thanh so duong. vd: -123 -> 123 -> '123' -> '1' -> 1
function getTheFirstDigit(number) {
  const unsignedNumber = Math.abs(number);
  const firstDigitCharacter = unsignedNumber.toString().charAt(0);
  return Number.parseInt(firstDigitCharacter);
}

// cach 1: filter
export function findAllNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  return numberList.filter((number) => getTheFirstDigit(number) % 2 === 1);
}

// cach 2: for ... i
// export function findAllNumbers(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return [];

//   const filteredList = [];

//   // go through and check to add to filteredList
//   for (let i = 0; i < numberList.length; i++) {
//     const number = numberList[i];
//     // get the first digit of number
//     const firstDigit = getTheFirstDigit(number);
//     if (firstDigit % 2 === 1) {
//       filteredList.push(number);
//     }
//   }

//   return filteredList;
// }