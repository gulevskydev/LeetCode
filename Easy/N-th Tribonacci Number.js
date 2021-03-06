/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const last = [0, 1, 1];
  let count = 3;
  while (count <= n) {
    const sum = last[0] + last[1] + last[2];
    last[0] = last[1];
    last[1] = last[2];
    last[2] = sum;
    count++;
  }
  return n < 1 ? 0 : n < 2 ? last[1] : last[2];
};
