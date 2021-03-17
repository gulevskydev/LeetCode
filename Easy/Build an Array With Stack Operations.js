/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  const ans = [];
  let idx = 0;
  for (let i = 1; i <= n; i++) {
    if (i !== target[idx]) ans.push('Push', 'Pop');
    else {
      ans.push('Push');
      idx++;
      if (idx === target.length) return ans;
    }
  }
  return ans;
};
