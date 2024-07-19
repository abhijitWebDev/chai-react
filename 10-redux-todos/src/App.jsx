import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-500 text-white p-4">Redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
