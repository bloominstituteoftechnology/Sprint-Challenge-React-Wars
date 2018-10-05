import React from 'react';

const Character = props => {
    return (
        <div>
            <h2>{props.character.name}</h2>
            <p>Birth Year: {props.character.birth_year}</p>
            <p>Gender: {props.character.gender}</p>
            <p>Height: {props.character.height}</p>
            <p>Mass: {props.character.mass}</p>
            <p>Hair Color: {props.character.hair_color}</p>
            <p>Skin Color: {props.character.skin_color}</p>
            <p>Eye Color: {props.character.eye_color}</p>
        </div>
    );
}

export default Character;