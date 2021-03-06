/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr.slice(i, j).length % 2 !== 0) {
        sum += arr.slice(i, j).reduce((a, b) => a + b, 0);
      }
    }
  }
  return sum;
};
