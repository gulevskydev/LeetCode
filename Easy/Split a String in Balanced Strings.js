/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let count = 0;
  let cur = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'R') cur++;
    else cur--;
    if (cur === 0) count++;
  }
  return count;
};
