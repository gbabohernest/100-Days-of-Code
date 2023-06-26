# JavaScript

## CodeWars Challenges

**00. Regex validate PIN code**

_ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits._

- If the function is passed a valid PIN string, return true, else return false.

**01. Regex count lowercase letters**

_Your task is simply to count the total number of lowercase letters in a string_

- _Example_
  - lowercaseCount("abc"); ===> 3
  - lowercaseCount("abcABC123"); ===> 3

**02. Alternate capitalization**

_Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even._

- **Example**
  - capitalize("abcdef") = ['AbCdEf', 'aBcDeF']

**03. Split Strings**

_Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('\_')._

- **Examples:**
  'abc' => ['ab', 'c_']
  'abcdef' => ['ab', 'cd', 'ef']

**04. Descending Order**

_Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number._

- _Examples:_
  Input: 42145 Output: 54421

  Input: 145263 Output: 654321

  Input: 123456789 Output: 987654321

**05- Playing with digits**

- Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p\*

  we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k \* n.

  In other words:

  Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n \* k

  If it is the case we will return k, if not return -1.

  Note: n and p will always be given as strictly positive integers.

**06- Printer Errors**

_In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m._

- The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

- Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

- You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

- The string has a length greater or equal to one and contains only letters from ato z.

- Examples:
- s="aaabbbbhaijjjm"
- printer_error(s) => "0/14"

- s="aaaxbbbbyyhwawiwjjjwwm"
- printer_error(s) => "8/22"

**07- is this a triangle**

_Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case._

- (In this case, all triangles must have surface greater than 0 to be accepted).

**08- Square(n) Sum**

_Complete the square sum function so that it squares each number passed into it and then sums the results together._

- For example, for [1, 2, 2] it should return 9 because 12+22+22=91^2 + 2^2 + 2^2 = 912+22 +22=9.

**09- Convert string to camel case**

_Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized._

- Examples

- "the-stealth-warrior" gets converted to "theStealthWarrior"

- "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

- "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

**10- String ends with?**

_Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string)._

- Examples:

  - solution('abc', 'bc') // returns true
  - solution('abc', 'd') // returns false

**11- Unique in order**

_Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements_

- For example:
- uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
- uniqueInOrder('ABBCcAD') == ['A', 'B', 'C', 'c', 'A', 'D']
- uniqueInOrder([1,2,2,3,3]) == [1,2,3]

**12- Beginner Series #2 Clock**

_Clock shows **h** hours, **m** minutes and **s** seconds after midnight_

- Your task is to write a function which returns the time since midnight in milliseconds

- **Example**

  - h = 0
  - m = 1
  - s = 1

  - result = 61000

**13- Calculate average**

_Write a function which calculates the average of the numbers in a given list._

- Note: Empty arrays should return 0

**14- Invert values**

_Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives_

- **Examples**
  invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
  invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
  invert([]) == []

**15- Sum of Numbers**

_Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b._

- Note: a and b are not ordered!

**16- A needle in the Haystack**

_Can you find the needle in the haystack?_

- Write a function findNeedle() that takes an array full of junk but containing one "needle"

- After your function finds the needle it should return a message (as a string) that says:

- "found the needle at position " plus the index it found the needle, so:

- Example(Input --> Output)

- ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

**17- Fake Binary**

_Given a string, replace any digit less then 5 with 0 and digits equal to 5 or greater with 1_

**18- Strip Comments**

_Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out._

- Example:

- Given an input string of:

  apples, pears # and bananas
  grapes
  bananas !apples

## Leetcode Challenges

**19- Roman to Integer**

_Given a roman numeral, convert it to an integer_

- Roman numerals are represented by seven different symbols:
- I, V, X, L, C, D and M.

**20- Palindrome Linked List**

_Given the head of a singly linked list, return true if it is a palindrome or false otherwise_
