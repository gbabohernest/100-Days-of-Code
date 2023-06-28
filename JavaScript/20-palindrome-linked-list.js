/**
   isPalindrome - return true if the head of a singly linked
                  is a palindrome or false otherwise
 * @param {ListNode} head
 * @return {boolean}
 */

const isPalindrome = (head) => {
  const result = [];
  const tmp = head;

  while (tmp) {
    result.push(tmp.val);
    tmp = tmp.next;
  }
  const length = result.length;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (result[i] !== result[length - 1 - i]) {
      return false;
    }
  }
  return false;
};
