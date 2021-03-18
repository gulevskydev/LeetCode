/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function (N) {
  return parseInt(
    N.toString(2).replace(/0/g, '2').replace(/1/g, '0').replace(/2/g, '1'),
    2
  );
};
