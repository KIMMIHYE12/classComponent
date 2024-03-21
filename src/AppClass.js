import React, { Component } from "react";
import "./App.css";
import BoxClass from "./component/BoxClass";

const choice = {
  scissors: {
    name: "Scissors",
    img: "/images/scissors.png",
    describe: "가위 이미지",
  },
  rock: {
    name: "Rock",
    img: "/images/rock.png",
    describe: "바위 이미지",
  },
  paper: {
    name: "Paper",
    img: "/images/paper.png",
    describe: "보 이미지",
  },
};

export default class AppClass extends Component {
  constructor() {
    super();
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
      // computerScore: 0,
      // userScore: 0,
    };
  }

  play = (userChoice) => {
    let computerChoice = this.remdomChoice();
    // let computerScore = this.state.computerScore;
    // let userScore = this.state.userScore;
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice),
      // userScore: this.setUserScore(
      //   choice[userChoice],
      //   computerChoice,
      //   userScore
      // ),
      // computerScore: computerScore,
    });
  };

  remdomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "Tie";
    } else if (user.name === "Scissors")
      return computer.name === "Paper" ? "Win" : "Lose";
    else if (user.name === "Rock")
      return computer.name === "Scissors" ? "Win" : "Lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "Win" : "Lose";
  };

  // setUserScore = (user, computer, score) => {
  //   if (user.name === "Scissors" && computer.name === "Papier") {
  //     return score + 1;
  //   } else if (user.name === "Rock" && computer.name === "Scissor") {
  //     return score + 1;
  //   } else if (user.name === "Paper" && computer.name === "Rock")
  //     return score + 1;
  // };

  // setComputerScore = (user, computer) => {
  //   if (computer.name === "Scissors" && user.name === "Papier") {
  //     return this.computerScore + 1;
  //   } else if (computer.name === "Rock" && user.name === "Scissor") {
  //     return this.computerScore + 1;
  //   } else if (computer.name === "Paper" && user.name === "Rock")
  //     return this.computerScore + 1;
  // };

  render() {
    return (
      <div className='content'>
        <img
          src='/images/neonsign.png'
          alt='리액트 랜드 네온사인 간판'
          className='neonsign'
        />
        <div className='game_screen'>
          <BoxClass
            title='YOU'
            item={this.state.userSelect}
            result={this.state.result}
            score={this.state.userScore}
          />
          <BoxClass
            title='COMPUTER'
            item={this.state.computerSelect}
            result={this.state.result}
            score={this.state.computerScore}
          />
        </div>
        <div className='btn_wrap'>
          <button
            className='scissors'
            onClick={() => {
              this.play("scissors");
            }}
          >
            <div className='btn_items'>
              <img src='/images/btn_scissors.png' alt='가위 이미지' />
              <span>가위</span>
            </div>
          </button>
          <button
            className='rock'
            onClick={() => {
              this.play("rock");
            }}
          >
            <div className='btn_items'>
              <img src='/images/btn_rock.png' alt='바위 이미지' />
              <span>바위</span>
            </div>
          </button>
          <button
            className='paper'
            onClick={() => {
              this.play("paper");
            }}
          >
            <div className='btn_items'>
              <img src='/images/btn_paper.png' alt='보 이미지' />
              <span>보</span>
            </div>
          </button>
        </div>
      </div>
    );
  }
}
