/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  let s = '';
  let c = 3;
  n = String(n);
  for (let i = n.length - 1; i >= 0; i--) {
    if (c === 0) {
      s += '.' + n[i];
      c = 2;
    } else {
      c--;
      s += n[i];
    }
  }
  return s.split('').reverse().join('');
};
