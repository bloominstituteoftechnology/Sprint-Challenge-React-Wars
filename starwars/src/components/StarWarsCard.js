import React from "react";

import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Row
} from 'reactstrap'

const StarWarsCard = props => {
    return (
        <Card body inverse style={{ backgroundColor: 'pink', borderColor: 'white' }} className="card">
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <CardText>Birth Year: {props.birthYear}</CardText>
                <CardText>Gender: {props.gender}</CardText>
                <CardText>Skin Color: {props.skinColor}</CardText>
                <CardText>Hair Color: {props.hairColor}</CardText>
                <CardText>Height: {props.height}</CardText>
                <CardText>Home World: {props.homeWorld}</CardText>
            </CardBody>
        </Card>
    )
}

export default StarWarsCard;