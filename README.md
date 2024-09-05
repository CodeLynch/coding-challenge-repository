# Coding Challenge

## Overview
This is a repository containing my solutions for the Coding Challenge for my application to Amihan Global Strategies (AGSX). The challenge contains 3 problem sets which are contained in their own separate folders in this repository.

## Programming Language 
 The challenge also allows any programming language so I decided to use **TypeScript** since that's the language, I'm pretty familiar with since I mostly work with Web Projects and It's also easy to run in VSCode with Node. The syntax for it is also easy to remember, I think it feels quicker to write compared to other languages. I also prefer **TypeScript** over **JavaScript** since I like to have type-safety for my variables and the code is much easier to track if you know what values are needed for the input and output.

## Navigating the Repository
### Prerequisites
 - Since I'm using typescript, ```NodeJs```, must be installed on your machine so you can have an environment to run my solutions. 
 - Another thing needed is the ts-node package which allows you to run typescript files. You can install it globally by typing this command on your terminal (so node_modules won't be generated):
 ```console 
 npm install -g ts-node typescript '@types/node'
 ```

###

### Running the Scripts
 I displayed my outputs for my solutions with ```console.log()```. You can run and test my scripts by opening a command prompt (or your preferred terminal) in the directory where you have this repository. You can then ```cd``` (change directory) into any of the folders. For example, if you want to run palindrome pairs you must execute the following in the root directory of this folder:
 ```console
 cd problem_set_1
 ```
 then use the ts-node to run the script located in that folder
 ```console
 ts-node palindrome_pairs.ts
 ```

You can then also test the script by opening it in a text editor and modifying the input variable (which I indicated with a comment), so you can get different outputs when you run it again on the terminal.

To change into another problem_set folder, you must go up one level with
```
cd ..
```
and then cd again to your desired folder.