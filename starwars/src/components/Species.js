import React, { Component } from 'react'

const Species = props => {
    return (
        <select>
        <option>Species</option>
        {props.species.map(species => {
            return <option key={species}> {species} </option>
        })}
        </select>
    )
}

export default Species