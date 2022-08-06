var playerScore = 0;
var computerScore = 0;
var choice = ["rock", "paper", "scissors"];
function playRound(playerSelection, computerSelection) {
//plays single round, returs a string that declares the winner  
    if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You lose! " + computerSelection.toUpperCase() + " beats " + playerSelection.toUpperCase() + "!";
    } else if (playerSelection === "paper" && computerSelection === "rock" || playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You win! " + playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase() + "!";;
    } else if (playerSelection === "paper" && computerSelection === "paper" || playerSelection === "rock" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "scissors")  {
        return "Tie!";
    } 
}


function getComputerChoice(choice) {
    //returns random computer choice
    return choice[Math.floor(Math.random()*choice.length)];
}

function game() {
 // plays 5 round game, keeps score and reports a winner or loser at the end
    for (let i = 0; i < 5; i++ ) {
        console.count("Round");
        const computerSelection = getComputerChoice(choice);
        const playerSelection = prompt("Enter: Rock, Paper, or Scissors", "Your choice?").toLowerCase();
        console.log("Player: " + playerSelection, "Computer: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("Computer score: " + computerScore);
        console.log("Player score: " + playerScore);
    } if (computerScore > playerScore) {
        alert("Bad luck! You lost the game!")
    } else if (computerScore < playerScore) {
        alert("Congrats! You won the game!");
    } else alert("You tied!");
}
game();






