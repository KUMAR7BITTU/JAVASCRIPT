// String methods in JavaScript

let name1 = "Harry_______________";
let name2 = "Harry\"";
// console.log(name1.length);
// console.log(name2.length); // Escape character (\") are treated as single character .
// console.log(name1.toUpperCase());
// console.log(name1.toLowerCase());
// console.log(name1.slice(2,4));
// console.log(name1.slice(2))

// let name3 = "Bittu Sahab";
// console.log(name3.replace("Bittu", "Kumar"));


// let name = "Harry";
// let friend = "Rohan";
// console.log(name.concat(" is a good friend of ", friend,"ok"));

// let name3 = "    Meena    "
// console.log(name3)
// console.log(name3.trim())

// Strings are immutable .
// let fr = "Shivika"
// console.log(fr[0])
// console.log(fr[1])
// console.log(fr[2])
// console.log(fr[3])

// let fullname = "Bittu" + " " + "Kumar"
// console.log(fullname)

// Note :- Which ever built in function we apply in any string, the original string will never change rather it will just return a new string .

let fr1 = "Rohan"
// console.log(fr1.replace("R","M")) // Strings are immutable .
// console.log(fr1)

// for(let i=0; i<fr1.length; i++){
//     console.log(fr1[i])
// }

// for (let i in fr1){
//     console.log(fri[i])
// }

fr1[0] = "T" // Strings are immutable .
console.log(fr1)