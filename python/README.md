# Python

## CodeWars Challenges

**00. Multiples of 3 or 5**

*If we list all the natural numbers below 10 that are multiples of 3 0r 5, we get **3, 5, 6, 9**. The sum of these multiples is **23***
   - finished the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.    - Additionally, if the number is negative, return 0
   - Note: If the number is a multiple of both 3 and 5, only count it once.


**01. Count the number of Duplicates**

*Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.*

**02. Categorize New Member**

*The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.*

  - To be a senior, a member must be at least 55 years old and have a handicap greater than 7.     In this croquet club, handicaps range from -2 to +26; the better the player the lower the      handicap.

    **Input**
      - Input will consist of a list of pairs. Each pair contains information for a single             potential member. Information consists of an integer for the person's age and an               integer for the person's handicap.

    **Output**
      - Output will consist of a list of string values (in Haskell and C: Open or Senior)              stating whether the respective member is to be placed in the senior or open category.

    **Example**
      - input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
      - output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]


**03. Binary Addition**

*Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.*
  The binary number returned should be a string.

**04. Regex validate PIN code**

*ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.*

  If the function is passed a valid PIN string, return true, else return       false.

**05. Stop gninnipS My sdroW!**

*Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.*

  Examples:
    spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
    spinWords( "This is a test") => returns "This is a test" 
    spinWords( "This is another test" )=> returns "This is rehtona test"