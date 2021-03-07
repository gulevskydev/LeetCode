/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  return nums.filter((e) => String(e).length % 2 === 0).length;
};
