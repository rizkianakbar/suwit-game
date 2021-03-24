let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

const win = (user, computer) => {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  const userChoice = document.getElementById(user)
  result_p.innerHTML = `${user} vs ${computer}, you win!`;
  userChoice.classList.add("win");
  setTimeout(() => userChoice.classList.remove("win"), 300);
};

const lose = (user, computer) => {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  
  const userChoice = document.getElementById(user)
  result_p.innerHTML = `${user} vs ${computer}, computer win!`;
  userChoice.classList.add("lose");
  setTimeout(() => userChoice.classList.remove("lose"), 300);
};

const draw = (user) => {
  const userChoice = document.getElementById(user)
  result_p.innerHTML = "Draw";
  userChoice.classList.add("draw");
  setTimeout(() => userChoice.classList.remove("draw"), 300);
};

const game = (userChoice) => {
  const computerChoice = getComputerChoice();
  //   console.log("User choice => ", userChoice);
  //   console.log("Computer choice => ", ComputerChoice);

  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice);
      break;
  }
};

const main = () => {
  rock_div.addEventListener("click", () => game("rock"));
  paper_div.addEventListener("click", () => game("paper"));
  scissors_div.addEventListener("click", () => game("scissors"));
};

main();
