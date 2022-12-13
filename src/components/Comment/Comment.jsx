import React from 'react'

import "./Comment.scss"

const Comment = ({text}) => {
  return (
    <div className='comment'>
      {text}
    </div>
  )
}

export default Comment
