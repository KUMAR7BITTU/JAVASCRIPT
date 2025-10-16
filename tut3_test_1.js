/*var a = "harry";
console.log(a); // This will print harry
a = "bittu";
console.log(a);*/ // This will print bittu

/*var b = 28;
console.log(b); // This will print 28
{
    var b = 34; 
    console.log(b); // This will print 34
}
console.log(b);*/ // This will print 34 as var is function scoped or global scoped.

/*var d = true;
console.log(d); // This will print true
{
    d = false;
    console.log(d); // This will print false
}
console.log(d);*/ // This will print false

/*var f = 100;
console.log(f); // This will print 100 
var f = 200;
console.log(f);*/ // This will print 200 as we can re-declare a variable using var keyword.

/*let c = "kumar";
console.log(c); // This will print kumar
{
    let c = "sahab";
    console.log(c); // This will print sahab
}
console.log(c);*/ // This will print kumar as let keyword is block scoped.

/*let e = 80;
console.log(e); // This will print 80
{
    e = 100;
    console.log(e); // This will print 100
}
console.log(e);*/ // This will print 100 as let keyword is block scoped but we can update the value of variable declared using let keyword.

/*let g = 300;
console.log(g); // This will print 300
let g = 500;
console.log(g); */ // it will throw an error as we cannot re-declare a variable using let keyword.

const author = "kumar sahab";
console.log(author);  // This will print kumar sahab

//It will throw an error because we can't update constant variable .
/*author = "bittu kumar"; 
console.log(author);*/

// It will throw an error as we cannot re-declare a constant variable .
/*const author = "bittu sahab";
console.log(author);*/

// const arr ; // It will throw an error as we have to initialize a constant variable during declaration.

// Note :- Try not to use var keyword. Use let and const keyword as much as possible.