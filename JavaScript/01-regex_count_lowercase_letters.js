/** 
  * lowercaseCount - Counts the total number of
                     lowercase letters in a string
  * @str: string args
  return: total number of lowercase letters
*/

function lowercaseCount(str) {
  const regex = /[a-z]/g;
  const result = str.match(regex);
  const totalLowerCase =  result ? result.length : 0
  return totalLowerCase;
}