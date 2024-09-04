# Problem Set 1: Palindrome Pairs
## Problem Description
Given a list of unique words, your task is to find all pairs of distinct indices (i, j) in the list so that the concatenation of the two words, i.e., words[i] + words[j], forms a palindrome.
## Solution Overview
1. I first created a helper function, *isPalindrome()*, to check if a string is a palindrome. The function accepts a string and checks if its lower case is equal to its reversed version by first turning it to lower case as well (so it's not case-sensitive) and then splitting it, to turn it into an array, and then reversing it to get the reversed string. It returns a boolean value depending on whether the comparison is true or false.

2. I then created the primary function for the problem,  *getPairs()*. I initialized an empty array of type "number[][]" for the result, then I created a **nested for-loop**, to iterate through the word list. The outer loop assigns the current word of iteration to variable *wordA*. Then the inner loop follows which iterates through the word list as well. It checks if the outer iteration is not equal to the inner iteration, if it's not,
variable *wordB* is given the value of that iteration's word and  *isPalindrome()* is called with the concat of *wordA* and *wordB* parameter. If it returns true then index of the outer(i) and inner iteration(j) is added to the array in this format: ```[i,j]```.  Once the inner loop ends, the outer loop follows and starts again until it iterates through all of the word list.


## Instructions to Run the Code
1. Make sure Node is installed on your device.
2. Ts-node is needed to run typescript files through the console. So if you don't have it installed globally yet,  use this command on the project directory: <br/>
```console
 npm install -g ts-node typescript '@types/node' 
 ```
 3. Change directory or verify that you are in the ```/problem_set_1``` directory on your terminal and type this to run the typescript file:
 ```console
ts-node palindrome_pairs.ts
 ```