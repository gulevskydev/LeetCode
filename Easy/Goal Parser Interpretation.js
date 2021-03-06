/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  command = command.split('');
  command.forEach((e, i, arr) => {
    if (e + arr[i + 1] === '()') command.splice(i, 2, 'o');
    else if (e + arr[i + 1] === '(a') command.splice(i, 4, 'al');
  });
  return command.join('');
};
