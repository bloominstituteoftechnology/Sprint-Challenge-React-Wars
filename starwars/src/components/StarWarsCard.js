import React from "react"
import styled from "styled-components"

const Row = styled.div`
    width: 100%;
    align-items: center;
    color: white;
    text-shadow: 1px 2px black;
    padding: 10px 0px;

`


const Card =styled.div`
    width: 100%;
    align-items: center;
    color: white;
    text-shadow: 1px 2px black;
    margin: 25px 0 px;
`
const starWarsCard = props => {
    return (
        <Row>
            <Card>
                <h1>{props.data.name}</h1>
                <h3>Birth Year: {props.data.birth_year}</h3>
                <h3>Eye Color: {props.data.eye_color}</h3>
                <h3>Height: {props.data.height}</h3>
                <h3>Mas: {props.data.mass}</h3>
            </Card> 
        </Row> 

    )
}

export default starWarsCard;