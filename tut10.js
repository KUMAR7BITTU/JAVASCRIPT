// while loop 

/*
const prompt = require("prompt-sync")();
let n = prompt("Enter the number :- ");
let i = 0;
while(i<n){
    console.log(i);
    i++;
}
*/

const prompt = require("prompt-sync")();
let n = prompt("Enter the number :- ");
n = Number.parseInt(n);
let i = 0;
do{
    console.log(i);
    i++;
}while(i<n);