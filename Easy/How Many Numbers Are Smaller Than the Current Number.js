/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  return nums.map((e) => nums.filter((el) => el < e).length);
};
