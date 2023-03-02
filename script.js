function getComputerChoice(min, max){
    let computerChoice = Math.floor(Math.random() * (max - min + 1) + min);
    return computerChoice;
}

getComputerChoice(1, 3);
let playerScore = 0;
let computerScore = 0;
//let playerPick = prompt("Choose your weapon");
//let playerChoice = playerPick.toLowerCase();
//console.log(playerChoice);
//playGame(getComputerChoice(1, 3), playerChoice);

function playGame(computerChoice, playerChoice){
    if (computerChoice == 1 && playerChoice == "rock"){
        console.log("Draw! Rock vs Rock");
    }
    if (computerChoice == 1 && playerChoice == "paper"){
        playerScore++;
        console.log("Player Wins! Paper beats Rock");
    }
    if (computerChoice == 1 && playerChoice == "scissor"){
        computerScore++;
        console.log("Computer Wins! Rock beats Scissor");
    }
    if (computerChoice == 2 && playerChoice == "rock"){
        computerScore++;
        console.log("Computer Wins! Paper beats Rock");
    }
    if (computerChoice == 2 && playerChoice == "paper"){
        console.log("Draw! Paper vs Paper");
    }
    if (computerChoice == 2 && playerChoice == "scissor"){
        playerScore++;
        console.log("Player wins! Scissor beats Paper");
    }
    if (computerChoice == 3 && playerChoice == "rock"){
        playerScore++;
        console.log("Player wins! Rock beats Scissor");
    }
    if (computerChoice == 3 && playerChoice == "paper"){
        computerScore++;
        console.log("Computer wins! Scissor beats Paper");
    }
    if (computerChoice == 3 && playerChoice == "scissor"){
        console.log("Draw! Scissor vs Scissor")
    }

}
for (let i = 0; i < 5; i++){
    let playerPick = prompt("Choose your weapon");
    let playerChoice = playerPick.toLowerCase();
    playGame(getComputerChoice(1, 3), playerChoice);1
}
if (playerScore > computerScore){
    console.log("Player Wins!");
}
if (playerScore < computerScore){
    console.log("Computer Wins!");
}
if (playerScore = computerScore){
    console.log("Draw!");
}
