/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  for (let i = 0; i * i <= c; i++) {
    const n = Math.sqrt(c - i * i);
    if (Math.floor(n) === n) return true;
  }
  return false;
};
