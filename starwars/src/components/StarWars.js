import React, {useEffect, useState} from "react";
import StarWarsCard from "./StarWarsCards";
import axios from "axios"
import {Card, CardText, CardBody, CardTitle, Button, Col} from "reactstrap";

let StarWars = ({people}) => {

    return (
        <Col xs="12" md="6" xl="3">
            <Card>
                <CardBody>
                    <CardTitle>{people.name}</CardTitle>
                    <CardText>
                    {people.height}
                    {people.birth_year}
                    {people.gender}
                    {people.species}
                    {people.films.length}
                    </CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </Col>
    )
}

export default StarWars;

