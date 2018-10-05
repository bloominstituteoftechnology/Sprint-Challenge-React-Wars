import React from 'react'

const Starships = (props) => {
  return (
    <div>
      {props.starships.map(ship => (
        <div>{ship}</div>
      ))}
    </div>
  )
}
export default Starships