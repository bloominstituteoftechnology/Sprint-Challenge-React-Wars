import React from 'react';
import {
    Card,
    // CardImg,
    // CardText,
    CardBody,
    CardTitle,
    // CardSubtitle,
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
                    src="https://source.unsplash.com/random"
                    alt="Card image cap"
                /> */}
                <CardBody>
                    <CardTitle>Name: {props.name}</CardTitle>
                    {/* <CardText>{props.description}</CardText>
                    <CardSubtitle>Director: {props.director}</CardSubtitle>
                    <CardSubtitle>Release Date:{props.release_date}</CardSubtitle>
                    <Button>Button</Button> */}
                </CardBody>
            </Card>
        </Col>
    );
};

export default CharacterCard;