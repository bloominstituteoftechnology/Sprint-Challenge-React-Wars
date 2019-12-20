import React from 'react';
import styled,  { keyframes } from 'styled-components';
import {rotateIn} from 'react-animations';
import {fadeIn } from 'react-animations';

let fadeAnimation = keyframes`${fadeIn}`;
let bounceAnimation = keyframes`${rotateIn}`;
const Card = styled.div`
 animation: 20s ${bounceAnimation};
 
background: rgba(185, 150, 170, .5);;
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
animation: 25s ${fadeAnimation};
text-align: center;
margin-bottom: 4px;
font-family: 'Open Sans', sans-serif;
font-size:20px;
`;

const Info = styled.h4`
animation: 20s ${fadeAnimation};
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
