import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    width: 25%;
    background: #D2B48C;
    color: #2F4F4F;
    border: 4px solid black;
    margin: 10px;
`;

const Name = styled.h2`
    color: #CD853F;
    font-size: 25px;
`;

const Description = styled.p`
    font-size: 18px; 
    font-weight: bold;
`;

const Characters = (props) => {

    return (
        <Card>
            <Name>{props.name}</Name>
            <Description>Born: {props.birthyear}</Description>
            <Description>Gender: {props.gender}</Description>
            <Description>Hair Color: {props.hair_color}</Description>
            <Description>Height: {props.height}</Description>
            
        </Card>
    )
}


export default Characters;