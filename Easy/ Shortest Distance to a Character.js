/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  const res = [];
  let index = Infinity;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) index = i;
    res[i] = Math.abs(i - index);
  }
  index = Infinity;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === c) index = i;
    res[i] = Math.min(index - i, res[i]);
  }
  return res;
};
