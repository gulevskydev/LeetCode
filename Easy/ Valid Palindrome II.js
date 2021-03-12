/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  if (s.split('').reverse().join('') === s) return true;
  let r = s.length - 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[r]) {
      const first = s.split('').slice();
      first.splice(i, 1);
      const second = s.split('').slice();
      second.splice(r, 1);

      if (
        first.join('') === first.reverse().join('') ||
        second.join('') === second.reverse().join('')
      ) {
        return true;
      } else {
        return false;
      }
    }
    r--;
  }
};
