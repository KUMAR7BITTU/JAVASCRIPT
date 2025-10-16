//Primitives and Objects in JavaScript

// Primitives data types are a set of basic data types in javascript .

/* There are 7 primitive data types in javascript :- 
1, Null
2, Number
3, String
4, Symbol
5, Undefined
6, Boolean
7, BigInt
*/

// Objects are like collection of key-value pairs. keys are usually string and integer . Values can be of any data type including objects .

// nn bb ss u - > null, number, Boolean, BigInt, String, Symbol, undefined .
let a = null;
let b = 342;
let c = true; // can also be false
let d = BigInt("567") + BigInt("3");
let e = "Harry";
let f = Symbol("I am a nice symbol");
let g = undefined;
let h; // It will automatically become undefined

console.log(a,b,c,d,e,f,g,h);
console.log(typeof d); // to check the data type of a variable

// undefined → variable declared, but not assigned a value yet.

// null → variable assigned an intentional “nothing” or “empty” value.

// object in javascript are non-primitive data types .

const item = {
    "Harry" : true,
    "Shubh" : false,
    "Lovish" : 67,
    "Rohan" : undefined
}

console.log(item["Harry"]);
console.log(item["ddsfg"]) // it will print undefined as this key is not present in the object .

// We can also add key-value pair to an object .
item["bittu"] = 90;
console.log(item);