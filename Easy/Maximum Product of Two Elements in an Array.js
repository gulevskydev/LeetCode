/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  return nums
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((a, b) => {
      return a * (b - 1);
    }, 1);
};
