// import Box from './components/Box';
import { useState } from "react";
import Scene1 from "./Scenes/Scene1";
import Scene2 from "./Scenes/Scene2";

function App() {
  const [mode, setMode] = useState(0)
  return (
    <div style={{width:'100%', height:'100%'}}>
      {
        mode === 1 ?
          <Scene1 /> :
        mode === 2 ?
          <Scene2 /> :
          (<><button onClick={() => setMode(1)}>
            시작하기1
          </button><button onClick={() => setMode(2)}>
            시작하기2
          </button></>)
      }
    </div>
  );
}

export default App;
