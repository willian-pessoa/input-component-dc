import React from 'react'

import "./DisplayCol.scss"

const DisplayCol = ({children}) => {
  return (
    <div className='display-col'>
      {children}
    </div>
  )
}

export default DisplayCol
