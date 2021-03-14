/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function (S) {
  let ans = 0;
  let stack = 0;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') stack++;
    else {
      if (!stack) ans++;
      else stack--;
    }
  }
  return ans + stack;
};
