console.log(console);
console.error("Hello, this is an error");
console.assert(5>53);
console.assert(555>21);
console.assert

// If we write any false statment in console.assert() then it will fail. If we write correct statement then it will don't show fail.

// console.clear()
obj = {a:10,b:20,c:30}
console.table(obj)

console.warn("Hey, please don't drink soda .")

console.info("info");
console.table(console);

console.time("p");
console.timeEnd("p");
console.assert("err" != false);
console.assert("err" == false);

console.time("forLoop");
for(let i=0; i<5; i++){
    console.log(233);
}
console.timeEnd("forLoop");

console.time("whileLoop");
let j = 0;
while(j<5){
    console.log(233);
    j++;
}
console.timeEnd("whileLoop");