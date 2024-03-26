#! /usr/bin/env node
import inquirer from "inquirer";
//  COMPUTER WILL GENRATE A RANDOM NUMBER
// USER INPUT FOR GUESSING NUMBER
// COMPARE USER INPUT WITH COMPUTER GENERATED NUMBER AND SHOW RESULT
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10:",
    },
]);
console.log(answer);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulation! you guessed right number");
}
else {
    console.log("you guessed wrong number");
}
