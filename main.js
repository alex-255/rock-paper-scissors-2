function getComputerChoice() {
  choices = ["rock", "paper", "scissors"];
  index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  const resultsDiv = document.querySelector("#results");
  const resultsDivParagraph = document.createElement("p");
  resultsDiv.appendChild(resultsDivParagraph);
  const resultsDivScore = document.createElement("p");
  resultsDiv.appendChild(resultsDivScore);

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
      if (computerChoice === "rock") {
        resultsDivParagraph.textContent = "It's a tie!";
      } else if (computerChoice === "paper") {
        computerScore++;
        resultsDivParagraph.textContent = "Computer wins!";
      } else if (computerChoice === "scissors") {
        humanScore++;
        resultsDivParagraph.textContent = "Player wins!";
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "paper") {
        resultsDivParagraph.textContent = "It's a tie!";
      } else if (computerChoice === "rock") {
        humanScore++;
        resultsDivParagraph.textContent = "Player wins!";
      } else if (computerChoice === "scissors") {
        computerScore++;
        resultsDivParagraph.textContent = "Computer wins!";
      }
    } else if (humanChoice === "scissors") {
      if (computerChoice === "scissors") {
        resultsDivParagraph.textContent = "It's a tie!";
      } else if (computerChoice === "rock") {
        computerScore++;
        resultsDivParagraph.textContent = "Computer wins!";
      } else if (computerChoice === "paper") {
        humanScore++;
        resultsDivParagraph.textContent = "Player wins!";
      }
    }

    if (humanScore === 5 || computerScore === 5) {
      chooseTheWinnerAndShowTheResult(humanScore, computerScore);
    } else if (humanScore < 5 && computerScore < 5) {
      resultsDivScore.textContent = `Player won ${humanScore} times. Computer won ${computerScore} times.`;
    }
  }

  const userChoiceButtons = document.querySelectorAll(".userChoiceButton");
  userChoiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      playRound(button.id, getComputerChoice());
    });
  });

  function chooseTheWinnerAndShowTheResult(humanScore, computerScore) {
    if (humanScore === computerScore) {
      resultsDivScore.textContent = "It's a tie. No winner in 5 rounds.";
    } else if (humanScore > computerScore) {
      resultsDivScore.textContent =
        "Congratulations! You are a winner of the game in 5 rounds.";
    } else {
      resultsDivScore.textContent =
        "Sorry! Computer wins the game in 5 rounds.";
    }
  }
}

playGame();
