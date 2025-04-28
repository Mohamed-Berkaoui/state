import { useState } from 'react'
import './App.css'
import Home from './Home'
import Navbar from './Navbar'


function App() {
  const [state,setState]=useState("dfgdfgg")
 
  return (
    <>
 <Navbar setState={setState}/>
 <Home state={state}/>
    </>
  )
}

export default App
