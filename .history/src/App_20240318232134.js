import "./App.css";
import { Box } from "./component/Box";

const choice = {
  scissor: {
    name: "Scissor",
    img: "/images/rock.png",
    describe: "가위이미지",
  },
  rock: {},
  paper: {},
};

function App() {
  return (
    <div className='content'>
      <div className='game_screen'>
        <Box title='YOU' />
        <Box title='COMPUTER' />
      </div>
      <div className='btn_wrap'>
        <button className='scissor'>가위</button>
        <button className='rock'>바위</button>
        <button className='paper'>보</button>
      </div>
    </div>
  );
}

export default App;
