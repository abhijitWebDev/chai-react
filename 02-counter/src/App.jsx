import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if(counter <= 19) {
      setCounter(counter + 1)
    }
    
    console.log("value added", counter)
    
  }

  const decreaseValue = () => {
    if(counter > 0) {
      setCounter(counter - 1);
    }
    
    console.trace("value decreased", counter);
  }

  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={addValue}>Add value {counter}</button> ||
     <button onClick={decreaseValue}>Remove value {counter}</button>
    </>
  )
}

export default App
