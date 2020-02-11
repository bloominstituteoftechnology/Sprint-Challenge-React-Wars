import React from "react";
import { CardTitle, CardText, Card } from "reactstrap"

function StarWarsCard(props) {
    return (
        <Card>
            <CardTitle>Name: {props.name}</CardTitle>
            <CardText>Birth Year: {props.birth_year}</CardText>
            <CardText>Gender: {props.gender}</CardText>
        </Card>
    )
}

export default StarWarsCard;