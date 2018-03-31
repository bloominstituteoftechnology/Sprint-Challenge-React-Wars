import React from 'react';
import './SWCards.css';
import { Card, CardText, CardBody, CardSubtitle } from 'reactstrap';

const SWCards = props => {
    return (
        <Card className="Body">
            <CardBody>
                    <CardSubtitle className="cardSubtitle">
                        {props.name}
                    </CardSubtitle>
            </CardBody>
                <CardBody>
                    <CardText className="text--Body">
                        <div>Was Born in the year: {props.birth_year}</div>
                        <div>Gender: {props.gender}</div>
                        <div>Height: {props.height}</div>
                        <div>Skin-Color: {props.eye_color}</div>
                    </CardText>
                </CardBody>
        </Card>
    );
};


export default SWCards;