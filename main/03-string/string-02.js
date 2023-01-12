// 02 Dem so luong tu xuat hien
// yeu cau:
// - key: tu co xuat hien trong str
// - value: so lan xuat hien cua key

// cach lam: bien 1 mang cac chu thanh 1 mang cac tu
// 'tran anh thu' => ['tran', 'anh', 'thu']

// -----------------------

// cach 1: for each
// export function statisticsWords(str) {
//   if (str === "") return {};

//   const statistics = {};
//   str
//     .split(" ")
//     .filter((x) => x !== "")
//     .forEach((word) => {
//       if (statistics[word]) {
//         statistics[word] += 1;
//       } else {
//         statistics[word] = 1;
//       }
//     });

//   return statistics;
// }

// cach 2: reduce
export function statisticsWords(str) {
  if (str === "") return {};

  return str.split(" ")
    .filter((x) => x !== "")
    .reduce((statistics, word) => {
      statistics[word] = statistics[word] !== undefined ? statistics[word] + 1 : 1;

      return statistics;
    }, {});
}
