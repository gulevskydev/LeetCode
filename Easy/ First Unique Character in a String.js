/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  if (!s.length) return -1;
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = ++obj[s[i]] || 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === 1) return i;
  }
  return -1;
};
