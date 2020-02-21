import React from "react";
import {
    Card,
    CardText,
    CardTitle,
    CardSubtitle,
    Col
} from "reactstrap";


const CharacterCard = (props) => {
    console.log('in props',props);
    return (
        <Col xs="6" md="3" xl="2">
            <Card>
                <CardTitle>{props.card.name}</CardTitle>
                <CardText>{props.card.url}</CardText>
                <CardSubtitle>{props.card.species}</CardSubtitle>
            </Card>        
        </Col>
    )
}

export default CharacterCard;