// $0.nextSibling // After selecting any element write this .
// $0.nextElementSibling 

// console.log(document.body.firstChild);
a = document.body.firstChild;

// console.log(a.nextSibling);
// console.log(a.parentNode); // If parentnode is text node or comment node, then also it will shown in parentNode .
// console.log(a.parentElement); // If parentElement is text node or comment node, then it will not be shown in parentElement (rather it will show null) .


// b = a.nextSibling;
// console.log(b);

// c = b.previousSibling;
// console.log(c);

// alert(document.documentElement.parentNode); // document
// alert(document.documentElement.parentElement); // null

console.log(a.firstChild); // "first line"
console.log(a.firstChild.nextSibling); // null

