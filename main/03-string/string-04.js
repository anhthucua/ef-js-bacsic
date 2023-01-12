// 04 dem so luong email co trong cau

export function countEmail(str) {
  if (str === "") return 0;

  let sumEmail = 0;

  str
    .split(" ")
    .filter((x) => {
      let flag = true;
      x.split("").filter((y) => y == "@").forEach((n, i) => {
        if (i == 1) flag = false;
      })

      if (
        x.includes("@") &&
        x.length >= 3 &&
        x.indexOf("@") !== 0 &&
        x.indexOf("@") !== x.length - 1 && flag
      )
        return true;
    })
    .forEach((email) => {
      sumEmail += 1;
    });

  return sumEmail;
}
