import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    border: 1px solid black;
    width: 27%;
    min-width: 300px;
    max-width: 500px;
    border-radius: 10px;
    margin: 30px 0;
    font-weight: bold;
    background-color: lightgray;
    opacity: 0.8;

    h1 {
        text-decoration: underline;
    }
`


const CharCard = (props) => {
    return (
        <StyledCard>
            <h1>{props.character.name}</h1>
            <p>Height: {props.character.height}</p>
            <p>Mass: {props.character.mass}</p>
            <p>Gender: {props.character.gender}</p>
            <p>Hair Color: {props.character.hair_color}</p>
            <p>Birth Year: {props.character.birth_year}</p>
            <p>Skin Color: {props.character.skin_color}</p>
            <p>Eye Color: {props.character.eye_color}</p>
        </StyledCard>
    );
}

export default CharCard;