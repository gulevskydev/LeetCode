/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  const res = [];
  for (let i = 0; i < s.length; i++) {
    res[indices[i]] = s[i];
  }
  return res.join('');
};
