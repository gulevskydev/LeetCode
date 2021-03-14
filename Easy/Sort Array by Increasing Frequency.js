/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const store = {};
  for (let i = 0; i < nums.length; i++) {
    store[nums[i]] = ++store[nums[i]] || 1;
  }
  return nums.sort((a, b) => store[a] - store[b] || b - a);
};
