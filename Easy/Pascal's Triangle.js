/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const arr = [];
  for (let i = 0; i < numRows; i++) {
    if (i === 0) arr.push([1]);
    else if (i === 1) arr.push([1, 1]);
    else {
      const local = [1];
      for (let j = 0; j < arr[arr.length - 1].length - 1; j++) {
        local.push(arr[arr.length - 1][j] + arr[arr.length - 1][j + 1]);
      }
      local.push(1);
      arr.push(local);
    }
  }
  return arr;
};
