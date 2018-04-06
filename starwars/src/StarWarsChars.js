import React from 'react';
import { Card, CardTitle, CardBody, CardText } from 'reactstrap';

const StarWarsChars = props => {
    return (
        <Card key={props.char.name}>
            <CardBody>
                <CardTitle>{props.char.name}</CardTitle>
                <CardText>{props.char.birth_year}</CardText>
            </CardBody>
        </Card>
    );
};

export default StarWarsChars;