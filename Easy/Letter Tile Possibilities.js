/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  let ans = 0;
  permute([], tiles.split('').sort().join(''));

  function permute(start, rest) {
    ans++;
    for (let i = 0; i < rest.length; i++) {
      if (rest[i] !== rest[i - 1]) {
        permute([...start, rest[i]], rest.slice(0, i) + rest.slice(i + 1));
      }
    }
  }
  return ans - 1;
};
