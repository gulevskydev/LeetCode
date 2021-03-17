/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  if (nums.length < 2) return nums.length;
  let cur = 0;
  let max = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) cur++;
    else {
      max = Math.max(max, cur);
      cur = 0;
    }
  }
  return Math.max(max + 1, cur + 1);
};
