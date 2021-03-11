/**
 * @param {string} S
 * @return {number[]}
 */

var partitionLabels = function (s) {
  const store = {};
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (store[cur]) {
      store[cur][1] = i;
    } else store[cur] = [i, i];
  }
  const arr = Object.entries(store).sort((a, b) => a[1][0] - b[1][0]);
  let current = [];
  let prev = -1;
  let max = arr[0][1][1];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][1][1] > max && arr[i][1][0] > max) {
      current.push(max - prev);
      prev = max;
      max = arr[i][1][1];
    } else if (arr[i][1][1] > max && arr[i][1][0] < max) {
      max = arr[i][1][1];
    }

    if (arr.length - 1 === i) {
      current.push(max - prev);
    }
  }
  return current;
};
