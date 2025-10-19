// for Loops :- 

/*
for(let i=0; i<500; i++){
    console.log(i+1);
}
*/

/*
let sum = 0;
const prompt = require("prompt-sync")();
let n = prompt("Enter the value of n :- ");
for(let i=0; i<n; i++){
    sum += i + 1;
}
console.log("Sum of first " + n + " natural numbers is " + sum);
*/

// factorial  of a number :-
/*
const prompt = require("prompt-sync")();
let num = prompt("Enter the value of n ;- ");
num = Number.parseInt(num);
let fac = 1;

for(let i=num; i>0; i--){
    fac = fac * i;
}

console.log("The factorial of "+ num + " is "+fac);
*/

// for in loop :- 
/*
let obj = {
    anil : 90,
    lokesh : 82,
    bittu : 97,
    killi : 73,
    adarsh : 89
}

for (let i in obj){
    console.log("Marks of " + i + " is " + obj[i]);
}
*/

// for of loop ;- 
/*
for (let i of "Kuma_r7bittu"){
    console.log(i);
}
*/

for (var i = 0; i<5; i++){
    console.log(i);
}

console.log("finally the value of i is " +i); // var can be accessed outside the block also. Because it(var) has global scope.

/*
for(let i = 0; i<5; i++){
    console.log(i);
}

console.log(i) // let cannot be accessed outside the block. Because it (let) has scope inside the block only.
*/