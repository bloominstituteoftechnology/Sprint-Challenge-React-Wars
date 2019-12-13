import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
background: rgba(200, 290, 280, 0.5);;
padding: 1% 5%;
margin 10px;
border-radius: 15px;
text-align: center;
width 15%;
font-family: 'Open Sans', sans-serif;
font-size:20px;
font-weight:bold;

`;

const Title = styled.h2`
text-align: center;
margin-bottom: 4px;
font-family: 'Open Sans', sans-serif;
font-size:20px;
`;

const Info = styled.h4`
font-size:20px;
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
