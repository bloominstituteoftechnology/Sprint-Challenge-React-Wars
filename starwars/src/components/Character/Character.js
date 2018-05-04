import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const Character = props => {
    return (
    <div className="character">
        <Card>
            <img top width="100%" src={`${window.location.origin}/images/${props.char.name.split(' ').join('-')}.jpg`} alt={`portrait of ${props.char.name}`} className="char-img"/>
            <CardBody className="char-info">
                <CardTitle className="char-name">{props.char.name}</CardTitle>
                <CardSubtitle className="stats">STATS:</CardSubtitle>
                <CardText>birth year: {props.char.birth_year}</CardText>
                <CardText>eye color: {props.char.eye_color}</CardText>
                <CardText>gender: {props.char.gender}</CardText>
            </CardBody>
        </Card>
    </div>
    )
}

export default Character;