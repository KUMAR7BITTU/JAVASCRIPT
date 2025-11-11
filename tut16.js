// Introduction to Arrays

let marks_class_12 = [91,80,100,89,null,false,"Not Present"];
// console.log(marks_class_12);
// console.log(marks_class_12[0]);
// console.log(marks_class_12[1]);
// console.log(marks_class_12[2]);
// console.log(marks_class_12[3]);
// console.log(marks_class_12[4]);
// console.log(marks_class_12[5]);
// console.log(marks_class_12[6]);
// console.log(marks_class_12[7]); // This will print undefined
// console.log("The length of marks_class_12 is",marks_class_12.length);

// Adding a new value in the array .
// marks_class_12[7] = 31;
// console.log(marks_class_12)

// updating an existing value in the array .
// marks_class_12[0] = 97;
// console.log(marks_class_12);

// Note :- Array are mutable and type of array is object .
// console.log(typeof marks_class_12);

// printing all the elements of an Array .
/*
for(let i=0; i<marks_class_12.length; i++){
    console.log(marks_class_12[i]);
}
*/

for(let i in marks_class_12){
    console.log(i);
}

for(let item of marks_class_12){
    console.log(item);
}