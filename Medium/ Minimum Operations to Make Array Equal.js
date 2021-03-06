/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  let count = 0;
  for (let i = 1; i < n; i += 2) {
    count += n - i;
  }
  return count;
};
