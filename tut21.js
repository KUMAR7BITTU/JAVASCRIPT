// practice - 5 :-

// question - 1 :- Create an array of numbers and take input from the user to add numbers to this array ?

/* let arr = [10,12,14,16,18];
const prompt = require("prompt-sync")();
let a = prompt("Enter a number please :- ");
console.log(a);
//console.log(typeof a);
let num = Number.parseInt(a);
arr.push(num);
console.log(arr); */

// question - 2:-

// keep adding numbers to the array in question 1 until 0 is added to the array ?

/* 
let arr = [10,20,30,40,50,60];
let a;
do{
  let prompt = require("prompt-sync")();
  a = prompt("Enter your number :- ");
  let num = Number.parseInt(a)
  arr.push(num)
  
}while(a!=0)

console.log(arr); */

// question - 3 :-

//filter for numbers divisible by 10 from a given array ?

/* let arr = [10,15,20,25,30,35,40];

let new_arr = arr.filter((element)=>{
    return element % 10 == 0;
})

console.log(new_arr); */

// question - 4 :-

// Create an array of square of given numbers ?

/* let arr2 = [1,2,3,4,5,6,7,8,9,10];
let new_arr2 = arr2.map((element)=>{
    return element*element;
})
console.log(new_arr2); */

// question - 5 :- 

// Use reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number whose factorial needs to be calculated.)

let prompt = require("prompt-sync")();
let n = prompt("Enter the value of n :- ")

let arr3 = [];
for(let i=1; i<=n; i++){
    arr3.push(i);
}
console.log(arr3);

/* function factorial(element){
   if(element == 0 || element == 1){
    return 1;
   }
   else{
    return element * factorial(element-1);
   }
   
}
let new_arr3 = arr3.map(factorial);
console.log(new_arr3); */

let num3 = arr3.reduce((x1,x2)=>{
    return x1 * x2;
})
console.log(num3);