import { useState } from "react";
import "./App.css";
import { DisplayScreen, Numpad } from "./components";

function App() {
  const [displayNum, setDisplayNum] = useState("");

  return (
    <div>
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Simple Calculator
        </a>
      </nav>
      </div>
      <div className="app-container">
        <DisplayScreen trace={displayNum} />
        <Numpad onGetDisplayNum={setDisplayNum} />
      </div>
    </div>
  );
}

export default App;
