import React from 'react';
import styled from "styled-components";


const Container = styled.div `
display: flex;
justify-content: center;
`

const CardContainer = styled.div `
background: RGBA(0,0,0,.5);
width: 100%;
    width: 70%;
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    margin-top: 15px
`

// const PropertiesContainer = styled.div `
// background: RGBA(0,0,0,.5);
// width: 100%;
// `


const CharacterName = styled.h1 `
//
`

const CharacterInfo = styled.div `
dipslay:flex;
flex-wrap: wrap;
`

const Property = styled.p `
//
`



const CharacterCard = props => {
    return (
        <Container>
            <CardContainer className = "card-container" key = {props.index}>

                    <CharacterName className = "character-name">
                    {props.name}
                    </CharacterName>
                    <CharacterInfo>
                        <Property>Birth Year: {props.birth_year}</Property>
                        <Property>Gender: {props.gender}</Property>
                        <Property>Hair Color: {props.hair_color}</Property>
                        <Property>Eye Color: {props.eye}</Property>
                        <Property>Height: {props.height}</Property>
                        <Property>Weight: {props.mass}</Property>
                    </CharacterInfo>

            </CardContainer>
         </Container>
    );
};

export default CharacterCard;