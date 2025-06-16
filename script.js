let computerScore = 0;
let humanScore = 0;
const MAX_POINTS = 5; 

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

function playRound(humanChoice){
    const computerChoice = getComputerChoice();
    let winner; 

    // Determine winner of the game: "Tie", "Computer", "Human"
    switch (computerChoice){
        case humanChoice: 
            winner = "Tie";
            break;
        case "rock":
            winner = (humanChoice === "scissors") ? "Computer" : "Human";
            break;
        case "paper":
            winner = (humanChoice === "rock") ? "Computer" : "Human";
            break;
        case "scissors":
            winner = (humanChoice === "paper") ? "Computer" : "Human";
            break;
    }

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

/**
 * Only is called when one of computerScore or humanScore reaches 5
 * Assumptions: computerScore is not equal to humanScore once called
 */
function printFinalResults() {
    console.log(
        `The final score is: Computer ${computerScore} | ${humanScore} User`)
    if (computerScore > humanScore) {
        console.log("The computer won!");
    }
    else {
        console.log("You won!");
    }
    console.log("Thank you for playing.");
}

console.log("Welcome to Rock Paper Scissors! 5 sets will be played, and a \
    winner will be determined at the end. Good luck!");

const choiceButtons = document.querySelectorAll("#choices-container > button")
choiceButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const humanChoice = button.textContent;
        playRound(humanChoice);
        if(Math.max(computerScore, humanScore) === MAX_POINTS) {
            printFinalResults();
        }
    })
})





