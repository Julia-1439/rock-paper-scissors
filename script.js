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