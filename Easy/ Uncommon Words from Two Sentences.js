/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {
  const store = {};
  const ans = [];
  A = A.split(' ');
  B = B.split(' ');
  for (let i = 0; i < A.length; i++) {
    store[A[i]] = ++store[A[i]] || 1;
  }
  for (let i = 0; i < B.length; i++) {
    store[B[i]] = ++store[B[i]] || 1;
  }
  for (let key in store) {
    if (store[key] === 1) ans.push(key);
  }
  return ans;
};
