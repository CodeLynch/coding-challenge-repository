# Problem Set 3: Longest Increasing Subsequence
## Problem Description
Given an unsorted array of integers, find the length of the longest increasing subsequence.
<br/><br/>
For context. The "Longest Increasing Subsequence" is a common problem in computer science and dynamic programming. In the context of an array of integers, the goal is to find the length of the longest subsequence of a given array such that all elements of the subsequence are sorted in increasing order.
<br/><br/>
Here's a more detailed explanation:
<br/>
**Subsequence**: A subsequence is a sequence of elements that appear in the same order as they
are in the original sequence, but not necessarily consecutively.
<br/>
**Increasing Subsequence**: An increasing subsequence is a subsequence in which the elements are
in strictly increasing order.
<br/><br/>
The "Longest Increasing Subsequence" problem asks for the length of the longest increasing subsequence in a given array. For example, given the array: [10, 9, 2, 5, 3, 7, 101, 18]
<br/><br/>
One possible increasing subsequence is [2, 5, 7, 18], and the length of this subsequence is 4. The goal
is to find the length of the longest increasing subsequence for a given array.
<br/><br/>
Solving this problem efficiently often involves dynamic programming techniques, where you build up a
solution for each subproblem and use those solutions to solve the overall problem.

## Solution Overview
The algorithm for my solution goes like this:
1. Create an array (*countArr*) with similar length to the input array. This will be the array containing the longest subsequence count for each number when they are the last in the sequences. All the sequence have a minimum of 1 number so the array is initialized with all its values being 1.
2. Have a variable pointing to an index in the input array starting at the second element (in this case, *i*) and another pointing to the first element of the array (in this case, *j*)
3. *i* will serve as the current number and *j* will be the previous numbers, so to do this *i* must iterate until the last value of the array, while *j* iterates until it reaches the current number (*i*).
4. For every iteration, check if previous number (*j*) is less than current number (*i*) and, to avoid counting all of the lesser numbers  and instead only counting if it's  increasing, we also check if the countArr at index *i* and *j* are equal.
5. If true, we will increase the *countArr* value at index *i* by 1.
6. Once the iterations are finished. Find the biggest value in *countArr* and return it.

I implemented this and created function, *getLongestSub()* that accepts a number array input, and used a **nested for-loop** for the algo. I then created an input variable (*inputArr*) and logged the result of *getLongestSub(inputArr)* to the console.


## Instructions to Run the Code
1. Make sure Node is installed on your device.
2. Ts-node is needed to run typescript files through the console. So if you don't have it installed globally yet,  use this command on the project directory: <br/>
```console
 npm install -g ts-node typescript '@types/node' 
 ```
 3. Change directory or verify that you are in the ```/problem_set_3``` directory on your terminal and type this to run the typescript file:
 ```console
ts-node longest_increasing_subsequence.ts
 ```