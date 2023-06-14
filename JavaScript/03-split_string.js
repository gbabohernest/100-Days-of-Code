/**
 * solution - splits a string into pairs of two characters
 * @str: string to be split
 *
 * @Description: if the string contains an odd num of chars
 *               it should replace the missing second char
 *               of the final pair with an ('_') underscore
 * return: a string, if condition is true or the original str
 */

const solution = (str) => {
  const regex = /.{2}/g;
  let newString = "";

  if (str.length) {
    if (str.length % 2 === 1) {
      newString = str + "_";
      return newString.match(regex);
    } else {
      return str.match(regex);
    }
  } else {
    return [];
  }
};
