import React from 'react';

const Card = props => {
    return (
        <div>
            <h1>{props.data.setCharacter.name}</h1>
            <h4>Height: {props.data.setCharacter.height}</h4>
            <h4>Mass: {props.data.setCharacter.mass}</h4>
            <h4>Hair Color: {props.data.setCharacter.hair_color}</h4>
            <h4>Skin Color: {props.data.setCharacter.skin_color}</h4>
            <h4>Eye Color: {props.data.setCharacter.eye_color}</h4>
            <h4>Birth Year: {props.data.setCharacter.birth_year}</h4>
            <h4>Gender: {props.data.setCharacter.gender}</h4>
        </div>
    )
}

export default Card;