import React from 'react';
import { Card, CardTitle, CardBody, CardText } from 'reactstrap';

const StarWarsChars = props => {
    return (
        <Card key={props.char.name}>
            <CardBody>
                <CardTitle>{props.char.name}</CardTitle>
                <CardText>Birthdate: {props.char.birth_year}</CardText>
                <CardText>Height: {props.char.height}</CardText>
                <CardText>Mass: {props.char.mass}</CardText>
                <CardText>Species: {props.char.species}</CardText>
                <CardText>Home: {props.char.homeworld}</CardText>
            </CardBody>
        </Card>
    );
};

export default StarWarsChars;