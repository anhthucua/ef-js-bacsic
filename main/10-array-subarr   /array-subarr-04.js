// tim cac mang con co chua so duong chan lien tiep
// findAllPositiveEvenSubArr([1,2,4,3,5,10,20]);
// should return [ [2,4], [10, 20] ]

export function findAllPositiveEvenSubArr(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  const subArrayList = [];
  let subArray = [];

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];

    if (number % 2 === 0) subArray.push(number);

    // check if we need to reset subarr
    const needToReset =
      number % 2 === 1 || number < 0 || i === numberList.length - 1;
    if (subArray.length > 0 && needToReset) {
      subArrayList.push(subArray);
      subArray = []; // reset subarray
    }
  }

  return subArrayList;
}
