/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix.length) return res;
  const res = [];
  let rowStart = 0;
  let rowEnd = matrix.length - 1;
  let colStart = 0;
  let colEnd = matrix[0].length - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    // Right
    for (let i = colStart; i <= colEnd; i++) {
      res.push(matrix[rowStart][i]);
    }
    rowStart++;

    // Down
    for (let i = rowStart; i <= rowEnd; i++) {
      res.push(matrix[i][colEnd]);
    }
    colEnd--;

    if (rowStart <= rowEnd) {
      // Left
      for (let i = colEnd; i >= colStart; i--) {
        res.push(matrix[rowEnd][i]);
      }
    }
    rowEnd--;

    if (colStart <= colEnd) {
      // Top
      for (let i = rowEnd; i >= rowStart; i--) {
        res.push(matrix[i][colStart]);
      }
    }
    colStart++;
  }

  return res;
};
