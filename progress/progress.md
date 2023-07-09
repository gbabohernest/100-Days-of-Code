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

**Thoughts**

- Today learning session was great. I learned new concepts and test knowledge with some python code challenges. I solved 4 different problems, 3 of which of 6 kyu level and one 5 kyu level. It was a good learning experience.

## Day 9 [June 14, 2023]

**Today's Progress**

- I practice my javascript skills by solving some code wars challenges.
- I wrote a function that take any non-negative integer as an argument and return it with its digits in descending order.
- I wrote a function that splits a string into pairs of two characters and if the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('\_').

**Thoughts**

- Solving coding exercises these past days has help me understand some new concepts as well as remembering some old ones. I believe it has help with my confidence and also improving my problem solving skills. I know it is still a challenge but am up for it and gradually I will get there. :)

## Day 10 [June 15, 2023]

**Today's Progress**

- Work on solving some kyu in javascript

- Wrote a function name descendingOrder that take any non-negative integer as an argument and return it with its digits in descending order. I was able to achieve this by calling the to string method on the integer argument, which turn the integer to a string and then I called the split method on the string. The split method return an array containing each element in the string. I then sort the string by calling the sort method and finally i call the reverse method to reverse it and called the join method to join them all together as a single string. Knowing that the task was asking for a number to be return, I used the + operator next to the name of the string to convert it back to number. This works only if all the characters in the string are digits.

- Another kyu which I was able to solved asked to create a function which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string.

- I solved this using regular expression which is an object in javascript that is used to match character combinations in strings.

- I also created a function that take in a string and convert it to a camal case string. This task was also done using regular expression with some strings method. It was a great way to learn and implement some basic regular expression pattern.

**Thoughts**

- solving these javascript kyu is a great way to practice my skills and become better at it. It has helped me and am progressing on a daily. Looking forward to solving more and more javascript kyu.

## Day 11 [June 16, 2023]

**Today's Progress**

- I focused on JavaScript challenges on code wars
- Progress were made solving various kyu levels.
- These kyu were mostly array related.

**Thoughts**

- I feel am progressing on a daily and am happy for the progress. I plan to test my knowledge by picking more challenging task or picking a figma design and build it from the ground up.

## Day 12 [June 17, 2023]

**Today's Progress**

- I've been focusing on sharpening my JavaScript skills through CodeWars katas.

- I've tackled katas of various difficulty levels, ranging from level 8 to level 5. These katas have allowed me to practice solving coding problems, honing my problem-solving abilities and familiarizing myself with different JavaScript concepts and syntax.

**Thoughts**

- By working on katas at level 8, I reinforced my understanding of basic JavaScript concepts and syntax. It helped me solidify my grasp of fundamental programming techniques.

- Moving up to level 7 katas, I delved deeper into JavaScript and encountered more complex challenges. These katas required me to apply my knowledge of conditionals, loops, arrays, and functions in creative ways.

## Day 13 [June 18, 2023]

**Today's Progress**

- I successfully completed level 4 JavaScript katas on CodeWars, utilizing array methods like map and reduce, as well as string methods such as slice, trimRight, join, and split."

- Also, I solved challenges of different kinds, utilizing various methods. I worked with some math methods to solve a challenge which require me to find the sum of all integers given an as arguments between and including both of them. I used the Math.min methods, and also Math.max method. using a for loop I was able to get the sum of all numbers from the min number up to the max number included.

**Thoughts**

- I will continue challenge myself with coding exercises and projects, which I will soon start working on, to help me skilled up. I am looking forward to more challenging exercises and projects in the near future.

## Day 14 [June 19, 2023]

**Today's Progress**

- I started working on a project from FrontEnd Mentor called Social-Media-Dashboard-with-theme-switcher. As the name goes, this project allow user to switcher between light and dark theme at anytime and also setting their prefer-color-scheme based on their operating system setting.

- On the first day, I worked on the header component of the project. set up the markup and also the styles along with. The header component compresses of the site heading and the toggle btn to switch between light and dark theme.

- I used a css preprocessor called scss for styling. Scss gives you control over your styles with additional functionalities like function, mixins, and also partials which enable you to organize your styles into modules and keep things more organize.

- I used BEM for all my classes to keep them organize

- For layout, I used flexbox to align the heading and the toggle element at both end of the page width and keep them in the center of the page.

**Thoughts**

- Building things from stretch by looking at the design files is how things are done in the real world. Thus, working on this project and building it out like the design is a good learning experience. I am glad to be doing this.

- I am okay with how the header component looks and the styles. I couldn't figure out the hover effect color on the toggle because am not a a pro plan to get the actual figma file. I am building this from a jpeg file and eyeballing every single things. But that is okay, it has help me to spot details by looking.

