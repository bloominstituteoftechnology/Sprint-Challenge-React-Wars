import React, { Component } from 'react'

const Vehicles = props => {
    return (
        <select>
            <option> Vehicles </option>
                {props.vehicles.map(vehicle => {
                    return <option key={vehicle}> {vehicle} </option>
        })}
        </select>
    )
}

export default Vehicles