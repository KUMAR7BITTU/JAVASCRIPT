// Practice set :- 

// question - 1 ;-
// Create a variable of type sting and try to add a number to it ?

let a = "Harry";
let b = 6;

console.log(a + b);

// question - 2 :-
// Use typeof operator to find the datatype of the string in last question.

console.log(typeof (a+b))

// question - 3 :-
// Create a const object in javascript . Can you change it to hold a number later ?

const item = {
    name : "Harry",
    section : 1,
    isPrinciple : false
}

// item = 45;
// console.log(item); // This will throw an error because we cannot reassign a constant value.

// question - 4 :-
// Try to add a new key to the const object in problem 3. Were you able to do it ?

item["friend"] = "anil"
console.log(item) // Yes, We can add a new key to the const object.

item['name'] = "lokesh"
console.log(item) // Yes, We can change the value of a key in a const object.

item['name'] = [1,2,3,4]
console.log(item) // Yes, We can change the value of a key in a const object.

// item = {}
// console.log(item) // No , We cannot reassign a const object.

// question - 5 :-
// Write a js program to create a word-meaning dictionary of 5 words.

const dict = {
    appreciate : "recognize the full worth of.",
    ataraxia : "freedom from emotional disturbance.",
    yakka : "work hard."
}

console.log(dict.yakka) // This is one way to access the value of a key.
console.log(dict['yakka']) // This is another way to access the value of a key.