import React, { useState, useMemo } from 'react'

interface ExpensiveCalculationProps {
  value: number
}

const ExpensiveCalculation: React.FC<ExpensiveCalculationProps> = ({ value }) => {
  const [count, setCount] = useState(0)

  const expensiveResult = useMemo(() => {
    console.log('Performing expensive calculation...')
    return value * 2
  }, [value])

  const increment = () => {
    setCount((prevCount) => prevCount + 1)
  }

    const decrement = () => {
      setCount((prevCount) => prevCount - 1)
    }

        const reset = () => {
          setCount(0)
        }

  return (
    <div>
      <h2>useMemo</h2>
      <p>Value: {value}</p>
      <p>Expensive Result: {expensiveResult}</p>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment Count</button>
      <button onClick={reset}>Reset Count</button>
      <button onClick={decrement}>Decrement Count</button>
    </div>
  )
}

export default ExpensiveCalculation
