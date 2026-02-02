import { useState } from 'react'

import './App.css'

function App() {
  let [count, setCount] = useState(10)

  const addValue=()=>{
    setCount(count+1)
  }

  const removeValue=()=>{
    if(count>0){
      setCount(count-1)
    }
  }

  const jumpValue=()=>{
    setCount(count+5)
  }

  return (
    <>
      <h2>Counter value {count}</h2>
      <br />
      <button onClick={addValue}>Inc Count</button>
      <br />
      <br />
      <button onClick={removeValue}>Dec Count</button>
      <br />
      <br />
      <button onClick={jumpValue}>Jump Count 5</button>
    </>
  )
}

export default App
