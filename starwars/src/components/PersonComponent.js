import React from 'react';
import styled from "styled-components";

const CharacterStyle = styled.div`
    background: #DCC269;
    width: 30%;
    border-radius: 5px;
    margin: 1%;
    border: 1px solid black;

    &:hover:
    transform: scale(1.5); 

    h1 {
        background: white;
        padding: 5%;
    }

    h1:hover {
        background: black;
        color: white;
    }
`;

const PersonCompnent = (props) => {
    
    return (
        <CharacterStyle>
            <h1>{props.name}</h1>
            <p>Height: {props.height} </p>
            <p>Weight: {props.mass} "kg"</p>
            <p>Hair Color: {props.hair_color}</p>
            <p>Skin Color: {props.skin_color}</p>
            <p>Eye Color: {props.eye_color}</p>
            <p>Born: {props.birth_year}</p>
            <p>Gender:  {props.gender}</p>
        </CharacterStyle>
    )
}


export default PersonCompnent