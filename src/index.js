import React from "react";
import ReactDOM from "react-dom";
//import "./style.css";

import "./styles.css";
import Metronome from "./metronome";
import RegisterServiceWorker from "./registerServiceWorker";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

ReactDOM.render(<Metronome />, document.getElementById("root"));
RegisterServiceWorker();
