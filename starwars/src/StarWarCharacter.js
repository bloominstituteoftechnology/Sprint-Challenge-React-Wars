// Am going to use a functional component because, its just for display purposes 
import React from 'react';
import { Row, Col, Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

export const StarWarCharacter = (props) => {
    const { character } = props;
    return (
        <Row>
            <Col sm="12">
                <Card body>
                    <CardBody>
                        <CardTitle>{character.name}</CardTitle>
                        <CardSubtitle>{character.birth_year}</CardSubtitle>
                        <CardText>
                        {character.name} is {character.height} tall and weighs {character.mass} pounds. This character has {character.eye_color} eyes.</CardText>
                        <Button>Add to Favorite</Button>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}