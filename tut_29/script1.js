// Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive!

let user_input = prompt("Enter your age");
user_input = Number.parseInt(user_input);

let canDrive = (age) =>{
    return age >= 18 ? true : false;
}

if(canDrive(user_input)){
    alert("You can drive .")
}
else{
    alert("You can't drive .")
}