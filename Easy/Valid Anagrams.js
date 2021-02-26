/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function (s, t) {
  const chars = {};
  for (let i = 0; i < s.length; i++) {
    if (chars[s[i]]) chars[s[i]]++;
    else chars[s[i]] = 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (chars[t[i]]) {
      chars[t[i]]--;
    } else {
      return false;
    }
  }

  return true;
};
