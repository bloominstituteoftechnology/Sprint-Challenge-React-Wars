import React from "react"
import {Card, CardTitle, Container, CardImg, Row, Col} from "reactstrap"

function Character(props){
    console.log(props.characterArray, "these are our props")
    return(
        <div>
        <Row>
        {props.characterArray.map ( (character) => {
            return(
                <Col xs='4'>
                <Card key={character.created}>
                    <CardTitle>{character.name}</CardTitle>
                    <CardImg src = {character.height} />
                </Card>
                </Col>
            )
        })}
        </Row>
        </div>
    )
    
}

export default Character;