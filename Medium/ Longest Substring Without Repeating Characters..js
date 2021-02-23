/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let cur = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (cur.includes(s[j])) {
        console.log(cur);
        if (cur.length > max) max = cur.length;
        cur = '';
        break;
      } else if (j === s.length - 1 && i === s.length - 1) {
        cur += s[j];
        if (cur.length > max) max = cur.length;
      } else cur += s[j];
    }
  }
  return max;
};
