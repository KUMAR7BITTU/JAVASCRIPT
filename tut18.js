// Some more javascript array method.

/*
let a = [1,2,3,4,5,6,7,8];
console.log(a.length);
let b = delete a[0]; // delete operator delete that particular element but the length remains the same .
console.log(a);
console.log(a.length);
console.log(b);
*/


/*
let num1 = [1,2,3,4,5];
let num2 = [11,12,13,14,15];
let num3 = [100,200,300,400,500];

let newArray = num1.concat(num2,num3)
console.log(newArray)
console.log(num1)
console.log(num2)
console.log(num3)
*/


// concat method return a new array. It doesn't make changes in the original array.


// sort method 
//sort method will modify the original array .
/*
let num4 = [38,2890878,100761,734,312,93,678,237,38,405];
num4.sort(); // It sort the array alphabetically . It will treat every element as a string .
console.log(num4)
*/

// let num5 = [21,29,23,26,28,22,25,30,27,24];
// console.log(num5);

//we can also pass a compare function to the sort function .
/*
let compare1 = (a,b) => {
    return a-b;
}
num5.sort(compare1);
console.log(num5);
*/

/*
let compare2 = (a,b) => {
    return b-a;
}
num5.sort(compare2);
console.log(num5);
*/

// reverse
// It will reverse the original array and make changes in the original array .
// num5.reverse()
// console.log(num5)

// splice
//array.splice(startIndex, deleteCount, item1, item2, ..., itemN);
/*
let num6 = [551,22,3,14,5,6,7,8,229];
let deleted_value = num6.splice(2,3,1021,1022,1023);  // It returns the deleted items and modifies the original array .
console.log(num6)
console.log(deleted_value)
console.log(typeof deleted_value)
*/

// slice
// slice out a piece from an array . It create a new array .
const num6 = [21,22,23,24,25,26,27,28,29];
const num7 = num6.slice(2);
const num8 = num6.slice(2,5);
console.log(num7)
console.log(num8)