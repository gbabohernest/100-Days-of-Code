/**
 * A leetcode challenge
 *
 * romanToInt - takes a roman numeral as input
 *              and convert it to an integer
 * @param {string} s
 * @return {number}
 */

const romanToInt = (s) => {
  const romanNumberSymbol = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const value = s;
  let result = 0;

  for (let i = 0; i < value.length; i++) {
    const currentValue = romanNumberSymbol[value[i]];
    const nextValue = romanNumberSymbol[value[i + 1]];

    if (nextValue & (currentValue < nextValue)) {
      result += nextValue - currentValue;
      i++;
    } else {
      result += currentValue;
    }
  }
  return result;
};
