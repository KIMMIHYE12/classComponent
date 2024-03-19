import { useState } from "react";
import "./App.css";
import { Box } from "./component/Box";

const choice = {
  scissor: {
    name: "Scissors",
    img: "/images/scissors.png",
    describe: "가위이미지",
  },
  rock: {
    name: "Rock",
    img: "/images/rock.png",
    describe: "바위이미지",
  },
  paper: {
    name: "Paper",
    img: "/images/paper.png",
    describe: "보이미지",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };

  return (
    <div className='content'>
      <div className='game_screen'>
        <Box title='YOU' item={userSelect} />
        <Box title='COMPUTER' />
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
