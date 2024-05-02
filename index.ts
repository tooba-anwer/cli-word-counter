#! /usr/bin/env node

// import the 'inquirer' module, which is a command line interface for Node.js 
import inquirer from "inquirer";

// Declare a constant 'answers' are assign it to theresult of inquirer.prompt function

const answers : {
    Sentence: string
} = await inquirer.prompt([
   {
       name: "Sentence",
       type: "input",
       message: "Enter your sentence to count the word: "
   }
])

const words = answers.Sentence.trim().split(" ")

// Print the array of words to the console
console.log(words)

// Print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);


