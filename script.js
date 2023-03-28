function getComputerChoice(min, max){
    let computerChoice = Math.floor(Math.random() * (max - min + 1) + min);
    return computerChoice;
}

getComputerChoice(1, 3);
let playerScore = 0;
let computerScore = 0;
let playerPick = '';
let playerChoice = '';
//let playerPick = prompt("Choose your weapon");
//let playerChoice = playerPick.toLowerCase();
//console.log(playerChoice);
//playGame(getComputerChoice(1, 3), playerChoice);

function playGame(computerChoice, playerChoice){
    if (computerChoice == 1 && playerChoice == "rock"){
        //console.log("Draw! Rock vs Rock");
        result.textContent = 'Draw! Rock vs Rock';
    }
    if (computerChoice == 1 && playerChoice == "paper"){
        playerScore++;
        //console.log("Player Wins! Paper beats Rock");
        result.textContent = 'Player gets point! Paper beats Rock';
    }
    if (computerChoice == 1 && playerChoice == "scissor"){
        computerScore++;
        //console.log("Computer Wins! Rock beats Scissor");
        result.textContent = 'Computer gets point! Rock beats Scissor';
    }
    if (computerChoice == 2 && playerChoice == "rock"){
        computerScore++;
        //console.log("Computer Wins! Paper beats Rock");
        result.textContent = 'Computer gets point! Paper beats Rock';
    }
    if (computerChoice == 2 && playerChoice == "paper"){
        //console.log("Draw! Paper vs Paper");
        result.textContent = 'Draw! Paper vs Paper';
    }
    if (computerChoice == 2 && playerChoice == "scissor"){
        playerScore++;
        //console.log("Player wins! Scissor beats Paper");
        result.textContent = 'Player gets point! Scissor beats Paper';
    }
    if (computerChoice == 3 && playerChoice == "rock"){
        playerScore++;
        //console.log("Player wins! Rock beats Scissor");
        result.textContent = 'Player gets point! Rock beats Scissor';
    }
    if (computerChoice == 3 && playerChoice == "paper"){
        computerScore++;
        //console.log("Computer wins! Scissor beats Paper");
        result.textContent = 'Computer gets point! Scissor beats Paper';
    }
    if (computerChoice == 3 && playerChoice == "scissor"){
        //console.log("Draw! Scissor vs Scissor");
        result.textContent = 'Draw! Scissor vs Scissor';
    }
    points.textContent = `Player ${playerScore}  Computer ${computerScore}`
    if (playerScore === 5){
        endResult.textContent = "Player Wins !";
        playerScore = 0;
        computerScore = 0;
    }else if (computerScore === 5){
        endResult.textContent = "Computer Wins !";
        playerScore = 0;
        computerScore = 0;
    }else {
        endResult.textContent = '';
    }

}
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerChoice = "rock";
    playGame(getComputerChoice(1, 3), playerChoice);
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerChoice = "paper";
    playGame(getComputerChoice(1, 3), playerChoice);
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerChoice = "scissor";
    playGame(getComputerChoice(1, 3), playerChoice);
});

const result = document.querySelector('.result');
const points = document.querySelector('.points');
const endResult = document.querySelector('.endResult');




