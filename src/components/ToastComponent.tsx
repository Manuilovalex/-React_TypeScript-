import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ToastComponent: React.FC = () => {
  const notify = () => toast.info('Hello, this is a toast message!')

  return (
    <div>
      <h2>Toast Component</h2>
      <button onClick={notify}>Show Toast</button>
      <ToastContainer />
    </div>
  )
}

export default ToastComponent
