import React from 'react';
import './CharCard.css';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';


const CharCard = (props) => {
    return (
        <div className>
            <Card className= "Body">
                <CardBody>
                <CardTitle className = "Name">{props.char.name}</CardTitle>
                <CardText>Born: {props.char.birth_year}</CardText>
                <CardText>Gender: {props.char.gender}</CardText>
                <CardText>Hair Color: {props.char.hair_color}</CardText>
                <CardText>Weight: {props.char.mass}</CardText>
                <CardText>Height: {props.char.height}</CardText>
                </CardBody>
            </Card> 
        </div>
    )
}

export default CharCard;