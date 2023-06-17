/**
 * invert - Given a set of numbers, return the
 *          addictive inverse of each.
 * @param array: list of numbers
 * @returns inverted list
 */

const invert = (array) => {
  let inverted_list = [];
  let len = array.length;

  if (len !== 0) {
    for (let i = 0; i < len; i++) {
      if (array[i] >= 0) {
        array[i] = -array[i];
        inverted_list.push(array[i]);
      } else {
        array[i] = Math.abs(array[i]);
        inverted_list.push(array[i]);
      }
    }
    return inverted_list;
  }
  return [];
};
