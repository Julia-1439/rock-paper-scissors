/**
 * 
 * @returns {string} computer's choice of "rock", "paper", or "scissors"
 */
function getComputerChoice() {
    const seed = Math.floor(Math.random() * 3);
    let computerChoice;
    switch (seed) {
        case 0: 
            computerChoice = "rock"; 
            break;
        case 1: 
            computerChoice = "paper";
            break;
        case 2: 
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

/**
 * Obtains user input for rock paper scissors. Note that no input validation is 
 * done for the scope of this project.
 * @returns {string} user input of "rock", "paper", or "scissors" not case-
 * sensitive. (eg, "rOcK" is allowed)
 */
function getHumanChoice() {
    return prompt("Hello User, what is your choice?");
}

/**
 * 
 * @returns {string} "Computer" or "Human" as winner, or "Tie" in event of a tie
 */
function determineWinnerOrTie(computerChoice, humanChoice){
    
    if (computerChoice === humanChoice){
        return "Tie";
    }

    let isComputerWinner;
    switch (computerChoice){
        case "rock":
            isComputerWinner = (humanChoice === "scissors");
            break;
        case "paper":
            isComputerWinner = (humanChoice === "rock");
            break;
        case "scissors":
            isComputerWinner = (humanChoice === "paper");
            break;
    }

    return (isComputerWinner) ? "Computer" : "Human";
}

/**
 * Play 5 games of rock paper scissors in the console
 * Some design choices deviated from TOP: 
 * 
 * Most notably, to increase function modularity: I decreased the scope of the 
 * playRound function (renamed to determineWinnerOrTie) to only determining the 
 * outcome of the game rather than doing that + outputting to console + keeping 
 * score altogether. These scopes were moved to playGame, and subsequently 
 * playRound was appropriately renamed to determineWinnerOrTie. 
 */
function playGame() {
    console.log("Welcome to Rock Paper Scissors! 5 sets will be played, and a \
        winner will be determined at the end. Good luck!");
    
    let computerScore = 0;
    let humanScore = 0;
    const numGames = 5; 

    for (let n = 0; n < numGames; ++n){
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice().toLowerCase();

        let winner = determineWinnerOrTie(computerChoice, humanChoice);
        if (winner === "Tie") {
            console.log(`It's a tie! You both chose ${computerChoice}.`);
        }
        else if (winner === "Computer") { 
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            ++computerScore;
        }
        else {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            ++humanScore;
        }
    }

    console.log(`The final score is: Computer ${computerScore} | ${humanScore} \
        User`)
    if (computerScore === humanScore) {
        console.log("It is a tie!");
    }
    else if (computerScore > humanScore) {
        console.log("The computer won!");
    }
    else {
        console.log("You won!");
    }
    console.log("Thank you for playing.");
}

playGame();