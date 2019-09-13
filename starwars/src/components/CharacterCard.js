import React from 'react';
import styled from "styled-components";




const CardContainer = styled.div `
    background: RGBA(0,0,0,.7);
    width: 900px
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    margin-top: 15px
    border-radius: 5px;
`

// const PropertiesContainer = styled.div `
// background: RGBA(0,0,0,.5);
// width: 100%;
// `


const CharacterName = styled.h1 `
color: mediumturquoise;
`

const CharacterInfo = styled.div `
display:flex;
color: white;
flex-wrap: wrap;
margin: 20px;
`

const Property = styled.p `
margin-left: 20px;
margin-right: 20px;
font-size: 18px;
`

const Bold = styled.span `
font-weight: bold;

text-decoration: underline;
`



const CharacterCard = props => {
    return (
            <CardContainer className = "card-container" key = {props.index}>
                <CharacterName className = "character-name">
                {props.name}
                </CharacterName >
                <CharacterInfo className = "character-info">
                    <Property><Bold>Birth Year:</Bold> {props.birth_year}</Property>
                    <Property><Bold>Gender:</Bold> {props.gender}</Property>
                    <Property><Bold>Hair Color:</Bold> {props.hair_color}</Property>
                    <Property><Bold>Eye Color:</Bold> {props.eye_color}</Property>
                    <Property><Bold>Height:</Bold> {props.height}</Property>
                    <Property><Bold>Weight:</Bold> {props.mass}</Property>
                </CharacterInfo>
            </CardContainer>
    );
};

export default CharacterCard;