import React from 'react';
import { Card, CardTitle, CardSubtitle, CardText, CardBody } from 'reactstrap';
import './CharacterList.css';

const CharactersList = props => {
    return (
        <div key={props.char.name} className="Character-Wrapper">
            <Card>
                <CardBody>
                    <CardTitle className="name">{props.char.name}</CardTitle>
                    <CardSubtitle className="name">Birth year: {props.char.birth_year}</CardSubtitle>
                    <CardText className="name">Gender: {props.char.gender}</CardText>
                    <CardText>Eye-Color: {props.char.eye_color}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default CharactersList;