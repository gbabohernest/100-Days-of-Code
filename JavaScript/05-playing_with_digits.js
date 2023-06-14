/**
 * digPow - finds the sum of all digits of n taken
 *          to successive power of p is equal to k *n
 * @n: integer arg
 * @p: power
 * return: k or -1
 */

const digPow = (n, p) => {
  let value = 0;
  const num = n.toString().split("");

  for (let i = 0; i < num.length; i++) {
    const power = p + i;
    value += parseInt(num[i]) ** p;
  }

  return value % n === 0 ? value / n : -1;
};
