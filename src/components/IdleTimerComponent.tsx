import { useEffect, useState } from 'react'
import { useIdleTimer } from 'react-idle-timer'

const timeout = 10_000
const promptBeforeIdle = 4_000

const IdleTimerComponent = () => {
  const [state, setState] = useState<string>('Active')
  const [remaining, setRemaining] = useState<number>(timeout)
  const [open, setOpen] = useState<boolean>(false)
  const [showTimer, setShowTimer] = useState<boolean>(true)

  const onIdle = () => {
    setState('Idle')
    setOpen(false)
    setShowTimer(false)
  }

  const onActive = () => {
    setState('Active')
    setOpen(false)
    setShowTimer(true)
  }

  const onPrompt = () => {
    setState('Prompted')
    setOpen(true)
  }

  const { getRemainingTime, activate } = useIdleTimer({
    onIdle,
    onActive,
    onPrompt,
    timeout,
    promptBeforeIdle,
    throttle: 500
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const remainingTime = getRemainingTime()
      setRemaining(Math.ceil(remainingTime / 1000))
      setShowTimer(remainingTime > 5_000)
    }, 500)

    return () => {
      clearInterval(interval)
    }
  }, [getRemainingTime])

  const handleStillHere = () => {
    activate()
  }

  return (
    <div>
      <h2>React Idle Timer</h2>
      <p>Current State: {state}</p>
      {showTimer && <p>{remaining > 2 ? remaining - 5 : remaining} seconds until prompt</p>}
      <div
        className="modal"
        style={{
          display: open ? 'flex' : 'none'
        }}
      >
        <h3>Are you still here?</h3>
        <p>Logging out in {remaining} seconds</p>
        <button onClick={handleStillHere}>I'm still here</button>
      </div>
    </div>
  )
}

export default IdleTimerComponent
