const MAX_SCORE = 5; 

let computerScore = 0;
let humanScore = 0;

const currRoundResult = document.querySelector("#curr-round-result");
const runningScore = document.querySelector("#running-score");
const finalResults = document.querySelector("#final-results");

const choiceButtons = document.querySelectorAll("#choices-container > button")
choiceButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const humanChoice = button.textContent;
        playRound(humanChoice);
        if(Math.max(computerScore, humanScore) === MAX_SCORE) {
            printFinalResults();
        }
    })
})


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

function playRound(humanChoice){
    let winner; 

    // Determine winner of the game: "Tie", "Computer", "Human"
    const computerChoice = getComputerChoice();
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
        currRoundResult.textContent = `It's a tie! You both chose ${computerChoice}.`;
    }
    else if (winner === "Computer") { 
        currRoundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        ++computerScore;
    }
    else {
        currRoundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        ++humanScore;
    }

    runningScore.textContent = `The current score is: Computer ${computerScore}\
 | ${humanScore} User`;
}

/**
 * Only called when one of computerScore or humanScore reaches 5
 */
function printFinalResults() {
    const messagesContainer = document.querySelector("#messages-container");
    messagesContainer.removeChild(currRoundResult);
    messagesContainer.removeChild(runningScore);
    finalResults.textContent = [
        `The final score is: Computer ${computerScore} | ${humanScore} User`,
        (computerScore > humanScore) ? "The computer won!" : "You won!",
        "Thank you for playing."
    ].join("\n"); 
}



