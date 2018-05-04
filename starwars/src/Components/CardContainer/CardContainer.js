import React from 'react';
import { Card, CardBody, CardImg, Container, Row,Col, CardSubtitle, CardText,CardTitle } from 'reactstrap';
import './CardContainer.css';
const CardContainer = props =>{
    return(
        <div>
            <Card>
                <CardBody>
                    <CardTitle>{props.character.name}</CardTitle>
                </CardBody>
                <CardBody>
                    <CardText>{props.character.height}</CardText>
                    <CardText>{props.character.mass}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default CardContainer;