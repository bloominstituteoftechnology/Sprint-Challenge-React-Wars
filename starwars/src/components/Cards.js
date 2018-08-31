import React from 'react'
import './Cards.css'

const Cards = (props) => {
  return (
    <div className="Cards">
      {props.swChars.map(char => {
        return <p key={char.created}>{char.name}</p>
      })}
    </div>
  )
}

export default Cards