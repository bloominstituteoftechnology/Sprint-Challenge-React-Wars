import React from 'react';
import { Card, CardBody, CardImg, Container, Row,Col, CardSubtitle, CardText,CardTitle } from 'reactstrap';
import './CardContainer.css';
const CardChar = props =>{
    return(
        <div >
                <Col  sm="6">
                    <Card>
                        <CardBody>
                            <CardTitle> {props.char.name}</CardTitle>
                        </CardBody>
                        <CardBody>
                            <CardText> height - {props.char.height}</CardText>
                            <CardText> hair_color -  {props.char.hair_color}</CardText>
                            <CardText> mass -  {props.char.mass}</CardText>
                            <CardText> skin_color -  {props.char.skin_color}</CardText>
                            <CardText> eye_color -  {props.char.eye_color}</CardText>
                            <CardText> birth_year -  {props.char.birth_year}</CardText>
                            <CardText> gender -  {props.char.gender}</CardText>
                        </CardBody>
                    </Card>
                </Col>
        </div>
    )
}

export default CardChar;