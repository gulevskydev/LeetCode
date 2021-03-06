/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function (A) {
  let count = 0;
  A = A.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i++) {
    if (A[i] === A[i + 1] || A[i] > A[i + 1]) {
      A[i + 1] += 1;
      count++;
      i--;
    }
  }
  return count;
};
