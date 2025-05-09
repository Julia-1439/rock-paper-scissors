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


/**

FUNCTION play a round of the game
    PASS IN computer's choice, human's choice

SET humanChoice to all lower case

IF computerChoice is the same as humanChoice THEN
	PRINT message saying tie
	PASS OUT nothing
ENDIF

SET computerWins to false

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
ELSE
    INCREMENT humanScore
ENDIF

PRINT message of the winner
PASS OUT nothing

ENDFUNCTION

 */