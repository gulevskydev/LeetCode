/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const ans = [];
  const used = {};
  traverse([], nums);
  function traverse(start, rest) {
    if (!rest.length) {
      if (!used[start.join('')]) {
        ans.push(start);
        used[start.join('')] = 1;
      }
    }
    for (let i = 0; i < rest.length; i++) {
      traverse(
        [...start, rest[i]],
        [...rest.slice(0, i), ...rest.slice(i + 1)]
      );
    }
  }
  return ans;
};
