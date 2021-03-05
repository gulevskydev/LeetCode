/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  num = String(num).split('');
  for (let i = 0; i < num.length; i++) {
    if (num[i] == 6) {
      num.splice(i, 1, 9);
      return +num.join('');
    }
  }
  return +num.join('');
};
