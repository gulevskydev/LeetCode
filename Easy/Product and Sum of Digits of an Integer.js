/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  const res = String(n).split('');
  const sum = res.reduce((a, b) => +a + +b);
  const sum2 = res.reduce((a, b) => a * b, 1);
  return sum2 - sum;
};
