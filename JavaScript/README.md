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
