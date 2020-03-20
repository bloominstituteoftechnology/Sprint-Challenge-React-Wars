import React from "react";
import {
    Card, CardText, CardBody,
    CardTitle
  } from "reactstrap";

export default function Character(props){

    let {name, hair_color, birth_year, height, eye_color} = props;

    return(
        <div className="personCard">
            <Card>
                <CardTitle><strong>{name}</strong></CardTitle>
                <CardBody>
                    <CardText>Born: {birth_year}</CardText>
                    <CardText>Hair Color: {hair_color}</CardText>
                    <CardText>Eye Color: {eye_color}</CardText>
                    <CardText>Height: {height} cm</CardText>
                </CardBody>
            </Card>
        </div>
    )
}