import React from 'react';
import './StarWars.css';

const Character = props => {
    return (
        <li>
        <h2>{props.char.name}</h2>
        <p>Birth Year: {props.char.birth_year}</p>
        <p>Gender: {props.char.gender}</p>
        <p>Hair Color: {props.char.hair_color}</p>
        <p>Eye Color: {props.char.eye_color}</p>
        <p>Skin Color: {props.char.skin_color}</p>
        <p>Height: {props.char.height}</p>
        <p>Mass: {props.char.mass}</p>
    </li>
    )
}

export default Character;