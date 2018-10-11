import React from 'react';
import { Card, CardText, CardTitle, CardBody } from 'reactstrap';
import './CharacterCard.css';

const CharacterCard = ({ char }) => {
    return (
        <Card className= "Card-Container">
            <CardTitle> {char.name}</CardTitle>
            <CardBody>
                <CardText> {char.eye_color} </CardText>
                <CardText> {char.hair_color}  </CardText>
                <CardText> {char.height}  </CardText>
                <CardText> {char.birth_year}  </CardText>
            </CardBody>
        </Card>
    );
};

export default CharacterCard;