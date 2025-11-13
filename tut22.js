// Exercise - 1 :- Guess the Number

// Write a javascript program to generate a random number and store it in a variable. The program then takes an input from the user to tell them whether the guess was correct , greater or lesser than the original number. 100 - (no. of guesses) is the score of the user. The program is expected to terminate noce the number is guessed . Number should be between 1 - 100.

let random_number = Number.parseInt(Math.random()*100);
console.log(random_number);

let count = 1;
let max_count = 100;
let user_guess_number;
do{ 
 let prompt = require("prompt-sync")();
 user_guess_number = prompt("Enter your number :- ");
 if(user_guess_number == random_number){
    console.log("Number matched and the number is",user_guess_number,"and score of user is",max_count-count);
    break;
 }
 count++;
}while(count<=max_count && random_number != user_guess_number);

if(count>max_count){
console.log("Number not found");
}