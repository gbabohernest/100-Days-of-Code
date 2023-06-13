# 100 Days of Code Challenge - Progress Log

## Day 1: [June 6, 2023]

**Today's Progress:**

- Started working on some codewar's challenges using python
- I learned how to use function in python
- I also worked with List Data Structure to store multiple values and reference them using a single variable.
- I learned how to iterate over a list using for loop in python with the range function

**Thoughts:**

- I'm excited to kick off my 100 Days of Code challenge! The first day went well, and I made good progress. I enjoyed working with python list data structure and also function. I was able to create a function which takes in an alphanumeric string as an argument and return the number of times a distinct case-insensitive character occur. I also worked on solving another code challenge from codewars. I created a function which takes in a number and return the sum of all multiples of 3 or 5 below the given number. 0 if the number is negative. It was a great first day, I learned a lot working with function in python as well iterating over python list. Which is used to stored multiple values and reference them all using a single variable. Looking forward to tomorrow!

## Day 2: [June 7, 2023]

**Today's Progress:**

- Continuation from the previous day, I worked on solving more codewar python challenges
- Learn about binary addition in python, solved more problems on List Data Structure and continue to work with function in python
- I learned how to reverse a string by using some of python's built-in methods for list
  and string

**Thoughts:**

- The second day of my 100 Days of Code challenge went well, I started off with the continuation from the previous day, I was able to improve on my learning by working more with list and string in python. I wrote a function that takes in a string and return the reverse of that string if the words in the string is five or more characters long, if not just return the string itself. I did this while working with some built-in methods of list and string.
- To further understand string built-in methods, I wrote a function that validate an ATM machine pin code. Pin has to be five or six digits long and this function accepts a single string argument and return True if PIN is Valid, False if not. Inorder this achieve this, I used one of python's buit-in string methods call isdigit(), which checks a string and return True, if the string contains only digit, and return False otherwise. I then used the len function to check the len of the pin and store the value in a variable and later compare the value if it is equal to 4 or 6.

  Today, was great and Tomorrow the journey continue

## Day 3: [June 8, 2023]

**Today's Progress:**

- Today, I learned a bit about python dictionary data structure. I was able to use it in a function to determine the order of braces in a string. Dictionaries in python are used to store elements in key-value pairs. It is similar to a real-life dictionary where we have words and their corresponding meaning. Here, the word is the key and the value is the definition of the word.

- I did some Javascript challenges from codewars
- Wrote a function to validate an ATM PIN using regular expression in JavaScript
- Working more with regular expression, I wrote a funtion that counts lowercase letter in a string and return the total number of times it appears.
- I wrote a function that capitalize letters in even & odd indexes seperately in a string and return an array of both even and odd string version.

**Thoughts:**

- Third day of my 100 Days of Code challenge went well, I had some personal issues today, but in the end I was able to do some challenges on codewars. I wrote a function in python that validates a string of braces. This function accepts a string of braces and determine if the order of the braces is valid or not using python list. I was able to validate the order of the braces by implementing the stack data structure with list and also using python dictionary to determine if the order of the braces is valid or not.

- Working with regular expression in javascript, I created a function **validatePIN** - that validates an ATM pin by checking if length of the pin is equal 4 or 6 and then check if the pin only contains only digits using the regex **/^\d+$s** with the **test** method and passing in the pin as an argument to the method

- Still using regular expression with javascript, I wrote a function that counts lowercase letter in a string and return the number of times it appears in the string using the match method. I created the regex and run it against the string and pass in the regex as an argument to the match method. match method returns an array of matches or null if there is no match. if there is a match, I return the len or if not, return 0.

- I learned about string and array in Javascript and how to iterate over them. I wrote a function that takes a string argument and split that string into an array using the string method **split** which splits a string and return an array. Using the array method forEach, I accessed the index of each element in the array return by split method. And then check if the index is 0 or if the index modules 2 is equal to 0, in this case it is an even index, then change the character at that index to uppercase and push it to the even array. To get the odd element at index, i checked if the index modules 2 is not equal to 0.

## Day 4: [June 9, 2023]

**Today's Progress:**

- I continue to horn my skills in python by practicing on working with list and dictionary in python. I solve some coding problems using list and dictionary. I wrote a function that checks whether two array or list have the same elements and return True of they have the same or False otherwise. I also wrote a function that encode roman numerals. This function takes an integer between (1 and 3999) both included and return a string representation of the number in roman numerals.

**Thoughts**

- Working with list and dictionary in python gives you the ability to do cool stuff with data. It allows you to iterate over a bunch of data and performs different kinds of operation on them. With dictionary, you can store data in key value pairs. There are lots of application scenarios with list and dictionary and am excited to work with them.

## Day 5: [June 10, 2023]

**Today's Progress:**

- I continue to work on improving my skills in python. Today, I started with a challenge on codewars that checks if a number is a prime number. I was asked to write a function that checks if a number is a prime number and return True if it is else False.

- Still solving codewars python challenges, I wrote a function that takes a list containing the names of people that like an item and return a display text as shown in example below.

  - [] --> "no one likes this"
  - ["Peter"] --> "Peter likes this"
  - ["Jacob", "Alex"] --> "Jacob and Alex like this"
  - ["Max", "John", "Mark"] --> "Max, John and Mark like this"
  - ["Alex", "Jacob", "Mark", "Max"] --> "Alex, Jacob and 2 others like this"

- Find the Parity Outlier in the list of integers and return the outlier. Using list, I created this function that return the outlier from a list of integers that is either entirely comprised of odd or even integers.

**Thoughts**

- Solving these python challenges on code wars is helping think and it is improving my skills in python. It is helping work with list and other data structures in python to perform different operations on data. It is a great learning resource and I am progressing gradually.

## Day 6: [June 11, 2023]

**Today's Progress:**

- Solve code wars 5 kyu in python
- Write a function that takes a non-negative integer as input and returns the time in a human readable format (HH:mm:ss)

**Thoughts**

- This challenge was a food for thought. It was kind of difficult in the beginner to figure it out. In the end I came up with an algorithm to solve it. Taking the seconds as input, I had to find the hours, minutes and seconds from the input. To find the hours, using floor division, I divide the seconds given as input by the number of seconds that make up an hour. To find the minutes and seconds. I also take the seconds from the input and modulus it by the number of seconds that make up and hour and using floor division, I divided it by 60 because 60 seconds make a minute. As for the seconds, I modulus it by the number of seconds that make up an hours and then the reminder was also modulus by 60 to account for the number of seconds.

- This was a fun challenge and a brain teaser. It is a 5 kyu python challenge.

## Day 7 [June 12, 2023]

**Today's Progress**

- Today, I decided to do a project in Javascript.
- I created a digital clock which show the time as well as the day, month and year in the browser.

**Thoughts**

- During the development of this project, I was able to work with the date object in javascript. The date object can be a little tricky especially when you are starting out. Using the date object, I was able to access the various methods to get hour, minutes and seconds as well as the weekday, month, year and also date. With these methods, I was able to implement the logic of getting the clock to function correctly. I also learned to work with Document object model, which is a tree like structure of all the elements on a web page. It keeps track of all the different elements on a web page. Using the DOM,I was able to update the time and date in the browser dynamically.

## Day 8 [June 13, 2023]

**Today's Progress**

- I learned more about python data structures to improve my understanding of them. I improved my understanding of of list comprehension in python. The various ways we can use list comprehension to create a more concise list in python.

- Solve some 6 & 5 kyu challenges on code wars
