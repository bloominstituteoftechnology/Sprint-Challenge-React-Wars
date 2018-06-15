import React from 'react';
import StarWars from '../StarWars.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const Character = props => {
    return (
    <div className="character-card">
        <Card>
             <CardImg top width="100%" src="" alt="Card image cap" />
            <CardBody className="char-info">
                <CardTitle className="char-name">{props.char.name}</CardTitle>
                <CardText>birth year: {props.char.birth_year}</CardText>
                <CardText>gender: {props.char.gender}</CardText>
            </CardBody>
        </Card>
    </div>
    )
}

export default Character;
