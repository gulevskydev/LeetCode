/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
  const months = [
    ,
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const [day, month, year] = date.split(' ');
  return `${year}-${('0' + months.indexOf(month)).slice(-2)}-${(
    '0' + parseInt(day)
  ).slice(-2)}`;
};
