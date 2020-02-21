import React from 'react';
import StarWarsCard from './StarWarsCard';
import { Container, Row } from "reactstrap";

let StarWars = (props) => {
    // console.log('from StarWars', props.swData)
    return (
        <Container>
            <Row>
                {props.swData.map((person, index) => (
                <StarWarsCard
                key = {index}
                name = {person.name}
                height = {person.height}
                mass = {person.mass}
                gender = {person.gender}
                birth = {person.birth_year}
                /> 
            ))}
            </Row>
        </Container>
    )
}

export default StarWars;

