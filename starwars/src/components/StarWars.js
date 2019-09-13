import React from 'react';
import styled from 'styled-components';

const CharacterDiv = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: tan;
    margin-bottom: 10px;
    box-shadow: 1px 1px 1px black;
          width: 45%;
`;


export function Card(props) {
console.log(props)
    return (
        <CharacterDiv>
            <h2>{props.name}</h2>
            <ul>
            <li>{`Date of Birth: ${props.birth}`}</li>
            <li>{`Gender: ${props.gender}`}</li>
            <li>{`Height: ${props.height}`} </li>
            <li>{`Mass: ${props.mass}`} </li>
            </ul>
        </CharacterDiv>
    )
}