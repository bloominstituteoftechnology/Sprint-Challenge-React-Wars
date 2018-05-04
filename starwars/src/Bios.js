import React from 'react';
import {Card, CardBody, CardTitle, CardText} from 'reactstrap';
import './Bios.css';

const Bio = ({actor}) => {
    return(
        <Card className="Bios-Card">
            <CardBody>Name: {actor.name}</CardBody>
            <CardText>Birth year: {actor.birth_year}</CardText>
            <CardText>Eye color: {actor.eye_color}</CardText>
            <CardText>Created: {actor.created}</CardText>
            <CardText>Gender: {actor.gender}</CardText>
            <CardText>Height: {actor.height}</CardText>
            <CardBody>Skin color: {actor.skin_color}</CardBody>
            
        </Card>
    )
}

export default Bio;