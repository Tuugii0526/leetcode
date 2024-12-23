/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose1 = function (functions) {
  return function (x) {
    return functions.toReversed().reduce((acc, cur) => cur(acc), x);
  };
};

const fn1 = compose1([(x) => x + 1, (x) => 2 * x]);
// 9
const compose2 = function (functions) {
  return function (x) {
    const composed = functions.reduceRight(
      (acc, fn) => {
        return acc.bind(null, fn);
      },
      (x) => x
    );
    return composed;
  };
};
const fn2 = compose2([(x) => x + 1, (x) => 2 * x]);
console.log(fn2(4));
