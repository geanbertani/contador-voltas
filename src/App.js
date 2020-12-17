import React, { useState, useEffect } from 'react'
import MostraVoltas from './MostraVoltas'
import MostraTempo from './MostraTempo'
import Button from './Button'
import './index.css'

function App() {
  const [numVoltas, setNumVoltas] = useState(0)
  const [running, setRunning] = useState(false)
  const [tempo, setTempo] = useState(0)

  useEffect(() => {
    let timer = null

    if (running) {
      timer = setInterval(() => {
        setTempo(old => old + 1)
      }, 1000)
    }

    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [running])

  const toggleRunning = () => {
    if (numVoltas > 0) {
      setRunning(!running)
    }
  }

  const increment = () => {
    setNumVoltas(numVoltas + 1)
  }

  const decrement = () => {
    if (numVoltas > 0) {
      setNumVoltas(numVoltas - 1)
    }
  }

  const reset = () => {
    setNumVoltas(0)
    setTempo(0)
    setRunning(false)
  }

  return (
    <div>
      <MostraVoltas voltas={numVoltas} />
      <Button text='+' onClick={increment} />
      <Button text='-' onClick={decrement} />
      {
        numVoltas > 0 &&
        <MostraTempo tempo={Math.round(tempo / numVoltas)} />
      }
      <Button text={running ? 'Pausar' : 'Iniciar'} onClick={toggleRunning} />
      <Button text='Reiniciar' onClick={reset} />
    </div>
  );
}

export default App;
