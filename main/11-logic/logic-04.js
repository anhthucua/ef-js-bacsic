// tim so co so lan xuat hien nhieu nhat
// [1,1,2]
// {}
// {1:1}
// {1: 2}
// {2:1}


// P1: 2 vong lap for
// export function findMostFrequentNumber(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

//   const statistics = {};

//   for (let i = 0; i < numberList.length; i++) {
//     const number = numberList[i];
    
//     // update statistics
//     statistics[number] = statistics[number] === undefined ? 1 : statistics[number] + 1;
//   }

//   let maxKey = undefined;
//   for (const key in statistics) {
//     if (maxKey === undefined || statistics[key] > statistics[maxKey]) {
//       maxKey = key;
//     } 
//   }

//   return Number.parseInt(maxKey);
// }

// P2: 2 vong lap for, cach nay tim so lap nhieu nhat xuat hien cuoi cung
export function findMostFrequentNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  const statistics = {};
  let maxKey = undefined;

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    
    // update statistics
    statistics[number] = statistics[number] === undefined ? 1 : statistics[number] + 1;

    // check maxKey
    if (maxKey === undefined || statistics[number] > statistics[maxKey]) {
      maxKey = number;
    } 
  }

  return Number.parseInt(maxKey);
}