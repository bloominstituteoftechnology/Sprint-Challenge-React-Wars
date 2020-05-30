import React from "react"
import {Card, CardTitle, Container, CardImg, Row, Col, CardSubtitle, CardText} from "reactstrap"
import styled from "styled-components";

const Wrapper = styled.div`
        padding: 4em;
        background: papayawhip;
    `;

function Character(props){
    console.log(props.characterArray, "these are our props")
    
    return(
        
        <div><Wrapper>
        <Row>
        {props.characterArray.map ( (character) => {
            return(
                <Col xs='5'>
                <Card key={character.created}>
                    <CardTitle>{character.name}</CardTitle>
                    <CardSubtitle>{character.gender}</CardSubtitle>
                    <CardText>{character.height}</CardText>
                    <CardText>{character.birth_year}</CardText>
                    <CardText>{character.hair_color}</CardText>
                    <CardText>{character.eye_color}</CardText>
                </Card>
                </Col>
            )
        })}
        </Row> </Wrapper>
        </div>
       
    )
    
}

export default Character;