/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  if (num < 1) return 0;
  let count = 1;
  while (num > 1) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num -= 1;
    }
    count++;
  }
  return count;
};
