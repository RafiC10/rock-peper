const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const playerScoreText = document.getElementById("playerScore");
const computerScoreText = document.getElementById("computerScore");
const resultText = document.getElementById("resultText");

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        playerScore++;
        playerScoreText.textContent = playerScore;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        computerScoreText.textContent = computerScore;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function game(e) {
    const playerSelection = e.target.textContent;
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    resultText.textContent = result;
}

rockBtn.addEventListener("click", game);
paperBtn.addEventListener("click", game);
scissorsBtn.addEventListener("click", game);
