// function in javascript :- 

let a = 1;
let b = 2;
let c = 3;

const hello = () =>{
    console.log("Hi, how are you ? I am fine . Thank you .");
    return "Hi";
}

let v = hello();
console.log(v);

function onePlusAverage(x,y){
    return Math.round(1 + (x + y)/2);
}

const sum = (p,q) => {
    return p + q;
}

// console.log("One plus average of a and b is ",1 + (a+b)/2);
// console.log("One plus average of b and c is ",1 + (b+c)/2);
// console.log("One plus average of a and c is ",1 + (a+c)/2);

// console.log("One plus average of a and b is ",onePlusAverage(a,b));
// console.log("One plus average of b and c is ",onePlusAverage(b,c));
// console.log("One plus average of a and c is ",onePlusAverage(a,c));
console.log("Sum of a and b is ",sum(1,2));