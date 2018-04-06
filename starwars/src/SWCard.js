import React from 'react';
import './SWCard.css';
import {Card, CardHeader, CardFooter, CardBody, CardTitle, CardText} from 'reactstrap';

const SWCard = props => {
    return (
        <div className="col-4 boxes"> 
            <Card color="">
                <CardHeader><h2>{props.person.name}</h2></CardHeader>
                <CardBody>
                    <CardTitle>StarWars Data</CardTitle>
                    <CardText><h6>DOB:</h6> {props.person.birth_year}</CardText>
                    <CardText><h6>EYE COLOR:</h6> {props.person.eye_color}</CardText>
                    <CardText><h6>HAIR COLOR:</h6> {props.person.hair_color}</CardText>
                    <CardText><h6>HEIGHT:</h6> {props.person.height}</CardText>
                    <CardText><h6>MASS:</h6> {props.person.mass}</CardText>
                </CardBody>
            </Card>
        </div>            
    );
};

export default SWCard;