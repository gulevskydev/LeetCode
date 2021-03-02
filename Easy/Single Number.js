/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const store = new Map();
  for (let i = 0; i < nums.length; i++) {
    store[nums[i]] = ++store[nums[i]] || 1;
  }

  for (let key in store) {
    if (store[key] === 1) return key;
  }
};
