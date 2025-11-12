// Using Loops with Arrays in JavaScript .

let num = [3,54,1,2,4];

/*
for(let i=0; i<num.length; i++){
    console.log(num[i])
}
*/

/*
num.forEach((element)=>{
    console.log(element*element)
})
*/

// If we have array collection then we can not use forEach loop there. We have to use Array.from() there . We will get array collection when we will work with DOM .

// Array.from()
// Array.from() is used to create an array from any other object .

/*
let arr = Array.from("Harry")
console.log(arr)
*/

// for of 
/*
for(let item of num){
    console.log(item)
}
*/

// for in 
for(let i in num){
    console.log(num[i])
}
