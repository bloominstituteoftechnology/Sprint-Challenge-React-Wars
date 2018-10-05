import React from 'react'
import './StarWars.css'

const Navigator = ({ navigate, text, direction }) => (
  <button
    onClick={() => navigate(direction)}
    className={`navigator-button`}
    disabled={!direction}
  >
    {text}
  </button>
)

export default Navigator
