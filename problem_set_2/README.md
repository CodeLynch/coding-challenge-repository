# Problem Set 2: Valid Parentheses
## Problem Description
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is
valid. An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
## Solution Overview
I actually encountered this problem before on LeetCode, and the solution I remembered was using a stack. The algorithm was the following: 
1. Iterate through the string
2. If the current character is an opening, the character will be pushed to the stack. 
3. If it's a closing character, pop the stack, and compare the popped value if it's the equivalent opening to the current character. If it's not, stop the iteration, the string is **invalid**.
4. If it is the equivalent opening, the iteration will continue. 
5. If the iteration finished, check the stack if there are any opening lefts, if there are, the string is **invalid**. While if it's empty then it is a **valid** string.

The problem is there are no stacks in JavaScript so I simulated a stack with an array. I created function, *isValid()*, I initially iterated the string with a **foreach-loop** but it turns out you cannot break out of it so I switched to the simple **for-loop**. The **for-loop** follows the algorithm. Iterate through the string, check current char, add to array if opening. if closing, I simulated a stack pop by splicing the last index of the stack array. I added a switch to check the spliced value if it's not the equivalent opening of the current char. Return false if it's not, else continue with the loop. Outside the **for-loop**, I added an if condition to check the length of the stack array, to determine if there are any chars left inside after the loop.

I then added a test variable, **inputStr**, for the input string and logged the value if it's passed through *isValid()* in the console.

## Instructions to Run the Code
1. Make sure Node is installed on your device.
2. Ts-node is needed to run typescript files through the console. So if you don't have it installed globally yet,  use this command on the project directory: <br/>
```console
 npm install -g ts-node typescript '@types/node' 
 ```
 3. Change directory or verify that you are in the ```/problem_set_2``` directory on your terminal and type this to run the typescript file:
 ```console
ts-node valid_parentheses.ts
 ```