/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums.lastIndexOf(nums[i]) === i && nums.indexOf(nums[i]) === i)
      sum += nums[i];
  }
  return sum;
};
