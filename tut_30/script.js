// Excercise - 2 :- Snake Water Gun

// Use javascript to create a game of snake water & gun . The game should ask you to enter S, W or G . The computer should be able to randomly generate S, W or G and declare win or loss using alert . Use confirm and prompt wherever required .

const computerInputfunction = () =>{
    const choices = ['S','W','G'];
    const index = Math.floor(Math.random()*choices.length);
    return choices[index];
} 

let chances = 3;
let Again = true;

while(chances && Again){
    let userInput = prompt("Enter your input");
    let computerInput = computerInputfunction();

    if((userInput == 'S' && computerInput == 'W') || (userInput == 'W' && computerInput == 'G' || userInput == 'G' && computerInput == 'S')){
      alert("You Won ."+ " computer input is " + computerInput + " and your input is " + userInput);
    }
    else if((userInput == 'W' && computerInput == 'S') || (userInput == 'G' && computerInput == 'W' || userInput == 'S' && computerInput == 'G'))
    {
       alert("Computer Won ." + " computer input is " + computerInput + " and your input is " + userInput);
    }
    else if((userInput == 'S' && computerInput == 'S') || (userInput == 'W' && computerInput == 'W' || userInput == 'G' && computerInput == 'G'))
    {
       alert("Tied ." + " computer input is " + computerInput + " and your input is " + userInput)
    }
    else
    {
        alert("Enter a valid input .")
    }
    chances -= 1;

    Again = confirm("Do you want to play again ?");

    if(!chances && Again)
    {
        alert("You have already crossed the maximum number of chances .")
    }
}