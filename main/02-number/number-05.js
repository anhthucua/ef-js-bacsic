// 05 - kiem tra so chinh phuong

export function isSoChinhPhuong(n) {
  if (n <= 0) return false;

  const x = Math.sqrt(n);

  if (!Number.isInteger(x)) return false;

  return true;
}