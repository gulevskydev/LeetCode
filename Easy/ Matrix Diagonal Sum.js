/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let start = 0;
  let end = mat.length - 1;
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat.length; j++) {
      if (j === start || j === end) sum += mat[i][j];
    }
    start++;
    end--;
  }
  return sum;
};
