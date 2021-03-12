/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  return A.sort((a, b) => (b - a && b % 2 == 0 ? 1 : -1));
};
