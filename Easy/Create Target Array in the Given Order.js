/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    const id = index.shift();
    res.splice(id, 0, nums[i]);
  }
  return res;
};
