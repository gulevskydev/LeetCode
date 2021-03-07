/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
  const increased = A[0] < A[A.length - 1];
  for (let i = 0; i < A.length - 1; i++) {
    if (increased && A[i] > A[i + 1]) return false;
    else if (!increased && A[i] < A[i + 1]) return false;
  }
  return true;
};
