// 07 kiem tra co student gioi tinh nu la 'Nu' va ten la 'Alice' khong

// for ... i
// forEach 
// find
// findIndex -- trong thuc te neu chi hoi co/ko thi nen chon cach nay
// filter

function isAlice(student) {
  if (!student) return false;

  return student.gender === "female" && student.name.toLowerCase() === "alice";
}

// ----- cach 1: for ... i
// export function hasAlice(studentList) {
//   if (!Array.isArray(studentList) || studentList.length === 0) return false;

//   for (let i = 0; i < studentList.length; i++) {
//     const student = studentList[i];

//     if (isAlice(student)) return true;
//   }

//   return false;
// }

// ----- cach 2: forEach
// export function hasAlice(studentList) {
//   if (!Array.isArray(studentList) || studentList.length === 0) return false;

//   let hasAliceFlag = false;
//   studentList.forEach((student) => {
//     if (isAlice(student)) hasAliceFlag = true;
//   });

//   return hasAliceFlag;
// }

// ----- cach 3: find
// export function hasAlice(studentList) {
//   if (!Array.isArray(studentList) || studentList.length === 0) return false;

//   return Boolean(studentList.find(student => isAlice(student)));
// }

// ----- cach 4: findIndex
export function hasAlice(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;

  return studentList.findIndex(isAlice) >= 0;
}

// ----- cach 5: filter
// export function hasAlice(studentList) {
//   if (!Array.isArray(studentList) || studentList.length === 0) return false;

//   return studentList.filter(isAlice).length > 0;
// }