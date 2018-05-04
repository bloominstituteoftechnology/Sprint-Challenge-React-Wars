import React from 'react';
import { Card, CardBody, CardImg, Container, Row,Col, CardSubtitle, CardText,CardTitle } from 'reactstrap';
import './CardContainer.css';
const CardChar = props =>{
    return(
        <div className="card-wrapper">
                <Col sm="4">
                    <Card>
                        <CardTitle> {props.char.name}</CardTitle>
                    </Card>
                </Col>
        </div>
    )
}

export default CardChar;