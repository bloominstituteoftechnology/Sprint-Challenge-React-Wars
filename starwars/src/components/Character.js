// Write your Character component here
import React from "react";
import {Card, CardTitle, CardSubtitle, Container, Row, Col } from 'reactstrap'

function Character(props){
   console.log(props.characterArray, 'these are your props')
    return (
            <Container>
             <Row>
            {props.characterArray.map((person) =>{
                return(
                    <Col xs='12'>
                    <Card key ={person.created}>
                        <div>Name</div>
                        <CardTitle>{person.name}</CardTitle>
                        <div>Height</div>
                        <CardSubtitle>{person.height}</CardSubtitle>
                    </Card>
                    </Col>
                )
        })}
             </Row>
            </Container>
    )
};
export default Character