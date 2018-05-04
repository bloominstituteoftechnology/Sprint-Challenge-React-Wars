import React from 'react';
import './CharsList.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';  

const CharsList = (props) => {
    const chars = props.chars;
    const charNames = chars.map((char) =>
        <Card body className="text-center" id="cards">
            <CardTitle><strong>{char.name}</strong></CardTitle>
            <CardText>Born: {char.birth_year}</CardText>
            <CardText>Eye Color: {char.eye_color}</CardText>
            <CardText>Gender: {char.gender}</CardText>
            <CardText>Skin Color: {char.skin_color}</CardText>
            <CardText>Hair Color: {char.hair_color}</CardText>
            <CardText>Created: {char.created}</CardText>
            <CardText>Homeworld: {char.homeworld}</CardText>
            <CardText>Mass: {char.mass}</CardText>
        </Card>
    );
    return (
        <div>{charNames}</div>
    );
}

export default CharsList;