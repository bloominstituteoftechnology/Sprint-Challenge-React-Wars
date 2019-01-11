import React from 'react'
import StarWars from './StarWars.css'

function Card(props) {
    return (
        <div className="character-card">
            <h2>Name: {props.character.name}</h2>
            <p>Birth Year: {props.character.birth_year}</p>
            <p>Gender: {props.character.gender}</p>
            <p>Height: {props.character.height}</p>
            <p>Starships: {props.character.starships.map(ship => (
                <p>{props.character.starships}</p>
            ))}
            </p>
            <p>Vehicles: <a href={props.character.vehicles}>{props.character.vehicles}</a></p>
        </div>
    )
}
export default Card;