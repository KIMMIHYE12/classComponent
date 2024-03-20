import React, { Component } from "react";
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
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
    };

    play = (userChoice) => {
      let computerChoice = this.remdomChoice();
      this.setState({
        userSelect: choice[userChoice],
        computerSelect: computerChoice,
        result: this.judgement(choice[userChoice], computerChoice),
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
  }

  render() {
    return (
      <div className='content'>
        <div className='game_screen'>
          <BoxClass
            title='YOU'
            item={this.state.userSelect}
            result={this.state.result}
          />
          <BoxClass
            title='COMPUTER'
            item={this.state.computerSelect}
            result={this.state.result}
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
