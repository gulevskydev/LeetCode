/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let res = [0, Infinity];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const num = nums[i] + nums[j] + nums[k];
        if (res[1] > Math.abs(num - target)) {
          res = [num, Math.abs(num - target)];
        }
      }
    }
  }
  return res[0];
};
