/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
  return endTime.filter((e, i) => e >= queryTime && queryTime >= startTime[i])
    .length;
};
