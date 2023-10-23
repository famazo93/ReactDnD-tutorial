import { useState } from 'react'
import './App.css'

import Board from './components/Board';

function App() {

  return (
    <>
      <Board knightPosition={[7,4]} />
    </>
  )
}

export default App
