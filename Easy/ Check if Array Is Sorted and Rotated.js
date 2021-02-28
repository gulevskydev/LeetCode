/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  const s = nums.slice().sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (
      s
        .slice(i)
        .concat(s.slice(0, i))
        .filter((e, i) => e === nums[i]).length === nums.length
    )
      return true;
  }
  return false;
};
