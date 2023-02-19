import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Habit } from "./components/Habit"

function App() {
  return (
    <div className="App">
      <Habit completed={3}/>
    </div>
  )
}

export default App
