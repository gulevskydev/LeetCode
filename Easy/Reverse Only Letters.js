/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
  const sorted = S.slice().replace(/[^a-zA-Z]/g, '');
  let idx = sorted.length - 1;
  let ans = '';
  for (let i = 0; i < S.length; i++) {
    if (/[a-zA-Z]/.test(S[i])) {
      ans += sorted[idx];
      idx--;
    } else {
      ans += S[i];
    }
  }
  return ans;
};
