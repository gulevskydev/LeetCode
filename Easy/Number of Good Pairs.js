/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums.slice(i + 1).includes(nums[i])) {
      res += nums.slice(i + 1).filter((e) => e === nums[i]).length;
    }
  }
  return res;
};
