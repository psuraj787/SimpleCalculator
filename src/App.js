import { useState } from "react";
import "./App.css";
import { DisplayScreen, Numpad } from "./components";

function App() {
  const [displayNum, setDisplayNum] = useState("");

  return (
    <div className="app-container">
      <DisplayScreen trace={displayNum} />
      <Numpad onGetDisplayNum={setDisplayNum} />
    </div>
  );
}

export default App;
