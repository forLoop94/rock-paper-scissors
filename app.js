console.log("hello worl!");
function getComputerChoice() {
    let randomInteger = getRndInteger(1, 4);
    let computerChoice = (randomInteger === 1) ? "rock" : (randomInteger === 2) ? "paper" : (randomInteger === 3) ? "scissors" : "";
    console.log(computerChoice);
    return computerChoice;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function playOneRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection === "rock" && computerSelection === "paper") {
        result = "computer wins!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "you win!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "computer wins!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result = "you win!"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = "you win!"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "computer wins!"
    } else {
        result = "it's a draw guys!";
    }
    return result;
}

console.log(playOneRound("scissors", getComputerChoice()));
console.log(playOneRound("scissors", getComputerChoice()));
console.log(playOneRound("scissors", getComputerChoice()));
console.log(playOneRound("scissors", getComputerChoice()));
console.log(playOneRound("scissors", getComputerChoice()));