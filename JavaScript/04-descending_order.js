/**
 * descendingOrder - Take any non-negative integer as
 *                   an argument and return it with its
 *                   digits in descending order
 * @n: integer arg
 * return: descended digits
 */

const descendingOrder = (n) => {
  if (n < 0) {
    return 0;
  }
  let desDigits;
  desDigits = n.toString().split("").sort().reverse().join("");
  return +desDigits;
};
