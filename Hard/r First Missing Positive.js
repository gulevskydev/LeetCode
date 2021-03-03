/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  nums = [...new Set(nums)].sort((a, b) => a - b);
  let j = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0 && nums[i] !== j) return j;
    if (nums[i] > 0 && nums[i] === j) j++;
  }
  return j;
};
