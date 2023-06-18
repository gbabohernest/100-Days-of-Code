/**
 * fakeBin - replace any digit of a given string  below 5
 *           with 0, any digit equal 5 and above with 1
 * @param :x -sting of digit(s)
 * return: a string of fake binary numbers
 */

const fakeBin = (x) => {
  let newString = "";

  for (let i = 0; i < x.length; i++) {
    if (parseInt(x[i]) < 5) {
      newString += "0";
    } else {
      newString += "1";
    }
  }
  return newString;
};
