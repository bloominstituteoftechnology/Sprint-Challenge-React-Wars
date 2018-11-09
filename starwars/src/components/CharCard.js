import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    border: 1px solid black;
    width: 27%;
    border-radius: 10px;
    margin: 30px 3%;
    font-weight: bold;
    background-color: lightgray;
    opacity: 0.8;
`
const StyledH1 = styled.h1`
    text-decoration: underline;
`


const CharCard = (props) => {
    return (
        <StyledCard>
            <StyledH1>{props.character.name}</StyledH1>
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