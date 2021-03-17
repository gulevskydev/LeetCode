/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
  nums.sort((a, b) => b - a);
  const sum = nums.reduce((a, b) => a + b);
  let cur = 0;
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    cur += nums[i];
    ans.push(nums[i]);
    if (sum - cur < cur) return ans;
  }
};
