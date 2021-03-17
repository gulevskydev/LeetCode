/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const store = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    const prev = s[i - 1];
    if (i > 0 && store[cur] > store[prev]) ans += store[cur] - store[prev] * 2;
    else ans += store[cur];
  }
  return ans;
};
