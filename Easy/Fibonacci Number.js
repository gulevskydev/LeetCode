/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const f = [0, 1];
  if (n === 0) return 0;
  if (n < 3) return 1;
  for (let i = 1; i < n; i++) {
    const tmp = f[f.length - 1];
    f[f.length - 1] = f[0] + f[1];
    f[0] = tmp;
  }
  return f[f.length - 1];
};
