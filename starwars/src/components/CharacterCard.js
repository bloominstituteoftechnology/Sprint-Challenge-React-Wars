import React from "react";
import {
    Card,
    CardText,
    CardTitle,
    CardSubtitle,
    Col
} from "reactstrap"


const CharacterCard = (props) => {

    return (
        <Col xs="6" md="3" xl="2">
            <Card>
                <CardTitle>{props.name}</CardTitle>
                <CardText>{props.url}</CardText>
                <CardSubtitle>{props.species}</CardSubtitle>
            </Card>        
        </Col>
    )
}

export default CharacterCard;