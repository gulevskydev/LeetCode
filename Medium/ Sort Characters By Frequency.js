/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const res = {};
  for (let i = 0; i < s.length; i++) {
    res[s[i]] = ++res[s[i]] || 1;
  }
  return s
    .split('')
    .sort((a, b) => res[b] - res[a] || b.localeCompare(a))
    .join('');
};
