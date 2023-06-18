/**
 * findNeedle - takes an array of junk but containing one 'needle'
 *              searches and find the index of the needle and return
 *              a string specifying the position of the needle
 * @param: haystack - array
 * return: position of the needle
 */

const findNeedle = (haystack) => {
  const index = haystack.indexOf("needle");
  return `found the needle at position ${index}`;
};
