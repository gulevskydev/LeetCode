/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];

  function generate(left, right, str) {
    if (left === 0 && right === 0) {
      res.push(str);
      return;
    }

    if (left > 0) generate(left - 1, right, str + '(');
    if (right > 0 && left < right) generate(left, right - 1, str + ')');
  }
  generate(n, n, '');
  return res;
};
