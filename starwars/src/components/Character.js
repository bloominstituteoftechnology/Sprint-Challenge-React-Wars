import React, { Component } from 'react'

const Character = props => {
    return (
        <div>
            {props.films}
            {props.homeworld}
            {props.vehicles}
            {props.species}
            {props.starships}
        </div>
    )
}

export default Character