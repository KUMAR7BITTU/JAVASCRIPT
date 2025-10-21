// Practice Set -> 3 :- Loops and functions 

// question -1 :- Write a program to print the marks of a student in an object using a for loop .

// obj = { harry : 98, rohan : 70, aakash : 73 }

let marks = {
    harry : 90,
    shubham : 9,
    lavish : 56,
    monika : 4
}

/*
for (let i=0; i<Object.keys(marks).length; i++)
{
    console.log("marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}
*/

// question -2 :- Write a program in Question 1 using for in loop .
/*
for(let key in marks){
    console.log("Marks of " + key + " are " + marks[key])
}
*/

// question -3 :- Write a program to print "try again" until the user enters the correct number .

let cn = 43;
let i;
const prompt = require("prompt-sync")();
while(i != cn){
    console.log("Try again");
    i = prompt("Enter the number :- ");
}
console.log("You have entered the correct number .")

// question -4 :- Write a function to find mean of 5 numbers .

const mean = (a,b,c,d,e) => {
    return (a + b + c + d + e)/5;
}
console.log(mean(10,20,30,40,50));