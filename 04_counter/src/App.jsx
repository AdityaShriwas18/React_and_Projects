import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  const addValue = ()=>{
    if (counter < 5 && counter >=0) {
      counter++;
      setCounter(counter);
    }
  }
  const removeValue = ()=>{
    if (counter <= 0) {
      counter = 0;
    }else{
      counter--;
      setCounter(counter);
    }
  }

  // let counter = 15;

  return (
    <>
     <h1>Aditya aur React</h1>
     <h2>Counter is {counter}</h2>

     <button
    onClick={addValue}
     >Add value {counter}</button>
     <br />
     <button onClick={removeValue}>Remove value {counter}</button>
     <p>counter updated to: {counter}</p>
    </>
  )
}

export default App
