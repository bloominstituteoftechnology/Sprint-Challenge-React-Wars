import React from 'react';
import styled from "styled-components";

const CharacterStyle = styled.div`
    background: #DCC269;
    width: 30%;
    border-radius: 5px;
    margin: 1%;
    font-size: 1.2rem;

    h1 {
        background: white;
        padding: 5%;
    }

    h1:hover {
        background: black;
        color: white;
    }
`;

const Character = (props) => {
    
    return (
        <CharacterStyle>
            <h1>{props.name}</h1>
            <p>Birth Year: {props.birth_year}</p>
            <p>Height: {props.height} cm</p>
            <p>Mass: {props.mass} kg</p>
            <p>Skin Color: {props.skin_color}</p>
            <p>Hair Color: {props.hair_color}</p>
            <p>Eye Color: {props.eye_color}</p>
            <p>Gender:  {props.gender}</p>
        </CharacterStyle>
    )
}


export default Character