import React, { Component } from "react";
import Circle from "../components/Circle";
import Title from "../components/Title";
import rock from "../assets/img/rock.png";
import paper from "../assets/img/paper.png";
import scissors from "../assets/img/scissors.png";

class PlayWithComputer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roundtype: "",
      round: 0,
      result: "",
      userScore: 0,
      compScore: 0,
      userChoice: "",
      compChoice: "",
      message: "",
    };

    this.getComputerChoice = this.getComputerChoice.bind(this);
  }

  //   componentDidMount = () => {
  //     this.game("rock");
  //   };

  getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  };

  userWin = (user, comp) => {
    console.log(user, comp);
    this.setState((prevState) => ({
      userScore: prevState.userScore + 1,
      round: prevState.round + 1,
      userChoice: user,
      compChoice: comp,
      message: "You Win!",
    }));
  };

  userLose = (user, comp) => {
    console.log(user, comp);
    this.setState((prevState) => ({
      compScore: prevState.compScore + 1,
      round: prevState.round + 1,
      userChoice: user,
      compChoice: comp,
      message: "You Lose!",
    }));
  };

  gameDraw = (user, comp) => {
    console.log(user, comp);
    this.setState((prevState) => ({
      round: prevState.round + 1,
      userChoice: user,
      compChoice: comp,
      message: "Draw!",
    }));
  };

  game = (userChoice) => {
    const computerChoice = this.getComputerChoice();
    const condition = userChoice + computerChoice;
    //   console.log("User choice => ", userChoice);
    //   console.log("Computer choice => ", ComputerChoice);

    switch (condition) {
      case "rockscissors":
      case "paperrock":
      case "scissorspaper":
        this.userWin(userChoice, computerChoice);
        break;
      case "rockpaper":
      case "paperscissors":
      case "scissorsrock":
        this.userLose(userChoice, computerChoice);
        break;
      case "rockrock":
      case "paperpaper":
      case "scissorsscissors":
        this.gameDraw(userChoice, computerChoice);
        break;
      default:
        console.log("oh god");
        break;
    }
  };

  render() {
    const { userChoice, compChoice } = this.state;
    console.log(`this is user ${userChoice}`);
    console.log(`this is comp ${compChoice}`);
    return (
      <div>
        <Title />
        <div className="round mt-6">
          <h1>{`Round ${this.state.round}`}</h1>
        </div>

        <div className="board-game mt-2">
          <div class="score">
            <span id="user-score">{this.state.userScore}</span>:
            <span id="computer-score">{this.state.compScore}</span>
          </div>
          <div className="choice mt-1">
            <div class="label user-label">
              <p>You</p>
              <Circle />
            </div>
            <div className="versus">VS</div>
            <div class="label computer-label">
              <p>Computer</p>
              <Circle />
            </div>
          </div>
          <div className="result">
            <img
              src={
                userChoice === "paper"
                  ? paper
                  : userChoice === "rock"
                  ? rock
                  : userChoice === "scissors"
                  ? scissors
                  : ""
              }
              alt=""
              className="userResult label"
            />
            <img
              src={
                compChoice === "paper"
                  ? paper
                  : compChoice === "rock"
                  ? rock
                  : compChoice === "scissors"
                  ? scissors
                  : ""
              }
              alt=""
              className="compResult label"
            />
          </div>
          <div className="score mt-7">
            <h1>{this.state.message}</h1>
          </div>
        </div>

        <div className="choices">
          <p>Choose your choice!</p>
          <div className="paper choicee">
            <img src={paper} alt="" onClick={() => this.game("paper")} />
          </div>
          <div className="rock choicee">
            <img src={rock} alt="" onClick={() => this.game("rock")} />
          </div>
          <div className="scissors choicee">
            <img src={scissors} alt="" onClick={() => this.game("scissors")} />
          </div>
        </div>
      </div>
    );
  }
}
export default PlayWithComputer;
