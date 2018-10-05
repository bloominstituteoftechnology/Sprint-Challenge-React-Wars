import React from 'react'
import './StarWars.css'

const Cards = props => {
    return (
        <div>
            {props.propsCharacter.mass}
        </div>
    )
}

export default Cards