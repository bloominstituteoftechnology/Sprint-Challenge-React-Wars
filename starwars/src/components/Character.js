import React from "react"
import {Card, CardTitle, Container, CardImg, Row, Col, CardSubtitle, CardText} from "reactstrap"
import styled from "styled-components";

// const Wrapper = styled.div`
//         padding: 4em;
//         background: papayawhip;
//     `;

function Character(props){
    console.log(props.characterArray, "these are our props")
    
    return(
        
        <div>
        {/* <Wrapper> */}<Container>
        <Row>
        {props.characterArray.map ( (character) => {
            return(
                <Col xs='5'>
                <Card key={character.created} body inverse color="info">
                    <CardTitle>{character.name}</CardTitle>
                    <CardSubtitle>Character Gender: {character.gender}</CardSubtitle>
                    <CardSubtitle>Character Height: {character.height}</CardSubtitle>
                    <CardSubtitle>Character Birth Year: {character.birth_year}</CardSubtitle>
                    <CardSubtitle>Character Hair Color: {character.hair_color}</CardSubtitle>
                    <CardSubtitle>Character Eye Color: {character.eye_color}</CardSubtitle>
                </Card>
                </Col>
            )
        })}
        </Row> 
        {/* </Wrapper> */}
        </Container>
        </div>
       
    )
    
}

export default Character;