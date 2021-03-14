/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  let ans = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) ans += i;
  }
  return ans === num;
};
