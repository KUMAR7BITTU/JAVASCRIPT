// Map, Filter, Reduce in javaScript 

// Array map method

/*
1, map() creates a new array from calling a function for every array element.

2, map() does not execute the function for empty elements.

3, map() does not change the original array.
*/

let arr = [10,20,30];

/* let a = arr.map((value) => {
    console.log(value)
    return value + 1;
})
console.log(a); */



/* function mysquare(value){
    return value*value;
}
let b = arr.map(mysquare)
console.log(b) */


/* 
let c = arr.map((value) =>{
    return value + 1;
})
console.log(c)
*/

/* const person = [
    {first_name : "Bittu", second_name : "Kumar"},
    {first_name : "Anil", second_name : "Yadav"},
    {first_name : "Lokesh", second_name : "Chauhan"}
]
let d = person.map((item) =>{
    return [item.first_name,item.second_name].join(" ");
})
console.log(d) 
*/

/* 
let name = ["Bittu","Anil","Lokesh"]
console.log(name.join(" "))
console.log(typeof name.join(" ")) 
*/

/* let new_arr = arr.map((Element,index,arr)=>{
    console.log(Element,index,arr);
    return Element + index;
})
console.log(new_arr); */

// Array filter method

// filters an array with values that passes a test and create a new array .

let arr2 = [50,51,52,53,54,55,56,57,58,59]
let new_arr2 = arr2.filter((element)=>{
    return element<56;
})
console.log(new_arr2)
console.log(arr2)

// Array reduce method 

// Reduces an array to a single value 

let arr3 = [1,2,3,4,5,6,7,8,9,10]

let result = arr3.reduce((h1,h2) =>{
    return h1 + h2;
})
console.log(result);