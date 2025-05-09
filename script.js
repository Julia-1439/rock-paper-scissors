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


/**

FUNCTION play a round of the game
    PASS IN computer's choice, human's choice

SET humanChoice to all lower case

IF computerChoice is the same as humanChoice THEN
	PRINT message saying tie
	PASS OUT nothing
ENDIF

DECLARE computerWins as variable

CASE computerChoice OF
    computerChoice is "rock": 
        SET computerWins to whether humanChoice is "scissors" 
        BREAK
    computerChoice is "paper": 
        SET computerWins to whether humanChoice is "rock"
        BREAK
    computerChoice is "scissors": 
        SET computerWins to whether humanChoice is "paper"
        BREAK
ENDCASE

IF computerWins THEN
    INCREMENT computerScore
    PRINT message saying you lost
ELSE
    INCREMENT humanScore
    PRINT message saying you won
ENDIF


PASS OUT nothing

ENDFUNCTION

 */