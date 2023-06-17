/**
 * findAverage - calculates the average
 *               of numbers in a given list
 *
 * @param array: list of numbers
 * @returns average
 */

const findAverage = (array) => {
  let sum = 0;
  let average = 0;
  let valueCount = 0;

  if (array.length !== 0) {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
      valueCount++;
    }
    average = sum / valueCount;
    return average;
  }
  return 0;
};
