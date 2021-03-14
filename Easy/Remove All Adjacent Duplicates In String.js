/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
  S = S.split('');
  for (let i = 1; i < S.length; i++) {
    if (S[i] === S[i - 1]) {
      S.splice(i - 1, 2);
      i -= 2;
    }
  }
  return S.join('');
};
