function getHumanChoice() {
  choice = prompt(
    "Enter your choice (1 for rock, 2 for paper, 3 for scissors):",
  );
  if (choice === "1") {
    return "rock";
  } else if (choice === "2") {
    return "paper";
  } else if (choice === "3") {
    return "scissors";
  }
}

function getComputerChoice() {
  choices = ["rock", "paper", "scissors"];
  index = Math.floor(Math.random() * 3);
  return choices[index];
}

function chooseTheWinnerAndShowTheResult(humanScore, computerScore) {
  if (humanScore === computerScore) {
    console.log("It's a tie. No winner in 5 rounds.");
  } else if (humanScore > computerScore) {
    console.log("You are a winner of the game in 5 rounds.");
  } else {
    console.log("Computer wins the game of 5 rounds.");
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
      if (computerChoice === "rock") {
        console.log("It's a tie!");
      } else if (computerChoice === "paper") {
        computerScore++;
        console.log("Computer wins!");
      } else if (computerChoice === "scissors") {
        humanScore++;
        console.log("Player wins!");
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "paper") {
        console.log("It's a tie!");
      } else if (computerChoice === "rock") {
        humanScore++;
        console.log("Player wins!");
      } else if (computerChoice === "scissors") {
        computerScore++;
        console.log("Computer wins!");
      }
    } else if (humanChoice === "scissors") {
      if (computerChoice === "scissors") {
        console.log("It's a tie!");
      } else if (computerChoice === "rock") {
        computerScore++;
        console.log("Computer wins!");
      } else if (computerChoice === "paper") {
        humanScore++;
        console.log("Player wins!");
      }
    }
  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  chooseTheWinnerAndShowTheResult(humanScore, computerScore);
}

playGame();
