/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const store = {};
  for (let i = 0; i < nums.length; i++) {
    if (store[nums[i]]) store[nums[i]]++;
    else store[nums[i]] = 1;
  }
  return Object.entries(store).find((el) => el[1] === 1)[0];
};
