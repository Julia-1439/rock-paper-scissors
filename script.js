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
    humanChoice = humanChoice.toLowerCase();
    
    // Terminate early in case of a tie
    if (computerChoice === humanChoice){
        console.log(`It's a tie! You both chose ${computerChoice}.`);
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
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return "Computer";
    }
    else {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return "Human";
    }
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