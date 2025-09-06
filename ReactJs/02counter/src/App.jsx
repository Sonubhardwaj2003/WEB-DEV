//hooks to update or chage the state value on UI.i.e useState
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15;

  // let [variable,anyMethodNaming i.e SonuCounter etc..] = usestate(anything);
  let [counter,setConuter] = useState(15);

  //shows increase value in the browser console not on the UI. React uses "hooks" to udate on the UI.
  const addValue =()=>{
    if(counter<20){
      setConuter(counter+1)
    }
  }

  const removeValue = ()=>{
    if(counter>0){
      setConuter(counter-1)
    }
  }

  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter value : {counter}</h2>

      <button
        onClick={addValue}>
        Add counter
      </button>
      <br />
      <br />
      <button
        onClick={removeValue}>
        Remove Counter
      </button>
    </>
  )
}

export default App
