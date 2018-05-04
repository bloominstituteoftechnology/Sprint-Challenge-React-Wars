import React from 'react';
import {Card, CardBody, CardTitle} from 'reactstrap';
import './Bios.css';

const Bio = ({actor}) => {
    return(
        <Card className="Bios-Card">
            <CardTitle>Name: {actor.name}</CardTitle>
            <CardBody>Birth year: {actor.birth_year}</CardBody>
            <CardBody>Eye color: {actor.eye_color}</CardBody>
            <CardBody>Created: {actor.created}</CardBody>
            <CardBody>Gender: {actor.gender}</CardBody>
            <CardBody>Height: {actor.height}</CardBody>
            <CardBody>Skin color: {actor.skin_color}</CardBody>
            {/* <CardBody><img src={actor.homeworld} /></CardBody>
            <CardBody><img src={actor.starships.Array} /></CardBody> */}
        </Card>
    )
}

export default Bio;