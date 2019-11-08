import React from 'react';
import {
    Card,
    // CardImg,
    // CardText,
    CardBody,
    // CardTitle,
    CardSubtitle,
    // Button,
    Col
} from "reactstrap";

const CharacterCard = props => {
    return (
        <Col xs="12" s="6" md="4">
            <Card>
                {/* <CardImg
                    top
                    width="100%"
                    src={`https://starwars-visualguide.com/assets/img/characters/1.jpg`}
                    // alt={props.name}
                /> */}
                <CardBody>
                    <CardSubtitle>Name: {props.name}</CardSubtitle>
                    <CardSubtitle>Birth year: {props.birth_year}</CardSubtitle>
                    <CardSubtitle>Eye Color: {props.eye_color}</CardSubtitle>
                    
                </CardBody>
            </Card>
        </Col>
    );
};

export default CharacterCard;