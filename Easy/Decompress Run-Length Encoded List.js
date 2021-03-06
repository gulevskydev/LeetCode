/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  const res = [];
  for (let i = 0; i < nums.length; i += 2) {
    const currentArray = Array(nums[i]).fill(nums[i + 1]);
    res.push(...currentArray);
  }
  return res;
};
