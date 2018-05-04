import React, { Component } from 'react'

const Starships = props => {
    return (
        <select>
            <option> Starships </option>
                {props.starships.map(starship => {
                    return <option key={starship}> {starship} </option>
        })}
        </select>
    )
}

export default Starships