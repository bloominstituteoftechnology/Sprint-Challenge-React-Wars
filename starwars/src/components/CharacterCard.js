import React from "react"
import styled from "styled-components";



export default function CharacterCard(props) {

    const CharacterContainer = styled.div`
        background-color: white;
        border: 1px solid green;
        border-radius: 15px;
        width: 400px;
        margin: 0 auto;
    `;

    const CharacterHeading = styled.h1`
        color: blue;
        font-weight: bold;
    `;

    const CharacterInfo = styled.p`
        color: purple;
    `;

    return (
        <CharacterContainer>
            <CharacterHeading>{props.name}</CharacterHeading>
            <CharacterInfo>Birth year: {props.birthYear}</CharacterInfo>
            <CharacterInfo>Eye Color: {props.eyeColor}</CharacterInfo>
        </CharacterContainer>
    );
};