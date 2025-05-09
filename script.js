let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const seed = Math.random();
    let computerChoice;
    if (seed < 0.33) {
        computerChoice = "rock";
    }
    else if (0.33 <= seed && seed < 0.66) {
        computerChoice = "paper";
    } 
    else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    const humanChoice = prompt("Hello User, what is your choice?");
    return humanChoice;
}
