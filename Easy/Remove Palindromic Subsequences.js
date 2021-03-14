/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function (s) {
  return !s.length ? 0 : s.split('').reverse().join('') === s ? 1 : 2;
};
