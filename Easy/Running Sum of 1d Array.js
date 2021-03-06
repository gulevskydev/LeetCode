/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  return nums.map(
    (e, i, arr) => arr.slice(0, i).reduce((a, b) => a + b, 0) + e
  );
};
