/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  const odd = nums.filter((e) => e % 2 === 0);
  const even = nums.filter((e) => e % 2 !== 0);
  let iOdd = 0;
  let iEven = 0;
  const ans = [];
  while (iOdd < odd.length && iEven < even.length) {
    ans.push(odd[iOdd], even[iEven]);
    iOdd++;
    iEven++;
  }
  return ans.concat(odd.slice(iOdd)).concat(even.slice(iEven));
};
