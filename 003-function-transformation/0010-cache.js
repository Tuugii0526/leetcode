/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const stringifiedArgs = JSON.stringify(args);
    console.log("stringified args:", stringifiedArgs);

    if (cache.has(stringifiedArgs)) {
      return cache.get(stringifiedArgs);
    } else {
      const result = fn(...args);
      cache.set(stringifiedArgs, result);
      return result;
    }
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(0, 0);
memoizedFn(0, 0);
console.log("Callcount:", callCount);
