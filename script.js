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
    return prompt("Hello User, what is your choice?");
}

function playRound(computerChoice, humanChoice){
    humanChoice = humanChoice.toLowerCase();
    
    // Terminate early in case of a tie
    if (computerChoice === humanChoice){
        console.log(`It's a tie! You both chose ${computerChoice}.`);
        return;
    }

    // Determine winner
    let computerWins;
    switch (computerChoice){
        case "rock":
            computerWins = humanChoice === "scissors";
            break;
        case "paper":
            computerWins = humanChoice === "rock";
            break;
        case "scissors":
            computerWins = humanChoice === "paper";
            break;
    }

    // Increment appropriate score and Print message
    if (computerWins) {
        ++computerScore;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
    else {
        ++humanScore;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }

    return;
}