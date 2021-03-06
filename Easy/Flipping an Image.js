/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  return image.map((e) => e.reverse().map((e) => (e == 1 ? 0 : 1)));
};
