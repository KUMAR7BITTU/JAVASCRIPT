// In the previous question, use console.error to log the error if the age entered is negative .

let testAgain = true;

while (testAgain) {
    let userInput = prompt("Enter your age");
    userInput = Number.parseInt(userInput);

    if (userInput < 0) {
        console.error("Age can not be negative .");
        break;
    }
    else {
        if (canDrive(userInput)) {
            alert("Yes you can drive");
        }
        else {
            alert("No, you can not drive");
        }

        testAgain = confirm("Do you want to see the prompt again ?");

    }

}