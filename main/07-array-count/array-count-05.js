import { countUniqueNumbers } from "./array-count-04";

// dem so luong cac so co trong mang a ma ko co trong mang b
export function countNumberAB(numberListA, numberListB) {
  if (
    !Array.isArray(numberListA) ||
    numberListA.length === 0 ||
    !Array.isArray(numberListB) ||
    numberListB.length === 0
  )
    return 0;

  let countDifferent = 0;
  const uniqueNumberList = [];

  for (let i = 0; i < numberListA.length; i++) {
    if (!uniqueNumberList.includes(numberListA[i])) {
      uniqueNumberList.push(numberListA[i]);
      if (!numberListB.includes(numberListA[i])) {
        countDifferent++;
      }
    }
  }

  return countDifferent;
}
