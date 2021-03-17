/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  for (let i = 0; i < matrix[0].length; i++) {
    let max = -Infinity;
    let id;
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] > max) {
        max = matrix[j][i];
        id = j;
      }
    }
    if (Math.min(...matrix[id]) === max) return [max];
  }
  return [];
};
