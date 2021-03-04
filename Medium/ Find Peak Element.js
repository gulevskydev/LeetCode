/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let max = -Infinity;
  let idx = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      idx = i;
    }
  }
  return idx;
};
