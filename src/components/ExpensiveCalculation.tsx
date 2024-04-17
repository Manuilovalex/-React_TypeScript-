import { useMemo } from 'react'

const ExpensiveCalculation: React.FC<{ value: number }> = ({ value }) => {
  const expensiveResult = useMemo(() => {
    console.log('Performing expensive calculation...')
    return value * 2
  }, [value])

  return (
    <div>
      <h2>useMemo</h2>
      <p>Value: {value}</p>
      <p>Expensive Result: {expensiveResult}</p>
    </div>
  )
}

export default ExpensiveCalculation
