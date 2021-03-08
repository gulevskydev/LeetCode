/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const obj = {};
  let count = [];
  for (let i = 0; i < nums.length; i++) {
    if (obj.hasOwnProperty(nums[i])) count.push(nums[i]);
    else obj[nums[i]] = obj[nums[i]];
  }
  return count;
};
