import React from 'react'
import logo from './logo.svg'
import './App.css'
import FocusInput from './components/FocusInput'
import ClassTimer from './components/ClassTimer'
import HookTimer from './components/HookTimer'

function App() {
  return (
    <div className='App'>
      <HookTimer />
      <ClassTimer />
      {/* <FocusInput /> */}
    </div>
  )
}

export default App
