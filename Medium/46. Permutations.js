/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const ans = [];
  traverse([], nums);
  function traverse(start, rest) {
    if (!rest.length) {
      ans.push(start);
      return;
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
