import React from 'react'

import "./DisplayRow.scss"

const DisplayRow = ({children}) => {
  return (
    <div className='display-row'>
      {children}
    </div>
  )
}

export default DisplayRow
