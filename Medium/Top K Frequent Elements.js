/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = ++obj[nums[i]] || 1;
  }
  return Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((e) => e[0]);
};