## Day 15 [June 20, 2023]

**Today's Progress**

- Continue to work my way up building the project like how it look in the design file. I build the card component for the social media dashboard.

- Created the markup for the card with a section element to parent all the cards component. The section component will be a grid parent for the cards component.

- Using grid, I layout the cards in a four column grid on large devices and a two column grid on medium devices and stack up on small devices to make them responsive.

- Using flexbox, I center the elements within the card and also give them proper alignment.

**Thoughts**

- Working with css grid makes things simple for me and I found it to better at laying out elements on the page and flexbox for aligning elements on the page.

- I used grid in this project for alignment with few lines of code I was able to make the card element in a gird layout. I found it simple and a great way to layout elements.

## Day 16 [June 21, 2023]

**Today's Progress**

- Overview card component makeup and styles

- Use grid for the layout

- flexbox for alignment of elements within the card

**Thoughts**

- Using BEM classes helps a lot with styles organization and also when debugging styles.

- Mixins in sass are great way not to write duplicate styles. I created a flex mixins and used it on every element that need to be flex and gird. It helped me not repeat styles rules for elements that need it. I write a style rule one place and just include where I want it.

## Day 17 [June 22, 2023]

**Today's Progress**

- Set the various color for dark / light mode using css custom properties.

- With light mode as default, all color variables assign on the root element will have two values with the default being light mode colors.

- Using prefer-color-scheme Dark, the values of the default colors will change to the assigned dark mode colors.

**Thoughts**

- Before this project I had no idea what prefer-color-scheme is but I guess we learn everyday when we put in the effort. Using prefer-color-scheme Dark media query, the different colors will be change to suit the dark mode of the user system.

- I created a variable for each element on the page that needs a color change in the different modes and each of these variables will contain two values base on the color-scheme, with light mode been the default.

## Day 18 [June 23, 2023]

**Today's Progress**

- Add functionality for the toggle button

- when user toggle the button either on or off the light or dark mode will activated.

- Detect user prefer-color-scheme in real time and toggle the button to their preferred choice.

- Store user theme choice in the browser localstorage to persist user choice after page reload.

**Thoughts**

- Implementing the various functionalities was a great learning experience.

- Learning how to listen for the various events, for example the change event for this project. which will listen when user decides to change their prefer color theme from within their system, this event will detect it and updates the toggle in realtime to take effect using a class which will be assign to the body element.

## Day 19 [June 24, 2023]

**Today's Progress**

- I read on some of the array methods in Javascript
- map, filter, reduce, slice, forEach etc.

**Thoughts**

- These array methods and many other array methods are used to make modification to the elements of the array. They provide a powerful and convenient ways to manipulate and process arrays in Javascript.

## Day 20 [June 25, 2023]

**Today's Progress**

- update the readme.md file of my social-media-dashboard theme switcher project
- added a link to the live site as well to project url on frontend mentor

**Thoughts**

- A good readme.md file helps others to understand what your project is about.

- It is a skills am trying to improve on with every passing day.

## Day 21 [June 26, 2023]

**Today's Progress**

- Did some Javascript coding challenges from Leetcode

- Write a function that take in a roman numeral string and return the integer version

- Write a function that return true if the head of a singly linked is a palindrome or false otherwise.

**Thoughts**

- improving my problem skills is a great way to get started on the journey of becoming a skilled programmer.

- solving these coding challenges has help with that, it has help me think about the problems and come up with an algorithm before writing a single line of code.

## Day 22 - 30 [June 30, 2023]

**Today's Progress**

- Start working on a testimonials-slider project from Frontend Mentor

- create the markup for the entire project

- use scss for styling

- Javascript for slider functionality

**Thoughts**

- Building projects from frontend mentor is a great way to put into practice what you have learn.

- This project took me while to finished due to my battle with a fever when I started to build the testimonials-slider.

- I implemented the slider functionality with Javascript and dynamically adding the contents to the various element when the dom loads.

- This project was another great way to practice my javascript skills and it was a great learning experience. I am looking forward to building more projects with javascript.

## Day 31 - 39 [July 09, 2023]

**Today's Progress**

- Work on a Frontend Mentor Challenge (Calculator- app)

- Create the markup for the entire project

- Did general styling for the project

- Implement computational functionalities

- Style individual themes

- Implement toggle functionalities to enable theme switching

**Thoughts**

- This project was a great learning experience for me. I did learn a lot while building the project. Making research, figuring things out, trying stuff out until it work. It took a while to complete this project but I try to soak up everything I could and build it out like the design, which I did and learn in the process.
