// import Box from './components/Box';
import { useState } from "react";
import "./App.css";
import App2 from "./App2";



function App() {
  const [mode, setMode] = useState(0)
  return (
    <div style={{width:'100%', height:'100%'}}>
      { mode ? <App2/>
        : <button onClick={()=>setMode(1)}>
        시작하기
        </button>}
    </div>
  );
}

export default App;
