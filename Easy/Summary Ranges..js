/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (nums.length === 1) return [`${nums[0]}`];
  const res = [];
  let prev = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - 1 !== nums[i - 1]) {
      if (prev === nums[i - 1]) {
        res.push(`${prev}`);
        prev = nums[i];
      } else {
        res.push(`${prev}->${nums[i - 1]}`);
        prev = nums[i];
      }
    }

    if (i === nums.length - 1) {
      if (prev !== nums[i]) res.push(`${prev}->${nums[i]}`);
      else res.push(`${nums[i]}`);
    }
  }
  return res;
};
