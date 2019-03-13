import React from 'react';

const CharacterDetails = props => {
    return (
        <div className="custom-card">
            <h2>{props.character.name}</h2>
            <p>Birth Year: {props.character.birth_year} Gender: {props.character.gender}</p>
            <p>Height: {props.character.height} Mass: {props.character.mass}</p>
            <p>Hair Color: {props.character.hair_color} Eye Color: {props.character.eye_color} </p>
            <p> Skin Color: {props.character.skin_color} </p>
        </div>
    );
}

export default CharacterDetails;