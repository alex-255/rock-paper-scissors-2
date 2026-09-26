function getComputerChoice() {
  choices = ["rock", "paper", "scissors"];
  index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

// function chooseTheWinnerAndShowTheResult(humanScore, computerScore) {
//   if (humanScore === computerScore) {
//     console.log("It's a tie. No winner in 5 rounds.");
//   } else if (humanScore > computerScore) {
//     console.log("You are a winner of the game in 5 rounds.");
//   } else {
//     console.log("Computer wins the game in 5 rounds.");
//   }
// }

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  const resultsDiv = document.querySelector("#results");

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
      if (computerChoice === "rock") {
        resultsDiv.textContent = "It's a tie!";
      } else if (computerChoice === "paper") {
        computerScore++;
        resultsDiv.textContent = "Computer wins!";
      } else if (computerChoice === "scissors") {
        humanScore++;
        resultsDiv.textContent = "Player wins!";
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "paper") {
        resultsDiv.textContent = "It's a tie!";
      } else if (computerChoice === "rock") {
        humanScore++;
        resultsDiv.textContent = "Player wins!";
      } else if (computerChoice === "scissors") {
        computerScore++;
        resultsDiv.textContent = "Computer wins!";
      }
    } else if (humanChoice === "scissors") {
      if (computerChoice === "scissors") {
        resultsDiv.textContent = "It's a tie!";
      } else if (computerChoice === "rock") {
        computerScore++;
        resultsDiv.textContent = "Computer wins!";
      } else if (computerChoice === "paper") {
        humanScore++;
        resultsDiv.textContent = "Player wins!";
      }
    }
  }

  const userChoiceButtons = document.querySelectorAll(".userChoiceButton");
  userChoiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      playRound(button.id, getComputerChoice());
    });
  });

  // chooseTheWinnerAndShowTheResult(humanScore, computerScore);
}

playGame();
