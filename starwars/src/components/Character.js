// Write your Character component here
import React from 'react';
import {Card, CardTitle, CardSubtitle, CardBody, Container, Row, Col} from '../../node_modules/reactstrap'

function Character(props){
    return(
        
        <Container>
            <Row>          
                    {props.characterArray.map((character)=>{
                        return(
                            <Col xs='4'>
                                <Card key={character.created}>
                                        <CardTitle>{character.name}</CardTitle>
                                        <CardSubtitle>Gender: {character.gender}</CardSubtitle>
                                        <CardBody>
                                            Born: {character.birth_year}<br/>
                                            Height: {character.height}<br/>
                                            Mass: {character.mass}
                                        </CardBody>
                                </Card> 
                            </Col>
                        )
                    })}
            </Row>
        </Container>

        
    )
}

export default Character