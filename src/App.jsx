import { useState } from "react";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  const [state, setState] = useState({title:"",category:"all"});
console.log(state)
  return (
    <>
      <Navbar setState={setState} state={state}/>
      <Home state={state} />
    </>
  );
}

export default App;
