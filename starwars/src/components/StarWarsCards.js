import React from 'react';
import {Card, Button, CardTitle, CardText,CardSubtitle, CardBody} from 'reactstrap';
import styled from 'styled-components';

const Colored = styled.div`
     width: 60%;
`;

const StarWarsCards = (props) => {
    return (
        <div className="cards">
        <Colored>
        <Card>
              <CardBody >
                    <CardTitle>Name: {props.name}</CardTitle>
                    <CardSubtitle>Height: {props.height}</CardSubtitle>
                    <CardText>Hair-Color: {props.hairColor}</CardText>
                    <CardText>Gender: {props.gender}</CardText>
                    <Button color="primary">Button</Button>
                </CardBody>
        </Card>
        </Colored> 
        </div>
        
    )
}

export default StarWarsCards


