/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  let m = s.split('');
  const seen = new Set();
  t.split('').forEach((a, i) => {
    if (!seen.has(a)) {
      const char = m[i];
      seen.add(a);
      m = m.map((b, _i) => {
        if (b === char) {
          return a;
        } else if (b === a) {
          s[_i] = '§';
          return '§' + a;
        } else {
          return b;
        }
      });
    }
  });
  return m.join('') === t;
};
