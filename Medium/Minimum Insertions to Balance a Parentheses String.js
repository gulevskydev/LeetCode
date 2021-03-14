/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
  let ans = 0;
  let right = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      if (right % 2) {
        right -= 1;
        ans += 1;
      }
      right += 2;
    } else {
      right -= 1;
      if (right < 0) {
        right += 2;
        ans += 1;
      }
    }
  }
  return ans + right;
};
