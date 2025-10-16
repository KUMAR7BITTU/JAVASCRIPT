console.log("Javascript tutorial 3 :- var, let and const")

var a = 34;
var b = "harry";
var c = null;
var d = undefined;

// var is globally scoped .
{
    var b = "this";
    console.log(b); // this will change the value of b to 'this' as it has been declared in global scope.
}
console.log(b); // this will print 'this' as the value of b has been changed in the block above.

let e = "bittu kumar";

{
    let e = "kumar sahab";
    console.log(e);
}
console.log(e);

// var is globally scoped while let and const are block scoped .
// var can be updated and re-declared within it's scope .

// let can be updated but cannot be re-declared .

// const cannot be updated nor re-declared .
/*const author = "harry";
author = "bittu";*/ // it will throw an error as we cannot update a constant variable.
