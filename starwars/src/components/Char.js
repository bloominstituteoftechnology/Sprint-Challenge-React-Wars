import React from 'react';
import { Card, CardTitle, CardBody, CardText } from 'reactstrap';


const Char = props => {
    return (
        <Card>
            <CardTitle>{props.char.name}</CardTitle>
            <CardBody>
                <CardText>Birth Year - {props.char.birth_year}</CardText>
                <CardText>Eye Color - {props.char.eye_color}</CardText>
                <CardText>Gender - {props.char.gender}</CardText>
            </CardBody>
        </Card>
    );
};

export default Char;