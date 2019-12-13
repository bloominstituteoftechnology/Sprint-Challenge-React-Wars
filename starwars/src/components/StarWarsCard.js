import React from "react";
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const StarWarsCard = props => {
    return (
        <div className="each-card-container">
            <Card className="card">
                <CardBody>
                <CardTitle className="card-title">{props.name}</CardTitle>
                <CardText className="card-text">-> Height: {props.height}</CardText>
                <CardText className="card-text">-> Weight: {props.weight}</CardText>
                <CardText className="card-text">-> Hair color: {props.hairColor}</CardText>
                <CardText className="card-text">-> Skin color: {props.skinColor}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default StarWarsCard;