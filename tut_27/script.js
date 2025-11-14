// alert("Hello, your script works ?")
alert("Enter the value of a")
let a = prompt("Enter a here :- ","457");
// prompt always return a string . prompt's second argument is the default argument .
a = Number.parseInt(a);
alert(a + " type of a is " + (typeof a));
// document.write(a);

let write = confirm("Do you want to write ?");
if(write){
    document.write(a);
}
else{
    document.write("Please allow me to write .")
}


// alert :- Used to invoke a mini window with a msg .
// alert("hello")

// prompt :- Used to take user input as string .
// inp = prompt("Hi","No")

// confirm :- Shows a message and waits for the user to press ok or cancel. Returns true for ok and false for cancel .