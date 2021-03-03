/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (s) {
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    const cur = s[i].slice().split('').sort();
    if (obj[cur]) obj[cur].push(s[i]);
    else obj[cur] = [s[i]];
  }
  return Object.values(obj);
};
