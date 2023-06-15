/**
 * printerError - return the error rate of a printer
 *                as a string representing a rational
 *                whose numerator is the number of errors
 *                and the denominator the length of the
 *                control string.
 * @s: string arg
 * return: error rate
 */

const printError = (s) => {
  const regex = /[a-m]/g;
  const strLen = s.length;
  const str = s.split("");
  let error = 0;

  if (strLen < 1) {
    return "0/" + strLen;
  }
  for (let i = 0; i < strLen; i++) {
    if (!str[i].match(regex)) {
      error += 1;
    }
  }

  return error + "/" + strLen;
};
