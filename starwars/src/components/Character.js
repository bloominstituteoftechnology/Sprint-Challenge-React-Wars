import React from 'react';

const Character = props => {
    return (
        <ul>
            <li>Name: {props.character.name}</li>
            <li>Birth Year: {props.character.birth_year}</li>
            <li>Gender: {props.character.gender}</li>
            <li>Height: {props.character.height}</li>
            <li>Mass: {props.character.mass}</li>
            <li>Hair Color: {props.character.hair_color}</li>
        </ul>
    );
}

export default Character;