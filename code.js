let playerPoints = 0;
let computerPoints = 0;
let message = "";
const choice = ["Paper", "Rock", "Scissors"];
function computerPlay() {
  compChoice = choice;
  compChoice = compChoice[Math.floor(Math.random() * choice.length)];
  //console.log(compChoice);
  return compChoice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

  if (playerSelection === computerSelection) {
    message =
      "It is a draw: " +
      playerSelection +
      " are the same as " +
      computerSelection;
    //console.log(message)
    playerPoints++;
    computerPoints++;
  } else if (
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    message = "You won: " + playerSelection + " beat " + computerSelection;
    //console.log(message);
    playerPoints++;
  } else if (
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    message = "You lost: " + computerSelection + " beat " + playerSelection;
    //console.log(message);
    computerPoints++;
  } else {
    message = alert("There is no time, GIVE ME YOUR WEAPON!");
  }
  return message, playerPoints, computerPoints;
}

//console.log(playRound(playerSelection,computerSelection));

function game() {
  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    const playerSelection = prompt("Give me your weapon!", "");
    playRound(playerSelection, computerSelection);
    console.log(message);
    console.log(
      "Your points: " +
        playerPoints +
        " // " +
        " Computer points: " +
        computerPoints
    );
  }
  let scores =
    playerPoints > computerPoints
      ? "Congratulation, you WIN"
      : "Sorry, you LOSE";
  console.log(scores);
}

game();
