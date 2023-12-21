import { useState } from 'react'

import './App.css'

function App() {

 let [counter,setCounter]=useState(0);



  const addValue=()=>{
setCounter((prevCounter)=>prevCounter+1);
setCounter((prevCounter)=>prevCounter+1);

  }

 const removeValue=()=>{
  
  setCounter(counter-1);
 }
  return (
    <>
      <h1>React 02 project {counter}</h1>
      <button
      onClick={addValue}
      >Add value</button>{" "}
      <button onClick={removeValue} >Remove value</button>
      <p>Footer {counter}</p>
    </>
  )
}

export default App
