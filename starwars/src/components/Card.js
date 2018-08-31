import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className="Card">
      <h1>{props.char.name}</h1>
    </div>
  )
}

export default Card