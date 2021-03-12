/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const map = new Map();
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      count += 2;
      map.delete(s[i]);
    } else {
      map.set(s[i]);
    }
  }
  return map.size > 0 ? count + 1 : count;
};
