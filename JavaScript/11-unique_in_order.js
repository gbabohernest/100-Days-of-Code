/**
 * uniqueInOrder -  takes as argument a sequence and returns
 *                  a list of items without any elements with
 *                  the same value next to each other and preserving
 *                  the original order of elements.
 *
 * @param: iterable
 * @return: a list of unique in order items
 */

const uniqueInOrder = (iterable) => {
  let newList = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i + 1] === iterable[i]) {
      continue;
    }
    newList.push(iterable[i]);
  }
  return newList;
};
