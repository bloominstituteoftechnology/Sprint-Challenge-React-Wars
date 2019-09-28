import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Col, Button } from "reactstrap";

export default function StarWarsCard(props) {

    return(
        <Col xs='6' lg='4'>
            <Card height='100%' body outline color = 'success'  className='text-left'>
                <CardBody height='100%'>
                    <CardTitle className='text-center'>{props.name}</CardTitle>
                    <CardSubtitle className='text-center'>{props.gender}</CardSubtitle>
                    <hr />
                    <CardText>Birth Year: {props.birthYear}</CardText>
                    <CardText>Eye Color: {props.eyes}</CardText>
                    <CardText>Hair Color: {props.hair}</CardText>
                    <Button className='text-left'>More</Button>
                </CardBody>
            </Card>
        
        </Col>
    )
}