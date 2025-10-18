// Conditional expressions in javascript

// npm install prompt-sync
/*const prompt = require("prompt-sync")();
let a = prompt("What is your age?");
console.log(typeof a);
console.log(a)*/

// Note :- use prompt and alert to ask input or show any alert message in the browser .

/*a = Number.parseInt(a); // Converting the string to number .
console.log(typeof a);*/

// Run the below alert in browser console .
/*
if(a > 0)
{
    alert("This is a valid age");
}
else 
{
    alert("This is not a valid age");
}
*/

/*
if(a<0){
    alert("This is an invalid age .");
}
else if(a<9){
    alert("You are a kid and you can't even think of driving .");
}
else if(a<18 && a>=9){
    alert("You are a kid and you can think of driving after 18 .");
}
else {
    alert("You can now drive as you are above 18 years old .");
}
console.log("Done");
*/

// Ternary Operator
// syntax :- condition ? exp1 : exp2
//console.log("You can", (a < 18 ? "not drive" : "drive"));

// switch case statement

// Example :- 1 (Basic example)
let day = 3;
let dayName;

switch (day) {
    case 1 :
        dayName = "Monday";
        break;
    case 2 :
        dayName = "Tuesday";
        break;
    case 3 :
        dayName = "Wednesday";
        break;
    case 4 :
        dayName = "Thursday";
        break;
    case 5 :
        dayName = "Friday";
        break;
    default :
        dayName = "Invalid Day"
}

console.log(dayName);

// Example :- 2 (Grouping Cases)
let fruit = "apple";

switch(fruit){
    case "apple" :
    case "mango" :
    case "grapes" :
        console.log("It is a grapes");
        break;
    default :
        console.log("It is not a fruits");
}
console.log(fruit);


// Example :- 3 Without break (Fall-through Behavior)
let num = 2;
switch (num) {
    case 1 : 
        console.log("The value of the number is one .");
    case 2 : 
        console.log("The value of the number is two .");
    case 3 : 
        console.log("The value of the number is three .");
    case 4 :
        console.log("The value of the number is four .");
    case 5 :
        console.log("The value of the number is five .");
    default :
        console.log("This is a invalid number .")
}