/**
 * squareSum - squares each number passed into it
 *            and return the result
 * @numbers: an array of numbers
 * return: sum of the numbers squared
 */

const squareSum = (numbers) => {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number ** 2;
  });
  return sum;
};
