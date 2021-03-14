/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  return nums
    .sort((a, b) => a - b)
    .reduce((ac, cur, i) => ac + ((i + 1) % 2 === 0 ? 0 : cur), 0);
};
