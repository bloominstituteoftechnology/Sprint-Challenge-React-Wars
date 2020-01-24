// note to self: this project is broken because starwars won't let me access their api. Do not refer to this for future projects.

import React from 'react';
import './StarWars.css';
import styled from 'styled-components';

import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Header = styled.div`
    color: white;
    font-size: 28px;

`;

const CharacterCard = styled.div` 
background: orange;
width: 200px;
max-height: 300px;
display: flex;
align-items: center;
box-shadow: 2px 2px 2px;
margin: 0 auto;
`;




const StarWars = props => {
    return (
        <div>
            <CharacterCard>
             <Card>
             <CardBody>
            <CardTitle><Header>{props.name}</Header></CardTitle>
            <CardText>
                <p>Gender: {props.gender}</p>
                <p>DOB: {props.dob}</p>
                <p>Height: {props.height}</p>
                <p>Hair: {props.hair}</p>
                <p>Skin: {props.skin}</p>
                <p>Eye Color: {props.eyes}</p>
                </CardText>
                </CardBody>
                </Card>
            </CharacterCard>
        </div>
    );
};
export default StarWars;