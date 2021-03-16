/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
  const time = [];
  for (let i = 0; i < releaseTimes.length; i++) {
    if (i === 0) {
      time.push([releaseTimes[i], keysPressed[i]]);
    } else {
      time.push([releaseTimes[i] - releaseTimes[i - 1], keysPressed[i]]);
    }
  }
  return time.sort((a, b) => b[0] - a[0] || b[1].localeCompare(a[1]))[0][1];
};
