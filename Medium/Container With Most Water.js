/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (s) {
  let k = s.length - 1;
  let i = 0;
  let res = 0;
  while (i < k) {
    let min = Math.min(s[i], s[k]);
    const cur = (k - i) * min;
    if (res < cur) res = cur;
    if (s[i] < s[k]) i++;
    else k--;
  }
  return res;
};
