import React from 'react';
import styled from 'styled-components';


const CardBorder = styled.div`
    display:flex;
    flex-flow: column wrap;
    border: 2px solid black;
    width: 20%
    margin: 1%;
    background:#ffffff80;
`;

const CardTitle= styled.div`
 background-color: #eeccaa80
 border-bottom: 3px solid black;
`;

const Name = styled.h1`
font-weight: bold;
line-size: 2rem;
`;

const Label = styled.span`
font-weight: bold;
`;

const Para = styled.p`
font-size: 1.5rem;
`;


const CharacterCard = props => {
    
    return(
        <CardBorder key={props.key}>
            <CardTitle><Name>{props.name}</Name></CardTitle>
            <Para><Label>Birth Year:</Label>   {props.birth_year}</Para>
            <Para><Label>Gender:</Label>   {props.gender}</Para>
            <Para><Label>Height:</Label>   {props.height}</Para>
            <Para><Label>Weight:</Label>   {props.mass}</Para>
        </CardBorder>
    )
}

export default CharacterCard;