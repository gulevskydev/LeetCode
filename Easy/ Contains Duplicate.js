/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  if (nums.length === 0) return false;
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) return true;
    obj[nums[i]] = 1;
  }
  return false;
};
