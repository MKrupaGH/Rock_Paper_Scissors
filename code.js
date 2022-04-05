let playerPoints = 0;
let computerPoints = 0;
let message = "";

let buttons = document.querySelectorAll(".btn");
let h3Text = document.querySelector("#display");
let h3points = document.querySelector("#points");
let h3result = document.querySelector("#result");
let btnRefresh = document.querySelector("#refresh");
let endScreen = document.querySelector(".endScreen");
const playerIcon = document.querySelector(".player-icon");
const compIcon = document.querySelector(".comp-icon");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    playerChoice = btn.value;
      if (playerChoice == "paper") playerIcon.textContent = "✋";
      else if (playerChoice == "rock") playerIcon.textContent = "✊";
      else if (playerChoice == "scissors") playerIcon.textContent = "✌";
      else playerIcon.textContent = "?";
    const randomComp = computerPlay();
    playRound(playerChoice, randomComp);
    h3Text.textContent = message;
    h3points.textContent =
      "Player points: " +
      playerPoints +
      " // " +
      " Computer points: " +
      computerPoints;
    if (playerPoints === 5) {
      hide();
      h3result.textContent = "You win 👏";
      reloadPage();
    } else if (computerPoints === 5) {
      hide();
      h3result.textContent = "You lost 😔";
      reloadPage();
    }
  });
});

function hide() {
  buttons.forEach((btn) => {
    btn.style.display = "none";
  });
}

function reloadPage() {
  endScreen.style.display = "block";
  btnRefresh.addEventListener(
    "click",
    window.location.reload.bind(window.location)
  );
}

const choice = ["Paper", "Rock", "Scissors"];
function computerPlay() {
  compChoice = choice;
  compChoice = compChoice[Math.floor(Math.random() * choice.length)];
  //console.log(compChoice);
  if (compChoice == "Paper") compIcon.textContent = "✋";
  else if (compChoice == "Rock") compIcon.textContent = "✊";
  else if (compChoice == "Scissors") compIcon.textContent = "✌";
  else compIcon.textContent = "?";
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

/*function game() {
  const computerSelection = computerPlay();
  const playerSelection = "rock";
  playRound(playerSelection, computerSelection);
  console.log(message);
  console.log(
    "Your points: " +
      playerPoints +
      " // " +
      " Computer points: " +
      computerPoints
  );
  let scores =
    playerPoints > computerPoints
      ? "Congratulation, you WIN"
      : "Sorry, you LOSE";
  console.log(scores);
}

game();
*/
