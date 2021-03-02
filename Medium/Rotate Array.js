/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (nums.length < 2) return nums;
  if (nums.length < k) k = k % nums.length;
  let replace = nums.slice(nums.length - k);
  let initArr = nums.slice(0, nums.length - k);
  for (let i = 0; i < nums.length - k; i++) {
    nums[k + i] = initArr[i];
  }
  for (let i = 0; i < k; i++) {
    nums[i] = replace[i];
  }
};
