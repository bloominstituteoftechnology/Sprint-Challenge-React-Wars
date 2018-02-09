import React from 'react';

const CharacterCard = (props) => {
    return (
        <div>
            <div>Name: {props.character.name}</div>
            <div>Gender: {props.character.gender}</div>
            <div>Birth Year: {props.character.birth_year}</div>
            <div>Eye Color: {props.character.eye_color}</div>
            <div>Hair Color: {props.character.hair_color}</div>
            <div>Skin Color: {props.character.skin_color}</div>
            <div>Height: {props.character.height}</div>
            <div>Mass: {props.character.mass}</div>
        </div>
    )
}

export default CharacterCard;