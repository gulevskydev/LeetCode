/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  nums.sort((a, b) => b - a);
  const s1 = nums[0] * nums[1] * nums[2];
  const s2 = nums[0] * nums[nums.length - 2] * nums[nums.length - 1];
  return Math.max(s1, s2);
};
