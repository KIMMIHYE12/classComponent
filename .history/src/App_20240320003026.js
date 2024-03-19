import { useState } from "react";
import "./App.css";
import { Box } from "./component/Box";

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

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = remdomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const remdomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "Tie";
    } else if (user.name === "Scissors")
      return computer.name === "Paper" ? "Win" : "Lose";
    else if (user.name === "Rock")
      return computer.name === "Scissors" ? "Win" : "Lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "Win" : "Lose";
  };

  return (
    <div className='content'>
      <div className='game_screen'>
        <Box title='YOU' item={userSelect} result={result} />
        <Box title='COMPUTER' item={computerSelect} result={result} />
      </div>
      <div className='btn_wrap'>
        <button
          className='scissors'
          onClick={() => {
            play("scissors");
          }}
        >
          <div className='btn_items'>
            <img src='/images/btn_scissors.png' />
            <span>가위</span>
          </div>
        </button>
        <button
          className='rock'
          onClick={() => {
            play("rock");
          }}
        >
          <div className='btn_items'>
            <img src='/images/btn_rock.png' />
            <span>바위</span>
          </div>
        </button>
        <button
          className='paper'
          onClick={() => {
            play("paper");
          }}
        >
          <div className='btn_items'>
            <img src='/images/btn_paper.png' />
            <span>보</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default App;
