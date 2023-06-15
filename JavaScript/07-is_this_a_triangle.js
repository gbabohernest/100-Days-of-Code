/**
 * isTriangle - checks if a triangle can be built from
 *              a given sides
 * @a: side to check
 * @b: side to check
 * @c: side to check
 * return: true if the triangle can be built else false if not
 */
const isTriangle = (a, b, c) => {
  if (c < a + b && b < c + a && a < b + c) {
    return true;
  } else {
    return false;
  }
};
