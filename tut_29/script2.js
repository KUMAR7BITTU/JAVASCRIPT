// In Question 1 use confirm to ask the user if he wants to see the prompt again .

let testAgain = true;

let canDrive = (age) =>{
    return age >= 18 ? true : false;
}

while(testAgain)
{
    let userInput = prompt("Enter your age ?")
    userInput = Number.parseInt(userInput);

    if(canDrive(userInput)){
        alert("You can drive .");
    }
    else
    {
        alert("You can't drive .")
    }
    
    testAgain = confirm("Do you want to see the prompt again ?");
}