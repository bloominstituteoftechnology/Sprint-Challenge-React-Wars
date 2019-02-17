import React from 'react';
import './StarWars.css';

const Character = props => {
    return (
        <div className="characterBox">
            <h2>{props.char.name}</h2>
            <p>Born in: {props.char.birth_year}</p>
            <p>Gender: {props.char.gender}</p>
            <p>Eye Color: {props.char.eye_color}</p>
            <p>Hair Color: {props.char.hair_color}</p>
        </div>
    )
}





export default Character;
