function getComputerChoice(min, max){
    let computerChoice = Math.floor(Math.random() * (max - min + 1) + min);
    return computerChoice;
}

getComputerChoice(1, 3);
let playerPick = prompt("Choose your weapon");
let playerChoice = playerPick.toLowerCase();
//console.log(playerChoice);
playGame(getComputerChoice(1, 3), playerChoice);

function playGame(computerChoice, playerChoice){
    if (computerChoice == 1 && playerChoice == "rock"){
        console.log("Draw! Rock vs Rock");
    }
    if (computerChoice == 1 && playerChoice == "paper"){
        console.log("Player Wins! Paper beats Rock");
    }
    if (computerChoice == 1 && playerChoice == "scissor"){
        console.log("Computer Wins! Rock beats Scissor");
    }
    if (computerChoice == 2 && playerChoice == "rock"){
        console.log("Computer Wins! Paper beats Rock");
    }
    if (computerChoice == 2 && playerChoice == "paper"){
        console.log("Draw! Paer vs Paper");
    }
    if (computerChoice == 2 && playerChoice == "scissor"){
        console.log("Player wins! Scissor beats Paper");
    }
    if (computerChoice == 3 && playerChoice == "rock"){
        console.log("Player wins! Rock beats Scissor");
    }
    if (computerChoice == 3 && playerChoice == "paper"){
        console.log("Computer wins! Scissor beats Paper");
    }
    if (computerChoice == 3 && playerChoice == "scissor"){
        console.log("Draw! Scissor vs Scissor")
    }

}