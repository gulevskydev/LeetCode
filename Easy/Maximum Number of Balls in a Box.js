/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
  const res = {};
  for (let i = lowLimit; i <= highLimit; i++) {
    const idx = String(i)
      .split('')
      .reduce((a, b) => +a + +b);
    res[idx] = ++res[idx] || 1;
  }
  return Math.max(...Object.values(res));
};
