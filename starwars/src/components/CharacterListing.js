import React, { useState, useEffect } from "react";
import styled from 'styled-components'

const StyledDiv = styled.div``;

// paragraph
const StyledP = styled.p`
opacity: 1
color: white;
font-weight: bold;
`;

// section
const StyledSection = styled.section`
display: inline-block;
padding: 3rem;
background: gray;
width: 100px;
height: auto;
margin-bottom: 20px;
border: 2px dashed white;
`;

// headers h1 - h6
const StyledHead = styled.h2`
    font-size: 1.35rem;
    max-width: 100%;
    text-decoration: underline;

    :hover {
        color: white;
    }
`;

// a
const StyledA = styled.a``;
export function CharacterListing(props) {

    if (!props.person) return <h3>Loading...</h3>;

    return (
        <StyledDiv className="App">
            <StyledSection>
                <StyledHead className="characterName">{props.person.name}</StyledHead>
                <StyledP>Height: {props.person.height}</StyledP>
                <StyledP>{props.person.hair_color}</StyledP>
                <StyledP>{props.person.gender}</StyledP>
            </StyledSection>
        </StyledDiv>
    );
}