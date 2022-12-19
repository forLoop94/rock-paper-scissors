console.log("hello worl!");
function getComputerChoice() {
    let randomInteger = getRndInteger(1, 4);
    let computerChoice = (randomInteger === 1) ? "rock" : (randomInteger === 2) ? "paper" : (randomInteger === 3) ? "scissors" : "";
    return computerChoice;
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());