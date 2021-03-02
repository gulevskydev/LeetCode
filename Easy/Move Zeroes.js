/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const zeroes = nums.filter((e) => !e);
  const other = nums.filter((e) => !!e);
  nums.forEach((_, i) => (nums[i] = [...other, ...zeroes][i]));
};
