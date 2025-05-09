function getComputerChoice() {
    const seed = Math.random();
    let computerChoice;
    if (seed < 0.33) {
        computerChoice = "Rock";
    }
    else if (0.33 <= seed && seed < 0.66) {
        computerChoice = "Paper";
    } 
    else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    const userChoice = prompt("Hello User, what is your choice?");
    return userChoice;
}
