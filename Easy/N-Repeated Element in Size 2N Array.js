/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    const store = {}
    for(let i = 0; i < A.length; i++) {
        store[A[i]] = ++store[A[i]] || 1
    }
    for(let key in store) {
        if(store[key] > 1) return key
    }
};