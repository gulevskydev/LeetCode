/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  if (s.length < 2) return s.length;
  let prev = s[0];
  let max = 0;
  let cur = 1;
  for (let i = 1; i <= s.length; i++) {
    if (s[i] === prev) cur++;
    else {
      prev = s[i];
      max = Math.max(max, cur);
      cur = 1;
    }
  }
  return max;
};
