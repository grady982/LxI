/**
 * add(2)(5) => 7
 * add(2)(10) => 12
 * add(5)(10) => 15
 */
const add = (a) => (b) => a + b;

/**
 * sum([1, 2, 3, 4]) => 10
 */
const sum = (arr) => arr.reduce((a, b) => add(a)(b));

/**
 * uniq([1, 2, 2, 3, 4, 5, 5, 8]) => [1, 2, 3, 4, 5, 8]
 */
const uniq = (arr) => {
  let result = [];
  arr.forEach((data) => {
    if (!result.filter((r) => r === data).length > 0) {
      result.push(data);
    }
  });
  return result;
};

/**
 * flatten([1, [2, [3, [4, [5]]]]]) => [1, 2, 3, 4, 5]
 */
const destructArray = (arr) => {
  const [a, b] = arr;
  let result = [];
  result.push(a);
  if (b) {
    result.push(b);
  }
  return Array.isArray(b) ? [].concat(a, destructArray(b)) : result;
};

const flatten = (arr) => {
  let result = [];
  arr.forEach((data) => {
    if (Array.isArray(data)) {
      result = result.concat(destructArray(data));
    } else {
      result.push(data);
    }
  });
  return result;
};

console.log(flatten([1, [2, [3, [4, [5]]]]]));

/*
	Back-of-the-envelope:
	- Email server quota, 100k/day, 20 email/second
	- Estimate mail send for campaign: 1M mail
	- Send email through API from email server
	- TA needs to be collected from sharded user DB across the globe
*/
