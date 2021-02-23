/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let diff = Infinity;

  for (let i = 0; i < nums.length; i++) {
    let next = i + 1;
    let last = nums.length - 1;
    while (next < last) {
      let sum = nums[i] + nums[next] + nums[last];
      if (Math.abs(target - sum) < Math.abs(diff)) {
        diff = target - sum;
      }
      if (sum < target) {
        next++;
      } else {
        last--;
      }
    }
  }
  return target - diff;
};
