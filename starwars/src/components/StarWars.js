import React from 'react';
import {CardGroup, Card, CardTitle, CardText} from 'reactstrap';
import './StarWars.css';

const StarWars = props => {
    return (
        <CardGroup className="cards">
            {props.starwarsChars.map((char, ind) => (
                <Card key={ind} className="card">
                    <CardTitle>{char.name}</CardTitle>
                    <hr />
                    <CardText>Born: {char.birth_year}</CardText>
                    <CardText>Eye color: {char.eye_color}</CardText>
                    <CardText>Hair color: {char.hair_color}</CardText>
                    <CardText>Gender: {char.gender}</CardText>
                    <CardText>Height(cm): {char.height}</CardText>
                    <CardText>Weight: {char.mass}</CardText>
                    <CardText>Skin color: {char.skin_color}</CardText>
                </Card>
            ))}
        </CardGroup>
    );
};

export default StarWars;