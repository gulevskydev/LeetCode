// Runtime: 68 ms, faster than 100.00% of JavaScript online submissions for Reducing Dishes.
// Memory Usage: 38.6 MB, less than 78.57% of JavaScript online submissions for Reducing Dishes.

/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function (satisfaction) {
  let sum = 0;
  satisfaction = satisfaction.sort((a, b) => a - b);
  let x = 1;
  for (let i = 0; i < satisfaction.length; i++) {
    let local = 0;
    for (let j = i; j < satisfaction.length; j++) {
      local += satisfaction[j] * x;
      x++;
    }
    if (local > sum) sum = local;
    x = 1;
  }
  return sum;
};
