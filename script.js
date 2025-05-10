/**
 * 
 * @returns {string} computer's choice of "rock", "paper", or "scissors"
 */
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

/**
 * Obtains user input for rock paper scissors. Note that no input validation is done for the scope of this project
 * @returns {string} user input
 */
function getHumanChoice() {
    return prompt("Hello User, what is your choice?");
}

/**
 * 
 * @param {string} computerChoice one of "rock", "paper", or "scissors"
 * @param {string} humanChoice one of "rock", "paper", or "scissors"
 * @returns {string} the winner: either "Computer" or "Human", or "Tie" in event of a tie
 */
function determineWinner(computerChoice, humanChoice){
    
    // Terminate early in case of a tie
    if (computerChoice === humanChoice){
        return "Tie";
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

    // Print appropriate message and return the winner
    if (computerWins) {
        return "Computer";
    }
    else {
        return "Human";
    }
}

/**
 * 
 */
function playGame() {
    console.log("Welcome to Rock Paper Scissors! 5 sets will be played, and a winner will be determined at the end. Good luck!");
    
    let computerScore = 0;
    let humanScore = 0;

    for (let numGames = 0; numGames < 5; ++numGames){
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice().toLowerCase();

        let winner = determineWinner(computerChoice, humanChoice);
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

    // Print outcome of set of games
    console.log(`The final score is: Computer ${computerScore} | ${humanScore} User`)
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


/**
FUNCTION play 5 rounds of rock paper scissors
PASS IN nothing
PASSES OUT nothing

PRINT a welcome message announcing a best 3 out of 5 set to be played

SET computerScore to 0
SET humanScore to 0
SET numGames to 0

FOR numGames 0 to 4 DO
    SET humanChoice to user input by CALLING getHumanChoice
    SET computerChoice by CALLING getComputerChoice
    SET gameOutcome by CALLING determineWinner
    IF determineWinner is "Tie" THEN
        CONTINUE
    ELSE IF determineWinner is "Computer" THEN
        INCREMENT computerScore
    ELSE 
        INCREMENT humanScore
    ENDIF
ENDFOR

IF computerScore is the same as humanScore THEN
    PRINT message indicating a tie
ELSE IF computerScore > humanScore THEN
    PRINT message indicating computer won
ELSE
    PRINT message indicating human won
ENDIF

 */