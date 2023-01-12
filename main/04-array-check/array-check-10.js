// kiem tra mang co tang dan ko
export function arrayIncrease(array) {
  if (!Array.isArray(array) || array.length === 0) return false;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }

  return true;
}
