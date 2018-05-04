import React, { Component } from 'react'

const Vehicles = props => {
    return (
        <div className="container fierce">
            <div className="row">
                <select className="mein-issues">
                    <option>Vehicles</option>
                    {props.vehicles.map(vehicle => {
                        return <option key={vehicle}> {vehicle} </option>
                    })}
                </select>
            </div>
        </div>
    )
}

export default Vehicles