// Write a program to change the url to google.com (Redirection) if user enters a number greater than 4 .

let testAgain = true;

let canDrive = (age) => {
    return age > 18 ? true : false;
}

while (testAgain) {

    let userInput = prompt("Enter your age ?");
    userInput = Number.parseInt(userInput);

    if (userInput < 0) {
        console.error("Age can not be negative .")
        break;
    }
    else if (userInput > 4) {
        location.href = "https://google.com";
        break;
    }
    else {
        if (canDrive(userInput)) {
            alert("Yes, you can  drive .");
        }
        else {
            alert("No, you can not drive .")
        }

        testAgain = confirm("Do you want to see the prompt again ?")
    }

}