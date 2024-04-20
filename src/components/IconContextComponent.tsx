import React from 'react'
import { IconContext } from 'react-icons'
import { FaReact } from 'react-icons/fa'

const IconContextComponent: React.FC = () => {
  return (
    <div>
      <h2>Icon Context Component</h2>
      <IconContext.Provider value={{ color: 'blue', size: '2em' }}>
        <div>
          <FaReact />
          <span>React Icon</span>
        </div>
      </IconContext.Provider>
    </div>
  )
}

export default IconContextComponent
