/**
 * @param {number} n
 * @return {number}
 */
const primes = {};
const results = {};
var countPrimes = function (n) {
  if (n < 3) return 0;
  if (results[n]) return results[n];
  let res = 0;
  for (let i = 2; i < n; i++) {
    if (primes[i]) res++;
    else if (checkIsPrime(i)) {
      res++;
      primes[i] = true;
    }
  }
  results[n] = res;
  return res;
};

function checkIsPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
