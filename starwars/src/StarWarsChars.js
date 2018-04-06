import React from 'react';
import { Card, CardTitle, CardBody, CardText, CardImg } from 'reactstrap';

const StarWarsChars = props => {
    return (
        <Card key={props.char.name}>
            <CardBody>
                <CardTitle className="char-name">{props.char.name}</CardTitle>
                <CardImg src="https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg/revision/latest/scale-to-width-down/500?cb=20170927034529" alt="Luke"></CardImg>
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