const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  //Start the game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //Play match

  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    //Computer Options

    const computerOptions = ["rock", "paper", "scissors"];
    options.forEach((option) => {
      option.addEventListener("click", function () {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        //Here is where we call compare hands
        compareHands(this.textContent, computerChoice);

        //Update images
        playerHand.src = `./assets/${this.textContent}.png`;
        computerHand.src = `./assets/${computerChoice}.png`;
      });
    });
  };

  const updateScore = () => {
    const pScore = document.querySelector(".player-score p");
    const cScore = document.querySelector(".computer-score p");
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    // Check for rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player wins";
        playerScore++;
        return;
      } else {
        winner.textContent = "Computer wins";
        computerScore++;
        return;
      }
    }

    // Check for paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer wins";
        computerScore++;
        return;
      } else {
        winner.textContent = "Player wins";
        playerScore++;
        return;
      }
    }
    //Check for scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer wins";
        computerScore++;
        return;
      } else {
        winner.textContent = "Player wins";
        playerScore++;
        return;
      }
    }
  };
  //call all the innerfunction
  startGame();
  playMatch();
};
//start the game function

game();
