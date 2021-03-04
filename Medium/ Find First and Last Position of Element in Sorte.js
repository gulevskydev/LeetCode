/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let first;
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] === target && first == null) first = i;
    if (first != null && nums[i] != nums[i + 1]) return [first, i];
  }
  return first != null ? [first, first] : [-1, -1];
};
