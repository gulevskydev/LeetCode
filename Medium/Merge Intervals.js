/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i - 1][1] >= intervals[i][0]) {
      const min = Math.min(intervals[i][0], intervals[i - 1][0]);
      const max = Math.max(intervals[i][1], intervals[i - 1][1]);
      intervals.splice(i - 1, 2, [min, max]);
      i--;
    }
  }
  return intervals;
};
