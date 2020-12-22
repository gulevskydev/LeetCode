/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    if (m === 0) nums1.forEach((e, i) => nums1[i] = nums2[i]);
    else if (n > 0) {
        const copy = nums1.slice(0, m);
        let nPointer = 0;
        let mPointer = 0;
        for (let i = 0; i < nums1.length; i++) {
            if (nums2[nPointer] >= copy[mPointer]) {
                if (mPointer >= m) {
                    nums1[i] = nums2[nPointer];
                    nPointer++;
                } else {
                    nums1[i] = copy[mPointer];
                    mPointer++;
                }
            } else {
                if (nPointer >= n) {
                    nums1[i] = copy[mPointer];
                    mPointer++;
                } else {
                    nums1[i] = nums2[nPointer];
                    nPointer++;
                }
            }
        }
    }
};