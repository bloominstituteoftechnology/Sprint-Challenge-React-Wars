import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
border: 2px solid blue;
width: 25%;
border-radius: 20px;
background-color: peach;
margin-bottom: 30px;
`;

const CharacterCard = props => {

    return (
        <ContentWrapper>
            <h2>NAME: {props.char.name}</h2>
            <h3>BIRTH YEAR: {props.char.birth_year}</h3>
            <h3>EYE COLOR: {props.char.eye_color}</h3>
            <h4>GENDER: {props.char.gender}</h4>
        </ContentWrapper>
    );
};

export default CharacterCard;