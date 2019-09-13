import React from 'react';
import styled from "styled-components";


const CardContainer = styled.div `
//
`

const

const CharacterName = styled.h1 `
//
`

const PropertiesContainer = styled.div `
//
`

const Property = styled.p `
//
`



const CharacterCard = props => {
    return (
        <CardContainer className = "card-container">
            <CharacterName>
            {props.name.toUpperCase()}
            </CharacterName>
            
            <PropertiesContainer>
                <Property>Birth Year: {props.birth_year}</Property>
                <Property>Gender: {props.gender}</Property>
                <Property>Hair Color: {props.hair_color}</Property>
                <Property>Eye Color: {props.eye}</Property>
                <Property>Height: {props.height}</Property>
                <Property>Weight: {props.mass}</Property>
            </PropertiesContainer>
        </CardContainer>
    );
};

export default CharacterCard;