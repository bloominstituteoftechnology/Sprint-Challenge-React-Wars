import React from 'react'

function Card(props) {
    return (
        <div>
            <h2>Name: {props.character.name}</h2>
            <p>Birth Year: {props.character.birth_year}</p>
            <p>Gender: {props.character.gender}</p>
            <p>Height: {props.character.height}</p>
            <p></p>
        </div>
    )
}
export default Card;