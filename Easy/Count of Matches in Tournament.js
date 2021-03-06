/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  let count = 0;
  while (n > 1) {
    const matches = Math.floor(n / 2);
    n = Math.ceil(n / 2);
    count += matches;
  }
  return count;
};
