import React from 'react';
// import styled from 'styled-components';

const CharCard = (props) => {
    return (
        <div>
            <h1>{props.character.name}</h1>
            <p>Height: {props.character.height}</p>
            <p>Mass: {props.character.mass}</p>
            <p>Gender: {props.character.gender}</p>
            <p>Hair Color: {props.character.hair_color}</p>
            <p>Birth Year: {props.character.birth_year}</p>
            <p>Skin Color: {props.character.skin_color}</p>
            <p>Eye Color: {props.character.eye_color}</p>
        </div>
    );
}

export default CharCard;