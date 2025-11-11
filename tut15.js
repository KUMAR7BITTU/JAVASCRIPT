// Practice set -4 

// question - 1 :-
// What will the following print in javascript ? console.log("har\"".length)

// console.log("har\"".length)

// question - 2 :-
// Explore the includes, startsWith & endsWith function of a string.
/*const sentence = 'The quick brown fox jumps over the lazy dog. ';
const word = 'fox2';

console.log(sentence.includes(word))
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);*/

/*let name4 = "bittu";
console.log(`${name4}`)*/

// startsWith() and endsWith()

/*
startsWith(searchString)
startsWith(searchString, position)
*/

/*
endsWith(searchString)
endsWith(searchString, endPosition)
*/

/*let str = "BITTU KUMAR"
console.log(str.startsWith("BIT"))
console.log(str.startsWith("BIT",1))

console.log(str.endsWith("KUM",9)) */

/*const str1 = "Cats are the best!";
console.log(str1.endsWith("bes",16))*/

// question - 3 :-
// Write a program to convert the string into lowercase .

/*
let str2 = "KUMAR7SAHAB"
console.log(str2.toLowerCase())
*/

// question - 4 :-
// Extract the amount out of this string :- "Please give Rs 1000"
/*let str3 = "Please give Rs 1000"
let amount = Number.parseInt(str3.slice("Please give Rs".length+1))
console.log(amount)
console.log(typeof amount)*/

// question - 5 :-
// Try to change 4th character of a given string . Were you able to do it ?
let friend = "deepika"
console.log(friend)
friend[3] = "R" // This will not print any error . But this will also not change the original string because the string are immutable .
console.log(friend) // original string will not change because the string are immutable .