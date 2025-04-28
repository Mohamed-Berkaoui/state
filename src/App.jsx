import { useState } from "react";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  const [state, setState] = useState("");
console.log(state)
  return (
    <>
      <Navbar setState={setState} />
      <Home state={state} />
    </>
  );
}

export default App;
