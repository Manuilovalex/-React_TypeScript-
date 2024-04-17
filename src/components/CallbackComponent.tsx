import { useCallback, useState } from 'react'

const CallbackComponent: React.FC = () => {
  const [count, setCount] = useState(0)

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1)
  }, [])

  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1)
  }, [])

  const reset = useCallback(() => {
    setCount(0)
  }, [])

  return (
    <div>
      <h2>useCallback</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default CallbackComponent
