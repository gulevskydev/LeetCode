/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const result = [];
  const obj = {};
  for (let i = 0; i < p.length; i++) {
    obj[p[i]] = ++obj[p[i]] || 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (i >= p.length) {
      const old = s[i - p.length];
      if (obj.hasOwnProperty(old)) obj[old] += 1;
      else obj[old] = 1;

      if (obj[old] === 0) delete obj[old];
    }
    if (obj.hasOwnProperty(s[i])) obj[s[i]] -= 1;
    else obj[s[i]] = -1;
    if (obj[s[i]] === 0) delete obj[s[i]];
    if (Object.keys(obj).length === 0) result.push(i - p.length + 1);
  }
  return result;
};
