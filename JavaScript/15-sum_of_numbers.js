/**
 * getSum - finds the sum of all integers given as an argument
 * @param: a - int arg
 * @param: b - int arg
 * return: sum of all integers between and including both integers
 */

const getSum = (a, b) => {
  let sum = 0;
  if (a == b) {
    return a;
  }

  const minNum = Math.min(a, b);
  const maxNum = Math.max(a, b);

  for (let i = minNum; i <= maxNum; i++) {
    sum += i;
  }
  return sum;
};
