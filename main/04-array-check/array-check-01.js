// 01 kiem tra co so chan lon hon n trong mang khong

export function checkArray01(numberList, n) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  
  // for (let i = 0; i < numberList.length; i++) {
  //   if (numberList[i] % 2 === 0 && numberList[i] > n) return true;
  // }

  // numberList.forEach(element => {
  //   if (element % 2 === 0 && element > n) return true;
  // });

  return numberList.findIndex(element => (element % 2 === 0 && element > n)) >= 0;

  // return false;
}