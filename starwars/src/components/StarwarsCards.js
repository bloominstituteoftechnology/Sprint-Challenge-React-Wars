import React from "react";
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Col
  } from 'reactstrap';



export default function StarwarsCards (props) {

return (
<Col xs="12" s="6" md="4"> 
    <Card className="card">
        <CardBody className="text-center">
          <CardTitle>Name: {props.name}</CardTitle>
          <CardSubtitle>Gender: {props.gender}</CardSubtitle>
          <CardSubtitle>BirthYear: {props.birth_year}</CardSubtitle>
          <CardSubtitle>Height: {props.height}</CardSubtitle>
          <CardText>Mass: {props.mass}</CardText>
          
        </CardBody>
      </Card>
      </Col>


)
}