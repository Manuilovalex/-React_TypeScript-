import React from 'react'

interface Props {
  value: number
  increment: () => void
  reset: () => void
  decrement: () => void
}

const MemoizedComponent: React.FC<Props> = ({ value, increment, reset, decrement }) => {
  return (
    <div>
      <h2>React.memo</h2>
      <p>Value: {value}</p>
      <button onClick={increment}>Increment Value</button>
      <button onClick={reset}>Reset Value</button>
      <button onClick={decrement}>Decrement Value</button>
    </div>
  )
}

const MemoizedComponentWithMemo = React.memo(MemoizedComponent)

export default MemoizedComponentWithMemo
