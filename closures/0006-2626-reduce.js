/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  if (!nums.length) {
    return init;
  }
  for (let i = 0; i < nums.length; i++) {
    init = fn(init, nums[i]);
  }
  return init;
};
console.time("time");
const result = reduce(
  [0, 1, 2, 3, 4],
  (init, cur) => {
    return init + cur;
  },
  0
);
console.log(result);

console.timeEnd("time");
