/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
  return (
    String(s)
      .split('0')
      .filter((e) => e.length).length === 1
  );
};
