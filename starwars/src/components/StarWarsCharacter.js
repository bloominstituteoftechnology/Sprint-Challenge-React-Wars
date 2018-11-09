import React from 'react';

// Come back to this
const StarWarsCharacter = props => {
    return (
        <div>
            <h2>{props.character.name}</h2>
            <p>Born in: {props.character.birth_year}</p>
            <p>Eye Color: {props.character.eye_color}</p>
            <p>Sex: {props.character.gender}</p>
            <p>Hair Color: {props.character.hair_color}</p>
            <p>Height: {props.character.height}</p>
            <p>Weight: {props.character.mass}</p>
            <p>Skin Color: {props.character.skin_color}</p>
        </div>
        
    )
}

export default StarWarsCharacter