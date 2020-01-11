import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const PersonCard = props => {
    return (
        <Card className="person-card">
            <CardTitle className="name">Name: {props.name}</CardTitle>
            <CardSubtitle className="height">
                <p>Height: {props.height}</p>
            </CardSubtitle>
            <CardSubtitle className="mass">
                <p>Mass: {props.mass}</p>
            </CardSubtitle>
            <CardSubtitle className="birth_year">
                <p>Birth Year: {props.birth_year}</p>
            </CardSubtitle>
        </Card>
    )

};

export default PersonCard;