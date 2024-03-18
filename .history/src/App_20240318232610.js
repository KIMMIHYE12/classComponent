import "./App.css";
import { Box } from "./component/Box";

const choice = {
  scissor: {
    name: "Scissor",
    img: "/images/scissor.png",
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
  const play = () => {
    console.log("선택됨");
  };

  return (
    <div className='content'>
      <div className='game_screen'>
        <Box title='YOU' />
        <Box title='COMPUTER' />
      </div>
      <div className='btn_wrap'>
        <button className='scissor' onClick={play}>
          가위
        </button>
        <button className='rock' onClick={play}>
          바위
        </button>
        <button className='paper' onClick={play}>
          보
        </button>
      </div>
    </div>
  );
}

export default App;
