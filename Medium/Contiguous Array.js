/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let ans = 0;
  let s = 0;
  const hash = { 0: -1 };
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) s++;
    else s--;
    if (hash.hasOwnProperty(s)) ans = Math.max(ans, i - hash[s]);
    else hash[s] = i;
  }
  return ans;
};
