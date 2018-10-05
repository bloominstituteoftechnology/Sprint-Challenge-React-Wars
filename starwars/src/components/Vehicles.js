import React from 'react'

const Vehicles = (props) => {
  return (
    <div>
      {props.vehicles.map(vehicle => (
        <div>{vehicle.vehicles}</div>
      ))}
    </div>
  )
}
export default Vehicles