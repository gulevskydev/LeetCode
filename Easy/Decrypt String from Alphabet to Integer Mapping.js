/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  let res = '';
  for (let i = 0; i < s.length; i++) {
    if (s.slice(i, i + 3).includes('#') && !Number.isNaN(+s.slice(i, i + 2))) {
      res += String.fromCharCode(96 + +s.slice(i, i + 2));
      i += 2;
    } else if (s[i] < 10 && !Number.isNaN(s[i])) {
      console.log(s[i]);
      res += String.fromCharCode(96 + +s[i]);
    }
  }
  return res;
};
