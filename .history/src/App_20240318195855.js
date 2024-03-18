import "./App.css";
import { Box } from "./component/Box";

function App() {
  return (
    <>
      <div>
        <Box />
        <Box />
      </div>
      <div>
        <button>가위</button>
        <button>바위</button>
        <button>보</button>
      </div>
    </>
  );
}

export default App;
