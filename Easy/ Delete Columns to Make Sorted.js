/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  let ans = 0;
  for (let i = 0; i < strs[0].length; i++) {
    let cur = '';
    for (let j = 0; j < strs.length; j++) {
      cur += strs[j][i];
    }
    if (cur !== cur.split('').sort().join('')) ans++;
  }
  return ans;
};
