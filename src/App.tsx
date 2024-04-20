import React from 'react'
import IconContextComponent from './components/IconContextComponent'
import IdleTimerComponent from './components/IdleTimerComponent'
import ToastComponent from './components/ToastComponent'

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>My React App</h1>
      <IconContextComponent />
      <IdleTimerComponent />
      <ToastComponent />
    </div>
  )
}

export default App
// 