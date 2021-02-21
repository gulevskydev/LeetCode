/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersect = function (nums1, nums2) {
  const store = {};
  const res = [];

  for (let i = 0; i < nums1.length; i++) {
    if (store[nums1[i]]) store[nums1[i]]++;
    else store[nums1[i]] = 1;
  }

  for (let i = 0; i < nums2.length; i++) {
    if (store[nums2[i]]) {
      store[nums2[i]]--;
      res.push(nums2[i]);
    }
  }

  return res;
};
