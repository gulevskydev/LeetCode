/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const rev = +String(Math.abs(x)).split('').reverse().join('');
  return 0x7fffffff < rev ? 0 : x < 0 ? rev * -1 : rev;
};
