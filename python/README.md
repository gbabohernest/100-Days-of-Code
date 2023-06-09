# Python

## CodeWars Challenges

**00. Multiples of 3 or 5**

\*If we list all the natural numbers below 10 that are multiples of 3 0r 5, we get **3, 5, 6, 9**. The sum of these multiples is **23\***

- finished the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. - Additionally, if the number is negative, return 0
- Note: If the number is a multiple of both 3 and 5, only count it once.

**01. Count the number of Duplicates**

_Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits._

**02. Categorize New Member**

_The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed._

- To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

  **Input**

  - Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

  **Output**

  - Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

  **Example**

  - input = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
  - output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

**03. Binary Addition**

_Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition._
The binary number returned should be a string.

**04. Regex validate PIN code**

_ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits._

If the function is passed a valid PIN string, return true, else return false.

**05. Stop gninnipS My sdroW!**

_Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present._

**Examples:**

- spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
- spinWords( "This is a test") => returns "This is a test"
- spinWords( "This is another test" )=> returns "This is rehtona test"

**06. Valid Braces**

_Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid._

- All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

  **Example**

  - "(){}[]" => True
  - "([{}])" => True
  - "(}" => False
  - "[(])" => False
  - "[({})](]" => False

**07. Are they the same**

_Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order._

**08. Roman Numerals Encoder**

_Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer._

- Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

**09. Is a number prime?**

_Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime._

**10. who likes it**
_Write a function that takes a list containing the names of people that like an item and return a display text as shown in example below._

- [] --> "no one likes this"
- ["Peter"] --> "Peter likes this"
- ["Jacob", "Alex"] --> "Jacob and Alex like this"
- ["Max", "John", "Mark"] --> "Max, John and Mark like this"
- ["Alex", "Jacob", "Mark", "Max"] --> "Alex, Jacob and 2 others like this"

**11. Find the Parity Outlier**
_You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N._
**Example**
_[2, 4, 0, 100, 4, 11, 2602, 36]_
_Should return: 11 (the only odd number)_
_[160, 3, 1719, 19, 11, 13, -21]_
_Should return: 160 (the only even number)_

**11. Human Readable Time**

_Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)_

- HH = hours, padded to 2 digits, range: 00 - 99
- MM = minutes, padded to 2 digits, range: 00 - 59
- SS = seconds, padded to 2 digits, range: 00 - 59

**12. Scramblies**

- Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false. -

- Notes:
  Only lower case letters will be used (a-z). No punctuation or digits will be included.
  Performance needs to be considered.

**13. Build Tower**
_Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "\*" \_character._

- For example, a tower with 3 floors looks like this:

  [
  " * ",
  " *** ",
  "*****"
  ]

**14. Simple Pig Latin**

_Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched._

- Examples

  pig_it('Pig latin is cool') # igPay atinlay siay oolcay
  pig_it('Hello world !') # elloHay orldway !

**15. Bouncing Balls**

_He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66)._

- His mother looks out of a window 1.5 meters from the ground.

  How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

  Three conditions must be met for a valid experiment:

  Float parameter "h" in meters must be greater than 0
  Float parameter "bounce" must be greater than 0 and less than 1
  Float parameter "window" must be less than h.

  If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

  **Note**:

  The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.
