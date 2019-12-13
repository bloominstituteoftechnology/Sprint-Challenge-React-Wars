import React from 'react';
import {Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, CardHeader} from 'reactstrap';


const CharacterCard = props => {
    return (
        <Card body className="mt-2">
            <CardHeader width='50%'>
                <CardTitle>{props.name}</CardTitle>
            </CardHeader>
            <CardBody>
                <CardText>
                    <p>Birth Year: {props.birth}</p>
                    <p>Height: {props.height}</p>
                    <p>Mass: {props.mass}</p> 
                </CardText>
            </CardBody>
        </Card>
    );
};

export default CharacterCard;