// tim mang con tang dan co tong lon nhat, tra ve con so tong

export function findMaxSumArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  const subArrayList = [];
  let subArray = [];

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];

    subArray.push(number);
    if (number > numberList[i+1] || i === numberList.length - 1) {
      subArrayList.push(subArray);
      subArray = [];
    }
  }

  let arrayHasSumMax = subArrayList[0];
  let sumMax = sumSubArray(subArrayList[0]);

  for (let x = 1; x < subArrayList.length; x++) {
    if (sumSubArray(subArrayList[x]) > sumSubArray(subArrayList[x-1])) {
      arrayHasSumMax = subArrayList[x];
      sumMax = sumSubArray(subArrayList[x]);
    }
  }
  return arrayHasSumMax;
}

function sumSubArray(array) {
  return array.reduce((sum, el) => {sum+= el; return sum}, 0)
}
