import React from 'react'

function Card(props) {
    return (
        <div className="character-card">
            <h2>Name: {props.starwarsChars.name}</h2>
            <p>Birth Year: {props.starwarsChars.birth_year}</p>
            <p>Gender: {props.starwarsChars.gender}</p>
            <p>Height: {props.starwarsChars.height}</p>
            <p>Starships: {props.starwarsChars.starships}</p>
            <p>Vehicles: {props.starwarsChars.vehicles}</p>
        </div>
    )
}
export default Card;