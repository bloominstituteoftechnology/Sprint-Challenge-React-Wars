import React from 'react';
import './StarWars.css';

const Character = props => {
    return (
        <div className="character" id={props.index}>
            <h1>{props.character.name}</h1>
            <ul>
                <li>Height: {props.character.height}</li>
                <li>Weight: {props.character.mass}</li>
                <li>Hair Color: {props.character.hair_color}</li>
                <li>Eye Color: {props.character.eye_color}</li>
                <li>Birth Year: {props.character.birth_year}</li>
                <li>Gender: {props.character.gender}</li>

            </ul>
        </div>
    )
}

export default Character;