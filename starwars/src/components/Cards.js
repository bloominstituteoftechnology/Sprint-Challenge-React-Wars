import React from 'react'
import './StarWars.css'

const Cards = props => {
    return (
        <div className="container">
            <div className="cardContainer">
                <div className="names">Character: {props.propsCharacter.name}</div>
                <p className="characterInfo">Gender: {props.propsCharacter.gender}</p>
                <p className="characterInfo">Birth Year: {props.propsCharacter.birth_year}</p>
                <p className="characterInfo">Height: {props.propsCharacter.height}</p>
            </div>
        </div>
    )
}

export default Cards