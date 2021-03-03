/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const obj = {};
  let max = [0, null];
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = ++obj[nums[i]] || 1;
    if (obj[nums[i]] > max[0]) max = [obj[nums[i]], nums[i]];
  }
  return max[1];
};
