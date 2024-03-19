import { object } from "prop-types";
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
    judgement(choice[userChoice], computerChoice);
  };

  const remdomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  const judgement = () => {};

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
          가위
        </button>
        <button
          className='rock'
          onClick={() => {
            play("rock");
          }}
        >
          바위
        </button>
        <button
          className='paper'
          onClick={() => {
            play("paper");
          }}
        >
          보
        </button>
      </div>
    </div>
  );
}

export default App;
