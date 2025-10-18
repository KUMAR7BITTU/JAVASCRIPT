// In JavaScript, an expression is a piece of code that evaluates to a single value. This value can be of any data type, such as a number, a string, a boolean, an object, or a function. Expressions are fundamental building blocks of JavaScript code, and they can be simple or complex .

console.log("Operators in JS :- ")

// Arithmetic Operators

let a = 6;
let b = 5;
let c = 4;
let d = 3;
let e = 2;
let f = 1;

console.log("a =",a,"b =",b,"c =",c,"d =",d,"e =",e,"f =",f)

console.log("a + b =", a+b)
console.log("a - b =", a-b)
console.log("a / b =", a/b)
console.log("a * b =", a*b)
console.log("a ** b =", a**b)
console.log("a % b =", a%b)
console.log("a++ =",a++)
console.log("a =",a)
console.log("++b =",++b)
console.log("b =",b)
console.log("c-- =",c--)
console.log("c =",c)
console.log("--d =",--d)
console.log("d =",d)

// Assignment Operators

let x = 10;
x += 5; // equivalent to x = x + 5
console.log(x);
x -= 5;
console.log(x);
x /= 5;
console.log(x);
x *= 5;
console.log(x);
x**=5;
console.log(x);

// Comparision Operators
/*
let comp1 = 6;
let comp2 = 6;

console.log("comp1 == comp2",comp1==comp2)
console.log("comp1 != comp2",comp1!=comp2)
console.log("comp1 === comp2",comp1===comp2)
console.log("comp1 !== comp2",comp1!==comp2) */

let comp3 = 6;
let comp4 = '6';

console.log("comp3 == comp4",comp3==comp4)
console.log("comp3 != comp4",comp3!=comp4)
console.log("comp3 === comp4",comp3===comp4)
console.log("comp3 !== comp4",comp3!==comp4)
console.log("comp3>comp4",comp3>comp4)

// Logical Operators

let p = 5;
let q = 6;

console.log(p<q && p==5)
console.log(p>q || p==5)
console.log(!false)
console.log(!true)

// Comments 
// use single line comment for one line comments .

/*
Use multi-line comment for multiple lines of comments.
This is the second line of the comment.
And this is the third line of the comment.
*/