import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {
  const [calc, setCounter]=useState(10);

    const plus=()=>{
      setCounter(calc+1)
    }
    const minus=()=>{
      setCounter(calc-1)
    }
    const multiple=()=>{
      setCounter(calc*2)
    }
    const divide=()=>{
      setCounter(calc/3)
    }        




  return (
    <div>
      <h1>Calculator:{calc}</h1>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={multiple}>*2</button>
      <button onClick={divide}>/3</button>    
    </div>


  );
}

export default App;
