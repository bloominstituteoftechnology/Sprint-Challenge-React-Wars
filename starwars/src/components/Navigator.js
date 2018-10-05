import React from 'react'

const Navigator = ({ navigate, text, direction }) => (
  <button onClick={() => navigate(direction)} className={`navigator`}>
    {text}
  </button>
)

export default Navigator
