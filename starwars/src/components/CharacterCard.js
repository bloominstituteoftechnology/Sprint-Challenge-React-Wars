import React from "react";
import './StarWars.css'

const CharacterCard = props => {
    return (
        <div className="character-card">
            <h2>Name: {props.person.name}</h2>
            <p>Birth Year: {props.person.birth_year}</p>
            <p>Gender: {props.person.gender}</p>
            <p>hair Color: {props.person.hair_color}</p>
            <p>Eye Color: {props.person.eye_color}</p>
            <p>Height: {props.person.height}</p>
            <p>Mass: {props.person.mass}</p>
        </div>

    );
}


export default CharacterCard;