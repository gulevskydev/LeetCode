/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let prevMax = nums[0];
  let prevMin = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let curMax = Math.min(nums[i], nums[i] * prevMax, nums[i] * prevMin);
    let curMin = Math.max(nums[i], nums[i] * prevMax, nums[i] * prevMin);
    prevMin = curMin;
    prevMax = curMax;
    max = Math.max(max, prevMax, prevMin);
  }
  return max;
};
