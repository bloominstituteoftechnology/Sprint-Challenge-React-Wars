import React from 'react';
import {Card, ListGroup} from 'react-bootstrap'

const People = ({name, mass, skinColor, height}) => {
    return (
            <Card border="danger" bg ='info' style={{ width: '19rem'}}>
                <Card.Header>Starwars Character</Card.Header>
                <Card.Body>
                <Card.Title>Name : {name}</Card.Title>
                <ListGroup bg = 'danger' variant="flush">
                    <ListGroup.Item>Mass: {mass}</ListGroup.Item>
                    <ListGroup.Item>Skin Color: {skinColor}</ListGroup.Item>
                    <ListGroup.Item>Height: {height}</ListGroup.Item>
                </ListGroup>
                </Card.Body>
            </Card>
    )
} 

export default People
