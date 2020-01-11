import React from "react";
import { Card, CardColumns, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const PersonCard = props => {
    return (
        <CardColumns className="card-columns">
            <Card style={{ backgroundColor: '#ffffff00', borderColor: '#333' }} className="person-card">
                <CardTitle className="name">{props.name}</CardTitle>
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
        </CardColumns>
    )

};

export default PersonCard;