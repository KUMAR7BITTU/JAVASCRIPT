console.log(document.body.firstChild);

console.log(document.body.lastChild);

console.log(document.body.childNodes); // This is a node list .

// To convert it back to array :-
let array = Array.from(document.body.childNodes);

console.log(array);