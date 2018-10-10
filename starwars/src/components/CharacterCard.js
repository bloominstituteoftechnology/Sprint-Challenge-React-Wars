import React from 'react';
import { Card, CardText, CardBody,
    CardTitle } from 'reactstrap';
  

const CharacterCard = props => {
    return (
        <Card>
            <CardTitle>Name: {props.name}</CardTitle>
            <CardBody>
                <CardText>
                    Gender: {props.gender}
                    <br></br>
                    Birth Year: {props.birth_year}
                    <br></br>
                    Height: {props.height} cm
                    <br></br>
                    Mass: {props.mass} kg
                    <br></br>
                    Number of films: {props.films.length}
                </CardText>
            </CardBody>
        </Card>
    );
};

export default CharacterCard