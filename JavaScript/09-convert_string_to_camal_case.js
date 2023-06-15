/**
 * toCamelCase - converts a string into a camelCase string
 * @str: string arg
 * return: a camelCase string or a Pascal case
 *         if the first word in the original string
 *         is capitalize
 */

const toCamelCase = (str) => {
  const regex = /[-_]/g;

  if (str.length == 0) {
    return "";
  }

  let words = str.split(regex);
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  words = words.join("");
  return words;
};
