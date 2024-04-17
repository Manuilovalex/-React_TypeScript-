import React, { useState } from 'react'
import ExpensiveCalculation from './components/ExpensiveCalculation'
import CallbackComponent from './components/CallbackComponent'
import MemoizedComponent from './components/MemoizedComponent'

const App: React.FC = () => {
  const [value, setValue] = useState(5)

  const increment = () => setValue((prevValue) => prevValue + 1)
  const reset = () => setValue(() => 0)
  const decrement = () => setValue((prevValue) => prevValue - 1)

  return (
    <div className="App">
      <h1>React Memoization Demo</h1>
      <ExpensiveCalculation value={value} />
      <CallbackComponent />
      <MemoizedComponent value={value} increment={increment} reset={reset} decrement={decrement} />
    </div>
  )
}

export default App
