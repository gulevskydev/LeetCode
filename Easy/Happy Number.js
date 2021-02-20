/**
 * @param {number} n
 * @return {boolean}
 */
let arr = {};
let i = 1;
var isHappy = function (n) {
  if (n === 1) {
    i++;
    return true;
  }
  if (arr[i] && arr[i].includes(n)) return false;
  Array.isArray(arr[i]) ? arr[i].push(n) : (arr[i] = [n]);
  return isHappy(
    String(n)
      .split('')
      .map((n) => Number(n) ** 2)
      .reduce((a, b) => a + b, 0)
  );
};
