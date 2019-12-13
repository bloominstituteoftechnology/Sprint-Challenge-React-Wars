import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
background: rgba(76, 175, 80, 0.3);;
padding: 1% 5%;
margin 10px;
border-radius: 5px;
text-align: left;
width 15%;
font-family: 'Open Sans', sans-serif;
`;

const Title = styled.h2`
text-align: center;
margin-bottom: 4px;
font-family: 'Open Sans', sans-serif;
`;

const Info = styled.h4`
`;

export default function Characters({props}) {
return (
    <Card>
    <Title>Name: {props.name}</Title>
    <Info>Height: {props.height}</Info>
    <Info>Mass: {props.mass}</Info>
    <Info>Hair Color: {props.hair_color}</Info>
    <Info>Skin Color: {props.skin_color}</Info>
    <Info>Eye Color: {props.eye_color}</Info>
    <Info>Birth Year: {props.birth_year}</Info>
    <Info>Gender: {props.gender}</Info>
    </Card>
)
}