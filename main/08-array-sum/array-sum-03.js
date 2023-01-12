//  tong cac chu so nho nhat cua so trong mang
export function sumMinNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  return numberList.reduce((sum, number) => sum +=findMinNumber(number), 0);
}

function findMinNumber(number) {
  const numberString = Math.abs(number).toString();
  const arraySplitNumber = numberString.split('');
  const minNum = arraySplitNumber.reduce((min, x) => (x < min? x : min));
  return Number.parseInt(minNum);
}
