/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let last = s.length;
  const res = [];
  for (let i = 0; i < s.length; i++) {
    while (i !== last) {
      if (checkIsPalindrome(s.slice(i, last))) {
        res.push(s.slice(i, last));
        last = s.length;
        break;
      } else {
        last--;
      }
    }
  }
  return res.sort((a, b) => b.length - a.length)[0];
};

function checkIsPalindrome(s) {
  let j = s.length;
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[j - 1]) return false;
    j--;
  }
  return true;
}
